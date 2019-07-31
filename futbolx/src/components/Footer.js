import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {Box} from "@material-ui/core";

function MadeWithLove() {
    return (
        <div>

        <Typography variant="body2" color="inherit">
            {'Copyright  ©Armá tu equipo 2019'}
        </Typography>
            <Typography variant="body2" color="inherit">
                {' Built with ❤ with'}
                <Link color="inherit" href="https://material-ui.com/">
                Material-UI
            </Link>
        </Typography>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(8),
        minHeight: '15vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3),
        marginTop: 'auto',
        backgroundColor:  theme.palette.primary.dark,
        color:theme.palette.primary.contrastText,
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
{/*
                    <Typography variant="h2" component="h1" gutterBottom>
                        Armá tu equipo
                    </Typography>
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="body1">Sticky footer placeholder.</Typography>
            </Container>*/}
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        <Link color="inherit" href="#teams">
                            Armá tu equipo.
                        </Link>
                    </Typography>
                    <Box mt={4} >
                    <MadeWithLove className={classes.main} />
                    </Box>
                 </Container>
            </footer>
        </div>
    );
}