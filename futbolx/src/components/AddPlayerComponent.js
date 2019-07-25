import TextField from "@material-ui/core/TextField";
import PlusButton from "./PlusButton";
import { makeStyles } from '@material-ui/core/styles';
import * as React from "react";
/*
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
}));

*/
//const classes = useStyles();

export default class AddPlayerComponent extends React.Component {

    render() {
/*
     const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const [values, setValues] = React.useState({
                                                   name: 'Cat in the Hat',
                                                   ability: '',
                                                   multiline: 'Controlled',
                                                   currency: 'EUR',
                                               });
*/
        return (
            <div>

                <TextField
                    id="standard-name"
                    label="Nombre"
                    //  className={classes.textField}
                    //   value={values.name}
                    //  onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    label="Habilidad"
                    //   value={values.ability}
                    //   onChange={handleChange('ability')}
                    type="number"
                    //   className={classes.textField}
                    /*   InputLabelProps={{
                           shrink: true,
                       }}*/
                    margin="normal"
                />
                <PlusButton/>

            </div>

        )
    }
}