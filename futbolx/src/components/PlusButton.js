import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
        backgroundColor:theme.palette.primary.dark,
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function PlusButton(props) {
    const classes = useStyles();

    return (
        <div>
            <Fab type="submit" aria-label="Add" className={classes.fab} onClick={props.onClick} disabled={props.disabled}>
                <AddIcon />
            </Fab>
        </div>
    );
}