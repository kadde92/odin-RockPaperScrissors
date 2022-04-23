OPTIONS = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return OPTIONS[random];
}

function playerTurn() {
    let askPlayer = prompt('Choose Rock, Paper or Scissors');
    return `${askPlayer[0].toUpperCase()}${askPlayer.slice(1).toLowerCase()}`;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}.`

    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You win! ${playerSelection} beats ${computerSelection}.`

    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You win! ${playerSelection} beats ${computerSelection}.`

    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return `You lose! ${playerSelection} beats ${computerSelection}.`

    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lose! ${playerSelection} beats ${computerSelection}.`

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You lose! ${playerSelection} beats ${computerSelection}.`
    }

}

let player = playerTurn()
let comp = computerPlay()

let firstRound = playRound(player,comp);



/* rock wins scissors
scissors wins paper
paper wins rock

rock loses paper
paper loses scissor
scissor loses rock*/
