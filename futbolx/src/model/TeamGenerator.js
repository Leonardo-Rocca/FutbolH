import combinations from './CombinationGenerator';
import desviacionEstandar from './VarianceProvider';

function makeCombinations(checkedPlayers) {
    let all = checkedPlayers.slice(0);
    all.reverse();
    return combinations(all).concat(combinations(checkedPlayers));
}

export default function generateTeams(checkedPlayers, quantity, teamsSelected = []) {

    function generateMatch(players, quantity, teamsSelected) {

        let teams= [];
        let tsize = Math.trunc(players.length / quantity);
        let j = 0
        for (let i = 0; i < quantity; i++) {
            j = j + tsize
            teams.push(new Team(players.slice(i * tsize, j)));
        }

        let restantes = players.length % quantity;
        if (restantes != 0)
            teams[0].addPlayers(players.slice(players.length - restantes));

        return new Match(teams);
    }


    // hacemos todas las combinaciones validas y ordenamos por diferencia
    let matches = makeCombinations(checkedPlayers).map(li => generateMatch(li, quantity, teamsSelected))
        .filter(match=>match.contains(teamsSelected))
        .sort((a, b) => a.abilityDifference() < b.abilityDifference() ? -1 : 1);

    return matches.length>0?matches[0].teams:[];
}


class Team {
    constructor(players) {
        this.players = players;
    }

    ability() {
        return this.players.map(e => e.ability).reduce((a, b) => a + b, 0);
    }

    addPlayers(players) {
        this.players = this.players.concat(players)
    }

    containsAll(aGroup) {
        if(aGroup && aGroup.length){
            return aGroup.every((val) => this.players.includes(val))
        }else{
            return true;
        }
    }
}

class Match {
    constructor(teams) {
        this.teams = teams;
    }

    abilityDifference() {
        return desviacionEstandar(this.teams.map(e => e.ability()));
    }

    teams() {
        return this.teams;
    }

    contains (teamsSelected) {
        if(teamsSelected && teamsSelected.length){
            return teamsSelected.every((aGroup,index) => this.teams[index].containsAll(aGroup));
        }else{
            return true;
        }
    }

}