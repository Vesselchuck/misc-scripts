const team = {
  _players: [
    {
      firstName: "Lenny",
      lastName: "Hopkins",
      age: 31
    },
    {
      firstName: "Timothy",
      lastName: "Fairgraves",
      age: 27
    },
    {
      firstName: "Cedric",
      lastName: "Rowans",
      age: 29
    }
    ],
  _games: [
    {
      opponent: "Ohio Drakes",
      teamPoints: 2,
      opponentPoints: 3
    },
    {
      opponent: "West Virginia Cougars",
      teamPoints: 4,
      opponentPoints: 1
    },
    {
      opponent: "Alabama Frogs",
      teamPoints: 5,
      opponentPoints: 0
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer (newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    team._players.push(player);
  },
  addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    team._games.push(game);
  }
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Oklahoma Titans", 5, 4);

console.log(team.players);
console.log(team.games);