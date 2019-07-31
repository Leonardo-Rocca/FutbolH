export default function generateTeams(checkedPlayers, quantity,teams = []) {

    let tsize = Math.trunc(checkedPlayers.length / quantity);
    let j = 0
    for (let i = 0; i < quantity; i++) {
        j = j + tsize
        teams.push(new Team(checkedPlayers.slice(i * tsize, j)));
    }
    let restantes = checkedPlayers.length%quantity;

    if(restantes != 0)
    teams[0].addPlayers(checkedPlayers.slice(j-1,j-1+restantes));

    return teams
}


class Team {
    constructor(players) {
        this.players = players;
    }

    ability() {
        return this.players.map(e=>e.ability).reduce((a, b) => a + b, 0);
    }

    addPlayers(players){
        this.players = this.players.concat(players)
    }
}