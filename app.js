OPTIONS = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return OPTIONS[random];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        document.getElementById('results').textContent = (`You win! ${playerSelection} beats ${computerSelection}.`)
        return 1;

    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        document.getElementById('results').textContent = (`You win! ${playerSelection} beats ${computerSelection}.`)
        return 1;

    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        document.getElementById('results').textContent = (`You win! ${playerSelection} beats ${computerSelection}.`)
        return 1;

    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        document.getElementById('results').textContent = (`You lose! ${playerSelection} beats ${computerSelection}.`)
        return 0;

    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        document.getElementById('results').textContent = (`You lose! ${playerSelection} beats ${computerSelection}.`)
        return 0;

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        document.getElementById('results').textContent = (`You lose! ${playerSelection} beats ${computerSelection}.`)
        return 0;

    } else if (playerSelection = computerSelection) {
        document.getElementById('results').textContent = ("It's a draw. You need to choose again.")
    }

}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')


rock.addEventListener('click', () => {
    playRound(rock.textContent, computerPlay())
});

paper.addEventListener('click', () => {
    playRound(paper.textContent, computerPlay())
});

scissors.addEventListener('click', () => {
    playRound(scissors.textContent, computerPlay())
});

//loop that first calls for the user to set r,c,p --> adter that same for for computer
// i = 0, userScore = 0, compScore = 0,
// after the loop has 5 rounds, make a separate if-clause where to check the winner by comparing the premnetioned variables
function game() {
    let i = 0;
    let userScore = 0;
    let compScore = 0;
    while (userScore < 5 || compScore < 5) {
        if (document.getElementById('results').textContent.includes('win') === true) {
            i++;
            userScore++;
            document.getElementsByClassName('playerscore').textContent = userScore;
        } else if (document.getElementById('results').textContent.includes('lose') === true) {
            i++;
            compScore++;
            document.getElementsByClassName('compscore').textContent = compScore;
        }
    }

    if (userScore > compScore) {
        document.getElementsByClassName('finalscore').textContent = "User wins"
    } else if (compScore > userScore) {
        document.getElementsByClassName('finalscore').textContent = "Computer wins"
    } else {
        document.getElementsByClassName('finalscore').textContent = "Something went wrong"
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



