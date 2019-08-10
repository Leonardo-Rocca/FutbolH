import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookLoginButton from "./FacebookLoginButton";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Delete from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {Person} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom:theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color:theme.palette.primary.contrastText,
    },
    userName:{
        marginRight: theme.spacing(2),
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();


    const [user, setUser] = React.useState(false);

    const responseFacebook = (response) => {
        console.log(response);
        setUser(response);
        props.onUpdateUserId(response.userID);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                   {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>*/}
                    <Typography edge="start" variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>

                    { user ? <UserScreen user={user}/> :
                        <LoginButton facebookResponse={responseFacebook}/>
                    }
                </Toolbar>
            </AppBar>

        </div>
    );
}

const LoginButton2323 = ({responseFacebook})=>(
    <FacebookLogin
        appId="369937723697248" //APP ID NOT CREATED YET
        fields="name,picture"
        callback={responseFacebook}
        icon="fa-facebook"
    />
)

function LoginButton(props) {
    let responseFacebook=props.facebookResponse;
    const classes = useStyles();

    return (
        <FacebookLogin
        appId="369937723697248" //APP ID NOT CREATED YET
        fields="name,picture"
        //scope="user_friends"
        callback={responseFacebook}
        icon="fa-facebook"
        render={renderProps => (
            <IconButton edge="end" aria-label="delete" onClick={renderProps.onClick}>
                <Person color="secondary"/>
            </IconButton>
        )}
    />)
}

const UserScreen = ({user}) => (
    <>
        <h5 className={useStyles().userName}> {user.name}  </h5>
        <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
    </>
)
