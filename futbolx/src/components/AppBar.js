import React, {useState} from 'react';
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
import Modal from "@material-ui/core/Modal";
import FacebookIcon from '@material-ui/icons/Facebook';
import {Box, Container, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
    loginModal:{
        paddingTop:"10%",
        paddingLeft:"20%",
        paddingRight:"20%",
        outline: 0,
    } ,
    loginPaper:{
    padding:50,
}

}));

export default function ButtonAppBar(props) {
    const classes = useStyles();


    const [user, setUser] = React.useState(false);

    const responseFacebook = (response) => {
        console.log(response);
        setUser(response);
        props.onUpdateUserId(response.userID);
    }
    const [open,setOpen] = useState(false)

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
                        <LoginButton setOpen={setOpen}/>
                    }
                </Toolbar>
            </AppBar>
            <Modal
                className={classes.loginModal}
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="select login mode"
                aria-describedby="simple-modal-description"
            >
                <Box alignContent="center" >

                <Container maxWidth="xs">
                    <Paper className={classes.loginPaper}>
                        <Typography edge="start" variant="subtitle1" align="center" >
                            Ingresá para guardar y acceder a tus listas
                        </Typography>
                        <Box alignContent="center" p="100" >
                        <FacebookLogin
                    appId="369937723697248" //APP ID NOT CREATED YET
                    fields="name,picture"
                    //scope="user_friends"
                    callback={responseFacebook}
                    icon="fa-facebook"
                    render={renderProps => (
                        <Box alignContent="center" m={1} >
                        <Button onClick={renderProps.onClick}  variant="contained"
                                color="primary"
                                size="medium">
                        <IconButton edge="end" aria-label="delete"  >
                            <FacebookIcon color="inherit"/>
                        </IconButton>
                                Login
                        </Button>
                        </Box>
                    )}
                />
                        </Box>

                        </Paper>
                </Container>

                </Box>
            </Modal>

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

function LoginButton({setOpen}) {

    return (<>

        <IconButton edge="end" aria-label="delete" onClick={()=>setOpen(true)}>
            <Person color="secondary"/>
        </IconButton>
    </>)
}

const UserScreen = ({user}) => {
    let picture = user.picture;
    let styles = useStyles();
    if (!picture)
        return <div/>

    return (
        <>
            <h5 className={styles.userName}> {user.name}  </h5>
            <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
        </>
    );
}
