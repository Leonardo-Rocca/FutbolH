import React from 'react';
import logo from './logo.svg';
import './App.css';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/lightGreen';
import {createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";
import MainPanel from './MainPanel';

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
            <MainPanel />
        </ThemeProvider>
    );
}

export default App;
