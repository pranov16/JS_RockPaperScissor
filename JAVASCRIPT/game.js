let userScore=0;
let computerScore=0;

const choices= document.querySelectorAll(".choice");
const msgText=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#computer-score");

const playGame=(userChoice)=>{
    const compChoice=genComChoice();

    if(userChoice===compChoice){
        console.log("game is draw");
        msg.innerText="Game draw !!"
        msg.style.backgroundColor="blue";
    }
    else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin= compChoice==="paper" ? false:true;
        }
        else if (userChoice==="paper"){
            userWin=compChoice==="scissor" ? false:true;
        }
        else{userChoice==="scissor"
            userWin=compChoice==="rock" ? false:true
        }
        showWinner(userWin);
    };
}

const showWinner=(userWin)=>{
    if(userWin){
        msg.innerText="You Win !!";
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        msg.innerText="You Lose !!"
        msg.style.backgroundColor="red";
        computerScore++;
        comScorePara.innerText=computerScore;
    }
}

    // if(userChoice==="rock"){
    //     if(compChoice==="paper"){
    //         console.log("Computer wins !")
    //     }
    //     else if(compChoice==="scissor"){
    //         console.log("User wins !")
    //     }
    // }
    // else if(userChoice==="paper"){
    //     if(compChoice==="rock"){
    //         console.log("User wins !")
    //     }
    //     else if(compChoice==="scissor"){
    //         console.log("Computer wins !")
    //     }
    // }
    // else if(userChoice==="scissor"){
    //     if(compChoice==="paper"){
    //         console.log("User wins !")
    //     }
    //     else if(compChoice==="rock"){
    //         console.log("Computer wins !")
    //     }
    // }

const genComChoice=()=>{
    const options=["rock", "paper", "scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

choices.forEach((chc)=>{
    chc.addEventListener("click", ()=>{
        const userChoice=chc.getAttribute("id")
        playGame(userChoice);
    });
});