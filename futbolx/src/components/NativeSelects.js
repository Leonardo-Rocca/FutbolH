import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 12,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

    export default function TeamSelect(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

/*    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);*/


    return (
            <FormControl className={classes.formControl}>
                <NativeSelect
                    value={props.playerSelection}
                    onChange={props.handleTeamSelectionChange(props.player)}
                    name="age"
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'age' }}
                >
                    <option value={0}>Sin equipo</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </NativeSelect>
            </FormControl>

    );
}