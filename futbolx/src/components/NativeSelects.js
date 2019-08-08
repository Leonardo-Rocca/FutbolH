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
    hide:{
        display:'none',
    }
}));

    export default function TeamSelect(props) {
        let playerRecord = props.record;

    const classes = useStyles();

    let teamsNumber = new Array(props.teamsQuantity).fill(0).map((v,i)=>i+1);
        let formControlClass = playerRecord.checked? classes.formControl:classes.hide;
        let player = playerRecord.player;
        let playerSelection = playerRecord.teamNumber;

        return (
            <FormControl className={formControlClass}>
                <NativeSelect
                    value={playerSelection}
                    onChange={props.handleTeamSelectionChange(player)}
                    name="age"
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'age' }}
                >
                    <option value={0}>Sin equipo</option>
                    {teamsNumber.map((v)=> {

                         return   <option key={player.name+v} value={v}>{v}</option>
                        }
                    )}
                </NativeSelect>
            </FormControl>

    );
}