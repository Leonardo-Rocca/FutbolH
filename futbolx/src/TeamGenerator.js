export default function generateTeams(checkedPlayers, quantity,teams = []) {

    let tsize = Math.trunc(checkedPlayers.length / quantity);
    let j = 0
    for (let i = 0; i < quantity; i++) {
        j = j + tsize
        teams.push(checkedPlayers.slice(i * tsize, j));
    }
    return teams
}