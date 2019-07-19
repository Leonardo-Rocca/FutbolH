import * as React from "react";
import ButtonAppBar from "./components/AppBar";
import CheckList from "./components/CheckList";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import TeamsList from "./components/TeamsList";
import Box from "@material-ui/core/Box";
import PlayersClient from './PlayersClient';
import AddPlayerComponent from "./components/AddPlayerComponent";
import TextField from "@material-ui/core/TextField";

class MainPanel extends React.Component {

    render() {

        var jugadores = [0, 1, 2, 3,5,6,7,8];

        console.log(1);
        console.log(PlayersClient());
        console.log(2);

        function generateTeams() {
            console.log("jugadores");
        }

        return (
            <div className="App">
                <header className="App-header-a">
                    <ButtonAppBar title="Arma tu Team"/>
                </header>
                <Box ml={4} mr={4}>

                    <AddPlayerComponent />

                    <CheckList players={jugadores}/>

                    <Button variant="contained" color="primary" onClick={generateTeams}>
                        <IconButton edge="start" color="inherit" aria-label="Generar">
                            <PlayArrowIcon/>
                        </IconButton>
                        Generar
                    </Button>

                    <Box justifyContent="center" display="flex" ml={4} mr={4}>
                        <TeamsList/>
                    </Box>
                </Box>
            </div>)
    }
}

export default MainPanel;