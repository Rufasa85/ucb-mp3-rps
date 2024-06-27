const choices = ["R", "P", "S"];
let keepPlaying = true;
const stats = {
  guesses: {
    rock: 0,
    paper: 0,
    scissors: 0,
  },
  results: {
    wins: 0,
    losses: 0,
    ties: 0,
  },
};

while (keepPlaying) {
  //1. collect user guess
  // a popup asking user to make a choice
  //store choice in variable, userChoice
  let userChoice = prompt("What is your selection (R,P,S)?").toUpperCase();
  console.log("userChoice: ", userChoice);
  //EDGE CASE: make sure my app works regardless of casing
  while (!choices.includes(userChoice)) {
    alert(`Invalid selection. please choose R,P, or S`);
    userChoice = prompt("What is your selection (R,P,S)?").toUpperCase();
  }
  if (userChoice === "R") {
    stats.guesses.rock++;
  } else if (userChoice === "P") {
    stats.guesses.paper++;
  } else {
    stats.guesses.scissors++;
  }
  // EDGE CASE: What do i do if the user doesnt pick R,P,S
  //2. generate computer guess
  // randomly select R,P,S;
  // save it to variable, compChoice
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("compChoice: ", compChoice);
  alert(`Computer selects ${compChoice}`);
  //3. determine win/loss/tie
  //rock beats scissors, paper  beats rock, scissors beats paper;
  if (userChoice === compChoice) {
    alert("tie");
    stats.results.ties++;
  } else if (
    (userChoice === "R" && compChoice === "S") ||
    (userChoice == "S" && compChoice === "P") ||
    (userChoice === "P" && compChoice === "R")
  ) {
    alert("win");
    stats.results.wins++;
  } else {
    alert("lose");
    stats.results.losses++;
  }
  //4. ask the user to play again,
  keepPlaying = confirm("Do you want to keep playing?");
}

//display stats
alert(`Results:
    wins:${stats.results.wins}
    losses:${stats.results.losses}
    ties:${stats.results.ties}
Selections:
    rock:${stats.guesses.rock}
    paper:${stats.guesses.paper}
    scissors:${stats.guesses.scissors}`);
