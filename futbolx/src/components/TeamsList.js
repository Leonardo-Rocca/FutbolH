import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
   //     maxWidth: 360,
   //     backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    listHeader: {
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.secondary.contrastText,
       // backgroundColor: theme.palette.background.paper,
    },

}));

export default function TeamsList(props) {
    const classes = useStyles();

    return (
        <List className={classes.root} subheader={<li />}>
            {props.teams.map((aTeam,sectionId) => (
                <li key={`section-${sectionId}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader  className={classes.listHeader}>{`Equipo ${sectionId+1}  - Habilidad ${aTeam.ability()}`}</ListSubheader>
                        {aTeam.players.map(item => (
                            <ListItem key={`${sectionId}-${item.name}`}>
                                <ListItemText primary={`${item.name}`} />
                            </ListItem>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
}