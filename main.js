//Create a function 'playGame' that calls your single round play through 5 times
    //Move previously made variables and functions inside this function, so we avoid global variables,etc

function playGame(){
    //function for one play through
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
    //function for setting computer weapon
    function getComputerChoice(){
        return ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)]
    }
    //function for setting user weapon
    function getHumanChoice(){
        return prompt("What weapon would you like to use? ").toLowerCase()
    }
    //score variables to be used to deem winner of multiple rounds
    let humanScore = 0;
    let computerScore = 0
    //loop to run single round 5 times, which calls both choice functions and checks for winner/loser/tie
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