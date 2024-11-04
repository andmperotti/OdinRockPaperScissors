// //Create a function that returns one of 3 choices, and save its return as a variable to symbolized the computers choice
// function getComputerChoice(){
//     return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)]
// }
// let computerWeapon = getComputerChoice()

// //Create a function asks the user what weapon they'd like to use in the game, and save the return to a variable
// function getHumanChoice(){
//     return prompt("What weapon would you like to use? ").toLowerCase()
// }
// let humanWeapon = getHumanChoice()

// //Define variables that will hold the score of the humanPlayer and the computerPlayer, give them a starting value of zero
// let humanScore = 0;
// let computerScore = 0

// //Create a one round play through, using a function, to decide who wins and incrementing the correct score variable
// function playRound(computerChoice, humanChoice){
//     if(
//         (computerChoice==='rock'&&humanChoice==='scissors')
//         || (computerChoice==='scissors'&&humanChoice==='paper')
//         || (computerChoice==='paper'&&humanChoice==='rock')
//     ){
//         computerScore++
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
//     }else if(computerChoice===humanChoice){
//         console.log("Tie, play again!")
//     }else{
//         humanScore++
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`)
//     }
// }
//invoke one play through by invoking play function
// playRound(computerWeapon, humanWeapon)


//Create a function 'playGame' that calls your single round play through 5 times
    //Move previously made variables and functions inside this function, so we avoid global variables,etc

function playGame(){
    function playRound(computerChoice, humanChoice){
        if(
            (computerChoice==='rock'&&humanChoice==='scissors')
            || (computerChoice==='scissors'&&humanChoice==='paper')
            || (computerChoice==='paper'&&humanChoice==='rock')
        ){
            computerScore++
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }else if(computerChoice===humanChoice){
            console.log("Tie, play again!")
        }else{
            humanScore++
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
    }
    function getComputerChoice(){
        return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)]
    }
    function getHumanChoice(){
        return prompt("What weapon would you like to use? ").toLowerCase()
    }
    let humanScore = 0;
    let computerScore = 0

    for(let i = 0; i<5; i++){
        let computerWeapon = getComputerChoice()
        let humanWeapon = getHumanChoice()
        playRound(computerWeapon,humanWeapon)
    }
    if(humanScore>computerScore){
        console.log(`You've beaten the computer across 5 rounds!`)
    }else if(computerScore>humanScore){
        console.log(`You've lost to the computer across 5 rounds, all hail AI!`)
    }else{
        console.log(`You tied through 5 rounds, well at least you didn't lose.`)
    }
}
//play 5 rounds by invoking the playGame function
playGame()