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
    //  const [checked, setChecked] = React.useState([0]);

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            playersCheckList: [],
            checked:[0]
        };


    }

    getAll = () => {

        console.log(1);
        PlayersClient().then(response => this.state.playersCheckList = response.json())
            .then(data => this.setState({
                data: data, playersCheckList: data.map(j => {
                    return {
                        player: j,
                        checked: false
                    }
                })
            }));
        console.log(2);
    }

    componentDidMount() {
        this.getAll();
    }

      handleToggle(value) {
          let checked = this.state.checked;

          const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        let newState= {...this.state};
        newState.checked=newChecked;
        this.setState(newState)
    }


        render(){
            console.log(this.state.playersCheckList)
          //  var jugadores = [0, 1, 2, 3,5,6,7,8];
            let jugadores = this.state.playersCheckList;

            let checked = this.state.checked;


        function generateTeams() {
            console.log({checked});
        }

        return (
            <div className="App">
                <header className="App-header-a">
                    <ButtonAppBar title="Arma tu Team"/>
                </header>
                <Box ml={4} mr={4}>

                    <AddPlayerComponent />

                    <CheckList players={jugadores} checked={checked} handleToggle={(v)=>this.handleToggle.bind(this)(v)}/>

                    <Button variant="contained" color="primary" onClick={generateTeams}>
                        <Box>
                        <IconButton edge="start" color="inherit" aria-label="Generar">
                            <PlayArrowIcon/>
                        </IconButton>
                        </Box>
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