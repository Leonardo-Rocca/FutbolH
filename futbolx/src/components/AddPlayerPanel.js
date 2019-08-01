import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PlusButton from "./PlusButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    container: {
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
}));

export default function TextFields(props) {

    const handleAdd = props.handleAdd;

    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Juan',
        ability: 10.0,
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    
    let newPlayer={name:values.name,ability: parseFloat(values.ability)};

    function handelOnClick() {
        if (isDisabled()) return;
        let playerName1 = newPlayer.name;
        newPlayer.name = playerName1.size < 2 ? playerName1 : playerName1.charAt(0).toUpperCase() + playerName1.slice(1);
        handleAdd(newPlayer);
        setValues({name:'',ability: '',})
    }

    function isDisabled() {
        return values.name == '' || values.ability == ''
    }

    return (
        <div>
             <form className={classes.container} noValidate autoComplete="off">
                 <Typography variant="h6"  gutterBottom >
                     {'Agregar Jugadores '}
                 </Typography >

                 <TextField
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
                onChange={(e)=> {if (e.target.value<100) handleChange('ability')(e)}}
                type="number"

                   className={classes.textField}
                   InputLabelProps={{
                       shrink: true,
                   }}
                margin="normal"
            />
                 <PlusButton onClick={handelOnClick} disabled={isDisabled()}/>
             </form>
        </div>
    );
}