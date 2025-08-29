let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorepara=document.querySelector("#user_score");
let compScorepara=document.querySelector("#comp_score");



const drawGame=()=>{
    console.log("game was draw");
    msg.innerText = `Game was Draw, Play again!`;
    msg.style.backgroundColor="orange";

}



const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        console.log("you win!");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose!");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}


const genCompChoice=()=>{
    // rock,paper,scissor
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame = (userChoice)=>{
      console.log("user choice =", userChoice);  // print choice made by the user in the console
      // now generate computer choice  (in new module(function))
      const compChoice=genCompChoice();
      console.log("comp choice = ", compChoice);

    

      if(userChoice===compChoice){
        drawGame();
      }
      else{

        let userWin=true;
        if(userChoice==="rock"){
            // paper,scissor
            userWin=compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            // rock,scissor
            userWin=compChoice==="scissor"? false : true;
        }
        else{
            // rock,paper
            userWin=compChoice==="rock"? false : true;
        }
        
        showWinner(userWin,userChoice,compChoice);
      }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id"); //  choice select by the user to play the game
        // console.log("choice was clicked",userChoice);   // only to print the userchoice in console

        playGame(userChoice)
    })
})












//NOTE: in geneCompchoice function

// To generate the computer's choice in a Rock-Paper-Scissors game, we need to randomly select one of the three options: 
// "rock", "paper", or "scissors". In JavaScript, we can't generate random strings directly, but we can store these options 
// in an array. Then, we can use the Math.random() function, which generates a random number between 0 (inclusive) and 1 (exclusive).
// To get a number between 0 and 2, we multiply the result of Math.random() by 3 and use Math.floor() to round it down to the nearest 
// whole number. This gives us a random index (0, 1, or 2), which we can use to select an item from the array — effectively generating
//  a random computer choice.




// all console.log() statements in the code are only to print the value in the console no other use of it in the code.