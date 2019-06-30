import * as React from "react";
import ButtonAppBar from "./components/AppBar";
import CheckList from "./components/CheckList";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import TeamsList from "./components/TeamsList";
import Box from "@material-ui/core/Box";

class MainPanel extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header-a">
                    <ButtonAppBar title="Arma tu Team"/>
                </header>
                <Box ml={4} mr={4}>
                    <CheckList/>

                    <Button variant="contained" color="primary">
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