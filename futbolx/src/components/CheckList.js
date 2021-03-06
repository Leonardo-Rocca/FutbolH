import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Delete from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/styles";
import CustomizedSnackbars from "./Snackbar";
import TeamSelect from "./NativeSelects";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import {Modal} from "@material-ui/core";
import AddPlayerComponent from "./AddPlayerComponent";
import GeneralPanel from "./AddPlayerPanel";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    selectedLabel: {
        width: '100%',
        paddingTop: 20,
        // backgroundColor: theme.palette.background.paper,
    },
    selectAll: {
        paddingLeft: 4,
        paddingTop: 1,
    },
    panel: {
        paddingTop: theme.spacing(1),
    }
}));

export default function CheckList(props) {
    const classes = useStyles();

    const checked = props.checked;
    let players = props.players;

    const handleToggle = props.handleToggle;
    const handleDelete = props.handleDelete;


    const [open, setOpen] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [playerToDelete, setPlayerToDelete] = React.useState({player: {name: 'ds'}});
    const [playerToEdit, setPlayerToEdit] = React.useState({name: 'ed',ability:0.0,index:-1});
    const [editedName, setEditedName] = React.useState('');


    function handleClickOpen(value) {
        setOpen(true);
        setPlayerToDelete(value)
    }

    function handleClickEdit(value) {
        setModalOpen(true);
        setPlayerToEdit({...value,index:players.map(p=>p.player.name).indexOf(value.name)})
        setEditedName(value.name)
    }

    const handleClose= () =>setOpen(false);

    const isChecked = (value) => checked.indexOf(value) !== -1

    const [openSnack, setOpenSnack] = React.useState(false);

    const handleClickSnackBar = () =>        setOpenSnack(true)

    function handleCloseSnackBar(event, reason) {
        if (reason === 'clickaway')
            return;
        setOpenSnack(false);
    }

    function handleEdit(v) {
        console.log(v);
        setModalOpen(false);
        props.handleEdit(playerToEdit);
    }

    const editPanelContent = {
        title: 'Editar Jugador ',
        actionLabel: 'Editar',
        successMsg: "Jugador Editado!",
        icon: <Edit/>
    }

    let playersNumber = checked.length;
    let totalPlayersNumber = players.length;

    const unselectedNames= () =>   players.map(v=>v.player.name).filter(e=>e!==editedName)

    return (
        <div className={classes.panel}>
            <Card>
                <CssBaseline/>

                <Typography variant="h6" gutterBottom className={classes.selectedLabel}>
                    {'Seleccione los jugadores '}
                </Typography>

                <CardHeader
                    className={classes.selectAll}
                    avatar={
                        <Checkbox
                            onClick={props.handleToggleAll}
                            checked={playersNumber === totalPlayersNumber && totalPlayersNumber !== 0}
                            indeterminate={playersNumber !== totalPlayersNumber && playersNumber !== 0}
                            disabled={totalPlayersNumber === 0}
                            inputProps={{'aria-label': 'all items selected'}}
                        />
                    }
                    title={` ${playersNumber}/${totalPlayersNumber} jugadores seleccionados`}
                /> <Divider/>
                <List>
                    {players.map(value => {
                        let player = value.player;
                        let playerName = player.name;
                        let playerAbility = player.ability;
                        playerName = playerName.size < 2 ? playerName : playerName.charAt(0).toUpperCase() + playerName.slice(1);
                        const labelId = `checkbox-list-label-${playerName}`;

                        return (
                            <ListItem key={playerName} role={undefined} dense button
                                      onClick={() => handleToggle(value)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={isChecked(player)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={` ${playerName}`} secondary={playerAbility}/>
                                <ListItemSecondaryAction>
                                    <TeamSelect record={value}
                                                teamsQuantity={props.teamsQuantity}
                                                handleTeamSelectionChange={props.handleTeamSelectionChange}/>
                                    <IconButton edge="end" aria-label="Comments" onClick={()=>handleClickEdit(player)}>
                                        <Edit color="secondary"/>
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleClickOpen(value)}>
                                        <Delete color="secondary"/>
                                    </IconButton>


                                </ListItemSecondaryAction>
                            </ListItem>
                        );

                    })}
                </List>
                <AlertDialogSlide open={open} setOpen={setOpen} handleClose={handleClose}
                                  playerToDelete={playerToDelete}
                                  confirm={(smth) => {
                                      handleDelete(smth);
                                      handleClickSnackBar()
                                  }}/>



                <EditPanel open={modalOpen} setOpen={setModalOpen} handleEdit={handleEdit} forbiddenNames={unselectedNames()}
                           playerToEdit={playerToEdit} setPlayerToEdit={setPlayerToEdit} />

                <CustomizedSnackbars type="info" message="Jugador Eliminado!" open={openSnack}
                                     handleCloseSnackBar={handleCloseSnackBar}
                                     handleClickSnackBar={handleClickSnackBar}/>
            </Card>
        </div>
    );
}

const editPanelContent = {
    title: 'Editar Jugador ',
    actionLabel: 'Editar',
    successMsg: "Jugador Editado!",
    icon: <Edit/>
}
const EditPanelDep = (handleEdit) => React.forwardRef((props, ref) => <div {...props} ref={ref}></div>)

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
    const {open, setOpen, handleClose, playerToDelete, confirm} = props;

    return (
        <div>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Eliminar al jugador"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        ¿Desea eliminar a {playerToDelete.player.name} ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={() => {
                        confirm(playerToDelete);
                        handleClose();
                    }} variant="outlined" color="secondary">
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function EditPanel(props) {
    return(
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => props.setOpen(false)}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <GeneralPanel handleAdd={props.handleEdit} names={props.forbiddenNames} content={editPanelContent} player={props.playerToEdit}
                          setPlayer={props.setPlayerToEdit}/>
        </Dialog>
    )

}