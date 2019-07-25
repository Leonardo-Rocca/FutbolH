import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PlusButton from "./PlusButton";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
        ability: '10',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    let newPlayer={name:values.name,ability:values.ability};

    function handelOnClick() {
        if (values.name == '' || values.ability == '') return;
        handleAdd(newPlayer);
        setValues({name:'',ability: '',})
    }

    return (
        <div>
             <form className={classes.container} noValidate autoComplete="off">
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
                   onChange={handleChange('ability')}
                type="number"
                   className={classes.textField}
                   InputLabelProps={{
                       shrink: true,
                   }}
                margin="normal"
            />
        </form>
            <PlusButton onClick={handelOnClick} />
        </div>
    );
}