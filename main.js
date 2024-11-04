//Create a function that returns one of 3 choices, and save its return as a variable to symbolized the computers choice
function getComputerChoice(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)]
}
let computerWeapon = getComputerChoice()

//Create a function asks the user what weapon they'd like to use in the game, and save the return to a variable
function getHumanChoice(){
    return prompt("What weapon would you like to use? ").toLowerCase()
}
let userWeapon = getHumanChoice()

//Define variables that will hold the score of the humanPlayer and the computerPlayer, give them a starting value of zero
let humanScore = 0;
let computerScore = 0
//Create a one round play through, using a function to decide who wins and incrementing the correct score variable
function playRockPaperScissors(computerWeapon, humanWeapon){
    if(
        (computerWeapon==='rock'&&humanWeapon==='scissors')
        || (computerWeapon==='scissors'&&humanWeapon==='paper')
        || (computerWeapon==='paper'&&humanWeapon==='rock')
    ){
        computerScore++
        console.log('Computer wins')
    }else if(computerWeapon===humanWeapon){
        console.log("Tie, play again!")
    }else{
        humanScore++
        console.log("Human wins!")
    }
}
playRockPaperScissors(computerWeapon, humanWeapon)