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
}));

export default function CheckList(props) {
    const classes = useStyles();

    const checked = props.checked;
    const handleToggle = props.handleToggle;
    const handleDelete = props.handleDelete;

    const [open, setOpen] = React.useState(false);
    const [playerToDelete, setPlayerToDelete] = React.useState({player: {name: 'ds'}});

    function handleClickOpen(value) {
        setOpen(true);
        console.log(value)
        setPlayerToDelete(value)
    }

    function handleClose() {
        setOpen(false);
    }


    function isChecked(value) {
        return checked.indexOf(value) !== -1;
    }

    const [openSnack, setOpenSnack] = React.useState(false);

    function handleClickSnackBar() {
        setOpenSnack(true);
    }

    function handleCloseSnackBar(event, reason) {
        if (reason === 'clickaway')
            return;
        setOpenSnack(false);
    }

    let playersNumber = checked.length;
    return (
        <div>
            <CssBaseline />

            <Typography variant="h6"  gutterBottom className={classes.selectedLabel}>
                {'Seleccione los jugadores '}
            </Typography >
            <SelectedPlayersLabel playersNumber={playersNumber}/>
            <List className={classes.root}>
                {props.players.map(value => {
                    let playerName = value.player.name;
                    let playerAbility = value.player.ability;
                    playerName = playerName.size < 2 ? playerName : playerName.charAt(0).toUpperCase() + playerName.slice(1);
                    const labelId = `checkbox-list-label-${playerName}`;

                    return (
                        <ListItem key={playerName} role={undefined} dense button onClick={() => handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={isChecked(value.player)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={` ${playerName}`} secondary={playerAbility}/>
                            <ListItemSecondaryAction>
                                {/*  <TeamSelect />
                                                        <IconButton edge="end" aria-label="Comments">
                                <Edit color="secondary"/>
                            </IconButton>*/}
                                <IconButton edge="end" aria-label="delete" onClick={() => handleClickOpen(value)}>
                                    <Delete color="secondary"/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );

                })}
            </List>
            <AlertDialogSlide open={open} setOpen={setOpen} handleClose={handleClose} playerToDelete={playerToDelete}
                              confirm={(smth)=>{handleDelete(smth);handleClickSnackBar()}}/>
            <CustomizedSnackbars type="info" message="Jugador Eliminado!" open={openSnack} handleCloseSnackBar={handleCloseSnackBar} handleClickSnackBar={handleClickSnackBar}/>

        </div>
    );
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SelectedPlayersLabel(props) {
    let selectedLabel=props.playersNumber+' jugadores seleccionados';
    const classes = useStyles();

    return (
        <Typography variant="caption" display="block" gutterBottom className={classes.selectedLabel}>
        {selectedLabel}
    </Typography >)
}

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