import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function MenuDrawer({trigger,logOut,savePlayersLocal}:{trigger: any,logOut: ()=>any,savePlayersLocal: ()=>any}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent,) => {
        if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div className={clsx(classes.list, {[classes.fullList]: anchor === 'top' || anchor === 'bottom',})} role="presentation"
             onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} >
            <List>
                {[{name:'Log out', icon: <ExitToAppIcon />, action:logOut}].map((text) => (
                    <ListItem button key={text.name} onClick={text.action}>
                        <ListItemIcon>{text.icon }</ListItemIcon>
                        <ListItemText primary={text.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[{name:'Guardar jugadores localmente', icon: <SaveIcon />, action:savePlayersLocal}].map((text) => (
                    <ListItem button key={text.name} onClick={text.action}>
                        <ListItemIcon>{text.icon }</ListItemIcon>
                        <ListItemText primary={text.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const anchor ='right'
    return (
        <div>
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{trigger}</Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}