// console.log('hi');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case "rock":
    case "paper":
    case "scissors":
    case "bomb":
      return userInput;
      break;
  
    default:
      console.log("Error: Wrong user input.");
      break;
  }
};

// console.log(getUserChoice("paper"));

let getComputerChoice = () => {
  getComputerChoice = Math.floor(Math.random() * 3);
  switch (getComputerChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;

    default:
      console.log("Error: Wrong computer choice.");
      break;
  }
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  switch (true) {
    case (userChoice === computerChoice):
      return "The game is a tie!";
      break;
    case ((userChoice === "rock") && (computerChoice === "paper")):
      return "The computer won!";
      break;
    case ((userChoice === "rock") && (computerChoice === "scissors")):
      return "The user won!";
      break;
    case ((userChoice === "paper") && (computerChoice === "scissors")):
      return "The computer won!";
      break;
    case ((userChoice === "paper") && (computerChoice === "rock")):
      return "The user won!";
      break;
    case ((userChoice === "scissors") && (computerChoice === "rock")):
      return "The computer won!";
      break;
    case ((userChoice === "scissors") && (computerChoice === "paper")):
      return "The user won!";
      break;
    case ((userChoice === "bomb") && ((computerChoice === "rock") || (computerChoice === "paper") || (computerChoice === "scissors"))):
      return "The user won!";
      break;
  
    default:
      console.log("Error: Unable to determine winner.");
      break;
  }
};

// console.log(determineWinner("scissors", "rock"));

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}.`);
  console.log(`The computer threw: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();