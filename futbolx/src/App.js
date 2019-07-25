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
        /*primary: {
            main: '#aeea00',// green
            contrastText: '#ffffff',
        },*/
        primary:green,
        secondary: {
            main: '#00685b',// teal
          //  contrastText: '#ffffff',
        },
       // type: 'dark',
      //  contrastText: '#ffcc00',
        contrastThreshold: 3,
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
