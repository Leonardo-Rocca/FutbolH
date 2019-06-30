import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/lightGreen';
import {createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import ButtonAppBar from "./components/AppBar";
import Typography from "@material-ui/core/Typography";
import CheckList from "./components/CheckList";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import TeamsList from "./components/TeamsList";
const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: teal,
        type: 'dark',
        contrastText: '#ffcc00',
    },
    status: {
        danger: 'orange',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-headera">
                <ButtonAppBar title="Arma tu Team"/>
                </header>
                <CheckList />
                <Button variant="contained" color="primary">
                    <IconButton edge="start" color="inherit" aria-label="Generar">
                        <PlayArrowIcon />
                    </IconButton>
                    Generar
                </Button>

                <TeamsList/>
            </div>
        </ThemeProvider>
    );
}

export default App;
