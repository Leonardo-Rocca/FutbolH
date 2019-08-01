import * as React from "react";
import ButtonAppBar from "./components/AppBar";
import CheckList from "./components/CheckList";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import TeamsList from "./components/TeamsList";
import Box from "@material-ui/core/Box";
import PlayersClient from './model/PlayersClientMock';
import generateTeams from './model/TeamGenerator';
import AddPlayerPanel from "./components/AddPlayerPanel";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import StickyFooter from "./components/Footer";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


class MainPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            playersCheckList: [],
            teams: [],
            teamsNumber: 2
        };
    }

    getAll = () => {

        console.log(1);
        PlayersClient().then(response => this.state.playersCheckList = response.json())
            .then(data => this.setState({
                data: data, playersCheckList: data.map(j => {
                    return {
                        player: j,
                        checked: true
                    }
                })
            }));
    }

    componentDidMount() {
        this.getAll();
    }

    handleChangeTeamsNumber(event) {
        let number = event.target.value;
        if (number=='' || (number<20 &&number>0))
            this.setState({...this.state, teamsNumber: number})
    }

    //hsndleCheck
    handleToggle(value) {
        let players = this.state.playersCheckList.map(i => i.player);
        const currentIndex = players.indexOf(value.player);
        value.checked = !value.checked;
        const newChecked = [...this.state.playersCheckList];
        newChecked[currentIndex] = value;

        this.setState({...this.state, playersCheckList: newChecked})
    }

    handleAdd(player) {
        let newPlchkList = this.state.playersCheckList.slice(0);
        newPlchkList.push({player: player, checked: false})
        this.setState({...this.state, playersCheckList: newPlchkList})
    }

    handleDelete(player) {
        let newPlchkList = this.state.playersCheckList.slice(0);
        newPlchkList.splice(newPlchkList.indexOf(player), 1)
        this.setState({...this.state, playersCheckList: newPlchkList})
    }


    generateTeams() {

        let checkedPlayers = this.getSelectedPlayers();
        checkedPlayers.sort(function () {
            return .5 - Math.random();
        });
        let quantity = this.state.teamsNumber;
        let teams = generateTeams(checkedPlayers, quantity);

        this.setState({...this.state, teams: teams})
        console.log(this.state)
    }

    render() {

        let jugadores = this.state.playersCheckList;
        let checked = this.getSelectedPlayers();

        let teams = this.state.teams;


        return (
            <div className="App">
                <header className="App-header-a">
                    <ButtonAppBar title="Arma tu Team"/>
                </header>
                <Box ml={4} mr={4}>
                    {/*<Typography variant="h5" component="h4" gutterBottom>
                        {'Agregar jugadores'}
                    </Typography>*/}
                    <AddPlayerPanel handleAdd={(v) => this.handleAdd.bind(this)(v)}/>

                    <CheckList players={jugadores} checked={checked} handleDelete={this.handleDelete.bind(this)}
                               handleToggle={(v) => this.handleToggle.bind(this)(v)}/>
                    <TeamsNumber teamsNumber={this.state.teamsNumber} handleChange={this.handleChangeTeamsNumber.bind(this)}/>

                    <Button variant="contained" color="primary" onClick={this.generateTeams.bind(this)} href="#teams">
                        <Box>
                            <Icon className="play-arrow" edge="start" color="inherit" aria-label="Generar">
                                <PlayArrowIcon/>
                            </Icon>
                        </Box>
                        Generar
                    </Button>

                    <Box justifyContent="center" display="flex" ml={6} mr={6} id="teams">
                        <TeamsList teams={teams}/>
                    </Box>
                </Box>

                <StickyFooter/>
            </div>)
    }


    getSelectedPlayers() {
        return this.state.playersCheckList.filter(i => i.checked).map(i => i.player);
    }
}


function TeamsNumber(props) {

    const useStyles = makeStyles(theme => ({
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));
    return (
        <TextField
            id="teamsNumber" label="Cantidad de Equipos" type="number"
            value={props.teamsNumber}
            onChange={props.handleChange}
            className={useStyles().textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
        />
    )
}

export default MainPanel;