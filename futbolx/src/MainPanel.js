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
import {AddPlayerPanel} from "./components/AddPlayerPanel";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import StickyFooter from "./components/Footer";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {Add} from "@material-ui/icons";


class MainPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            playersCheckList: [],
            teams: [],
            teamsNumber: 2,
            userId:null
        };
    }

    updateUserId(id) {
        this.setState({...this.state, userId: id})
    }

    getAll = () => {

        PlayersClient().then(response => this.state.playersCheckList = response.json())
            .then(data => this.setState({
                data: data, playersCheckList: data.map(j => {
                    return {
                        player: j,
                        checked: true,
                        teamNumber: 0
                    }
                })
            }));
    }

    componentDidMount() {
        this.getAll();
    }

    handleChangeTeamsNumber(event) {
        let number = event.target.value;
        if (number == '' || (number < 20 && number > 0)){
            number= number==''?number:parseInt(number);
            this.setState({...this.state, teamsNumber: number})
        }
    }

    // ABM
    getPlayers() {
        return this.state.playersCheckList.map(i => i.player);
    }

    handleAdd(player) {

        let newPlchkList = this.state.playersCheckList.slice(0);
        newPlchkList.push({player: player, checked: true})
        this.updatePlayersChecklist(newPlchkList);

    }

    handleDelete(player) {
        let newPlchkList = this.state.playersCheckList.slice(0);
        newPlchkList.splice(newPlchkList.indexOf(player), 1)
        this.updatePlayersChecklist(newPlchkList);
    }

    handleEdit(edited) {
        let newPlchkList = this.state.playersCheckList.slice(0)
        newPlchkList[edited.index].player = {name:edited.name,ability:parseFloat(edited.ability)};
        console.log(newPlchkList)
        this.updatePlayersChecklist(newPlchkList);
    }

    // CHECKS
    //hsndleCheck
    handleToggle(value) {
        let players = this.getPlayers();
        const currentIndex = players.indexOf(value.player);
        value.checked = !value.checked;
        const newChecked = [...this.state.playersCheckList];
        newChecked[currentIndex] = value;
        this.updatePlayersChecklist(newChecked);
    }

    handleToggleAll = () => {
        if (this.getSelectedRecords().length === this.state.playersCheckList.length) {
            this.setChecked(this.state.playersCheckList.map(r=>{r.checked=false;return r}));
        } else {
            this.setChecked(this.state.playersCheckList.map(r=>{r.checked=true;return r}));
        }
    }
    setChecked(items) {
       this.setState({...this.state, playersCheckList: items})
    }

    // SELECT TEAM
    handleTeamSelectionChange = player => event => {
        const currentIndex = this.getPlayers().indexOf(player);
        const newChecked = [...this.state.playersCheckList];
        newChecked[currentIndex].teamNumber = parseInt(event.target.value);

        this.updatePlayersChecklist(newChecked);

    };

    updatePlayersChecklist(newChecked) {
        newChecked.sort((a, b) => a.name < b.name ? -1 : 1);
        this.setState({...this.state, playersCheckList: newChecked})
    }

    generateTeams() {

        let checkedPlayers = this.getSelectedPlayers();
        checkedPlayers.sort(function () {
            return .5 - Math.random();
        });
        let quantity = this.state.teamsNumber;
        let groups = new Array(quantity).fill(0).map(
            (v, i) => this.getSelectedRecords().filter(p => p.teamNumber == i + 1).map(p => p.player));

        let teams = generateTeams(checkedPlayers, quantity, groups);

        this.setState({...this.state, teams: teams})
        console.log(this.state)
    }

    render() {

        let jugadores = this.state.playersCheckList;
        let checked = this.getSelectedPlayers();

        let teams = this.state.teams;

        let teamsQuantity = this.state.teamsNumber;


        const addPanelContent = {title:'Agregar Jugadores ',actionLabel:'Agregar',successMsg:"Jugador Agregado!",icon:<Add/>}

        return (
            <div className="App">
                <header className="App-header-a">
                    <ButtonAppBar title="Arma tu Equipo" onUpdateUserId={this.updateUserId.bind(this)}/>
                </header>
                <Box ml={4} mr={4}>

                    <AddPlayerPanel handleAdd={(v) => this.handleAdd.bind(this)(v)} names={jugadores.map(i => i.player.name)}
                    content={addPanelContent} player={{
                        name: '',
                        ability: '',
                    }}/>

                    <CheckList players={jugadores} checked={checked} teamsQuantity={teamsQuantity}
                               handleEdit={this.handleEdit.bind(this)}
                               handleDelete={this.handleDelete.bind(this)}
                               handleToggle={(v) => this.handleToggle.bind(this)(v)}
                               handleToggleAll={this.handleToggleAll.bind(this)}
                               handleTeamSelectionChange={this.handleTeamSelectionChange.bind(this)}/>

                    <TeamsNumber teamsNumber={teamsQuantity}
                                 handleChange={this.handleChangeTeamsNumber.bind(this)}/>

                    <Button variant="contained" color="primary" onClick={this.generateTeams.bind(this)} href="#teams"
                            disabled={checked.length < 1}>
                        <Box>
                            <Icon className="play-arrow" edge="start" color="inherit" aria-label="Generar">
                                <PlayArrowIcon/>
                            </Icon>
                        </Box>
                        Generar
                    </Button>

                     <TeamsList teams={teams}/>

                </Box>

                <StickyFooter/>
            </div>)
    }


    getSelectedPlayers() {
        return this.getSelectedRecords().map(i => i.player);
    }

    getSelectedRecords() {
        return this.state.playersCheckList.filter(i => i.checked);
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