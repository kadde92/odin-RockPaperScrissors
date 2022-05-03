OPTIONS = ['Rock', 'Paper', 'Scissors']

// all the constants
// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissors = document.querySelector('#scissors')
const gameButtons = document.querySelectorAll('.buttons button')
const results = document.querySelector('#results')
const finalScore = document.querySelector('.finalscore')
const playerScore = document.querySelector('#playerscore')
const compScore = document.querySelector('#compscore')
const resetBtn = document.querySelector('#new')


resetBtn.addEventListener('click', () => location.reload());
gameButtons.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return OPTIONS[random];
}


function getPlayerChoice(e) {
    playRound(e.target.textContent, computerPlay());
}




function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        results.textContent = (`You win! ${playerSelection} beats ${computerSelection}.`)
        playerPoints += 1
        playerScore.textContent = `Player: ${playerPoints}`


    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        results.textContent = (`You win! ${playerSelection} beats ${computerSelection}.`)
        playerPoints += 1
        playerScore.textContent = `Player: ${playerPoints}`


    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        results.textContent = (`You win! ${playerSelection} beats ${computerSelection}.`)
        playerPoints += 1
        playerScore.textContent =`Player: ${playerPoints}`


    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        results.textContent = (`You lose! ${playerSelection} beats ${computerSelection}.`)
        computerPoints += 1
        compScore.textContent = `Computer: ${computerPoints}`


    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        results.textContent = (`You lose! ${playerSelection} beats ${computerSelection}.`)
        computerPoints += 1
        compScore.textContent = `Computer: ${computerPoints}`


    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        results.textContent = (`You lose! ${playerSelection} beats ${computerSelection}.`)
        computerPoints += 1
        compScore.textContent = `Computer: ${computerPoints}`


    } else if (playerSelection = computerSelection) {
        results.textContent = "It's a draw. You need to choose again."
    }

    checkWinner();
}


function checkWinner() {
    if (computerPoints === 5 || playerPoints === 5) {
        if (playerPoints > computerPoints) {
            finalScore.textContent = 'User wins'
        } else if (computerPoints > playerPoints) {
            finalScore.textContent = "Computer wins"
        }
        gameButtons.forEach(button => { button.removeEventListener('click', getPlayerChoice) });

    }
}

    // if (userScore > compScore) {
    //     finalScore.textContent = "User wins"
    // } else if (compScore > userScore) {
    //     finalScore.textContent = "Computer wins"
    // } else {
    //     finalScore.textContent = "Something went wrong"
    // }




//loop that first calls for the user to set r,c,p --> adter that same for for computer
// i = 0, userScore = 0, compScore = 0,
// after the loop has 5 rounds, make a separate if-clause where to check the winner by comparing the premnetioned variables
// function game() {

//     let i = 0;
//     let userScore = 0;
//     let compScore = 0;
//     while (userScore < 5 || compScore < 5) {
//         if (results.value === 1) {
//             i++;
//             userScore++;
//             document.getElementsByClassName('playerscore').textContent = userScore;
//         } else if (results.value === 0) {
//             i++;
//             compScore++;
//             document.getElementsByClassName('compscore').textContent = compScore;
//         }
//     }

//     if (userScore > compScore) {
//         finalResult.textContent = "User wins"
//     } else if (compScore > userScore) {
//         finalResult.textContent = "Computer wins"
//     } else {
//         finalResult.textContent = "Something went wrong"
//     }

// }



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






// const buttons = document.querySelectorAll('button')


// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         playRound(button.textContent,computerPlay())
//     });
// });


// const NewGame = document.querySelector('#new')

// // eventlisteners for the playerschoise buttons, after the button is cliked we should receive its textcontent and add it to the playround() function

// rock.addEventListener('click', () =>{
//     playRound(rock.textContent,computerPlay())
// });


/* 1. listen to the buttons,
2. call the function playround()
3.*/



