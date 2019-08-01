import combinations from './CombinationGenerator';
import desviacionEstandar from './VarianceProvider';

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

    let matches = combinations(checkedPlayers).map(li => generateMatch(li, quantity, teamsSelected))
        .sort((a, b) => a.abilityDifference() < b.abilityDifference() ? -1 : 1);

    return matches[0].teams;
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
}