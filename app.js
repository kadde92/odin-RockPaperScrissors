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
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        return 1;

    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        return 1;

    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
        return 1;

    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log(`You lose! ${playerSelection} beats ${computerSelection}.`)
        return 0;

    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log( `You lose! ${playerSelection} beats ${computerSelection}.`)
        return 0;

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log(`You lose! ${playerSelection} beats ${computerSelection}.`)
        return 0;

    } else if (playerSelection = computerSelection) {
        console.log("It's a draw. You need to choose again.")
    }

}

//loop that first calls for the user to set r,c,p --> adter that same for for computer
// i = 0, userScore = 0, compScore = 0,
// after the loop has 5 rounds, make a separate if-clause where to check the winner by comparing the premnetioned variables
function game() {
    let i = 0;
    let userScore = 0;
    let compScore = 0;
    while (i < 5) {
        let player = playerTurn()
        let comp = computerPlay()
        let firstRound = playRound(player,comp);
        
        if (firstRound === 1) {
            i++;
            userScore++;
        } else if (firstRound === 0) {
            i++;
            compScore++;
        } 
    }

    if (userScore > compScore) {
        console.log("User wins")
    } else if (compScore > userScore) {
        console.log("Computer wins")
    } else {
        console.log("Something went wrong")
    }
    
}



// let player = playerTurn()
// let comp = computerPlay()

// let firstRound = playRound(player,comp);



/* rock wins scissors
scissors wins paper
paper wins rock

rock loses paper
paper loses scissor
scissor loses rock*/

// adding queryselectors to the buttons (own button for every button)
// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissors = document.querySelector('#scissors')

const buttons = document.querySelectorAll('button')


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
        playRound(button.textContent,computerPlay())
    });
});

// const NewGame = document.querySelector('#new')

// // eventlisteners for the playerschoise buttons, after the button is cliked we should receive its textcontent and add it to the playround() function

// rock.addEventListener('click', () =>{
//     playRound(rock.textContent,computerPlay())
// });



