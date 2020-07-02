import React, {useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PlusButton from "./PlusButton";
import Typography from "@material-ui/core/Typography";
import CustomizedSnackbars from "./Snackbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import PlayArrowIcon from "@material-ui/core/SvgIcon/SvgIcon";

import AddIcon from '@material-ui/icons/Add';
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
    container: {
     //   margin: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(1),
        minWidth: 280,
    },
    form:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',

        },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    plusBtn:{
        marginBottom: 5,
    }
}));
export function AddPlayerPanel(props) {
    const [values, setValues] = React.useState(props.player);
    console.log('addpanel')
    return GeneralPanel({...props,player:values,setPlayer:setValues})
}

export default function GeneralPanel(props) {

    const content = props.content;
    const handleAdd = props.handleAdd;
    const classes = useStyles();

    const values = props.player;
    const setValues = props.setPlayer;

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };
console.log(props.names.map(n=>n.toUpperCase()))
console.log(values.name.toUpperCase())

    let error = () => props.names.map(n=>n.toUpperCase()).includes(values.name.toUpperCase());

    let newPlayer = {name: values.name, ability: parseFloat(values.ability)};

    function handelOnClick() {
        if (isDisabled()) return;
        let playerName1 = newPlayer.name;
        newPlayer.name = playerName1.size < 2 ? playerName1 : playerName1.charAt(0).toUpperCase() + playerName1.slice(1);
        handleAdd(newPlayer);
        setValues({name: '', ability: '',})
    }

    function isDisabled() {
        return values.name == '' || values.ability == '' || error()
    }


    const [open, setOpen] = React.useState(false);

    function handleClickSnackBar() {
        setOpen(true);
    }

    function handleCloseSnackBar(event, reason) {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    }

    let errorText = error() ? 'El nombre ya existe' : '';

    //let selectedPlayer= typeof props.player !== 'undefined' ? props.player: values;

    return (
        <div className={classes.container}>
            <Card color={"primary"}>
                <CardHeader title={content.title} />

            <form className={classes.form} noValidate autoComplete="off">

                <TextField
                    required
                    error={error()}
                    helperText={errorText}
                    id="standard-name"
                    label="Nombre"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    label="Habilidad"
                    value={values.ability}
                    onChange={(e) => {
                        if (e.target.value < 101) handleChange('ability')(e)
                    }}
                    type="number"
                    placeholder="Puntaje del 1 al 10"

                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <Box ml={4} mr={4}>
                    <Button variant="contained" color="primary" type="submit"
                            onClick={() => {  handelOnClick(); handleClickSnackBar()}}
                        disabled={isDisabled()}>
                        <Icon className={classes.plusBtn}  color="inherit" aria-label="OK">
                            {content.icon}
                        </Icon>
                        {content.actionLabel}
                </Button>
                </Box>

{/*                <PlusButton onClick={() => {handelOnClick(); handleClickSnackBar()}} disabled={isDisabled()}/>*/}
                <CustomizedSnackbars type="success" message={content.successMsg} open={open}
                                     handleCloseSnackBar={handleCloseSnackBar}
                                     handleClickSnackBar={handleClickSnackBar}/>

                <Box mb={4} />
            </form>
            </Card>
        </div>
    );
}