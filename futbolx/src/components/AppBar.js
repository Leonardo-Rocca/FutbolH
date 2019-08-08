import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookLoginButton from "./FacebookLoginButton";
import FacebookLogin from 'react-facebook-login';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color:theme.palette.primary.contrastText,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();


    const [user, setUser] = React.useState(false);

    const responseFacebook = (response) => {
        console.log(response);
        setUser(response)
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
                    <Button color="inherit">Login</Button>

                    { user ? <UserScreen user={user}/> :
                        <LoginButton facebookResponse={responseFacebook}/>
                    }
                </Toolbar>
            </AppBar>

        </div>
    );
}

const LoginButton = ({responseFacebook})=>(
    <FacebookLogin
        appId="369937723697248" //APP ID NOT CREATED YET
        fields="name,picture"
        callback={responseFacebook}
        icon="fa-facebook"
    />
)

const UserScreen = ({user}) => (
    <>
        <h1>Welcome {user.name}!</h1>
        <p>{ user.email }</p>
        <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
    </>
)
