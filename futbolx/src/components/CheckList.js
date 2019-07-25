import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Delete from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
       // maxWidth: 360,
       // backgroundColor: theme.palette.background.paper,
    },
}));

export default function CheckList(props) {
    const classes = useStyles();
  //  const [checked, setChecked] = React.useState([0]);

    const checked = props.checked;
    const handleToggle = props.handleToggle;
   /* const setChecked = props.setChecked;

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
*/
    function isChecked(value) {
        return checked.indexOf(value.player) !== -1;
    }

    return (
        <List className={classes.root}>
            {props.players.map(value => {
                let playerName = value.player.name;
                playerName = playerName.size<2?playerName:playerName.charAt(0).toUpperCase() + playerName.slice(1);
                const labelId = `checkbox-list-label-${playerName}`;

                return (
                    <ListItem key={playerName} role={undefined} dense button onClick={() => handleToggle(value)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={isChecked(value)}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={` ${playerName}`} />
                        <ListItemSecondaryAction>
{/*                            <IconButton edge="end" aria-label="Comments">
                                <Edit color="secondary"/>
                            </IconButton>*/}
                            <IconButton edge="end" aria-label="Comments">
                                <Delete color="secondary"/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}