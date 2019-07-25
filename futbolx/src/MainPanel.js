import * as React from "react";
import ButtonAppBar from "./components/AppBar";
import CheckList from "./components/CheckList";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import TeamsList from "./components/TeamsList";
import Box from "@material-ui/core/Box";
import PlayersClient from './PlayersClient';
import AddPlayerPanel from "./components/AddPlayerPanel";
import Icon from "@material-ui/core/Icon";

class MainPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            playersCheckList: [],
            checked: [],
            teams:[]
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
    }

    componentDidMount() {
        this.getAll();
    }

    handleToggle(value) {
        let checked = this.state.checked;
    console.log(value)
        const currentIndex = checked.indexOf(value.player);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value.player);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        let newState = {...this.state};
        newState.checked = newChecked;
        this.setState(newState)
    }

    handleAdd(player){

        let newState = {...this.state};
        let newPlchkList =newState.playersCheckList.slice(0);
        newPlchkList.push({player:player,checked:false})

        newState.playersCheckList =newPlchkList;
        this.setState(newState)
    }

     generateTeams() {

         let teams = [];
         let checkedPlayers = this.state.checked;
         checkedPlayers.sort(function() {
             return .5 - Math.random();
         });
         let tsize=Math.trunc(checkedPlayers.length/2);
         let team1 = checkedPlayers.slice(0,tsize);
         let team2 = checkedPlayers.slice(tsize);
         teams.push(team1);
         teams.push(team2);
         this.setState({...this.state,teams: teams})
         console.log(this.state)
     }

    render() {

        let jugadores = this.state.playersCheckList;
        let checked = this.state.checked;
        let teams = this.state.teams;


        return (
            <div className="App">
                <header className="App-header-a">
                    <ButtonAppBar title="Arma tu Team"/>
                </header>
                <Box ml={4} mr={4}>

                    <AddPlayerPanel handleAdd={(v) => this.handleAdd.bind(this)(v)}/>

                    <CheckList players={jugadores} checked={checked}
                               handleToggle={(v) => this.handleToggle.bind(this)(v)}/>

                    <Button variant="contained" color="primary" onClick={this.generateTeams.bind(this)}>
                        <Box>
                            <Icon className="play-arrow" edge="start" color="inherit" aria-label="Generar">
                                <PlayArrowIcon/>
                            </Icon>
                        </Box>
                        Generar
                    </Button>

                    <Box justifyContent="center" display="flex" ml={4} mr={4}>
                        <TeamsList teams={teams}/>
                    </Box>
                </Box>
            </div>)
    }


}

export default MainPanel;