let buttons= document.querySelectorAll(".button");
let userScoreboard= document.getElementById("user");
let compScoreboard= document.getElementById("computer");
let drawScoreBoard=document.getElementById("drawMessage");
let message=document.getElementById("message");
let reset= document.getElementById("resetButton");


let userScore=0
let compScore=0
let drawCount=0
let userWin= true;


const genCompChoice= ()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame =(compChoice,userChoice)=>{
    drawCount=drawCount+1;
    //console.log("Game is draw", drawCount);
    drawScoreBoard.innerText=`Draw: ${drawCount}`;
    message.innerText=`Draw!! ${compChoice} cancel ${userChoice}`
    message.style.backgroundColor= "blue";
    message.style.color = "white";
}


const playGame= (userChoice)=>{
   const compChoice=genCompChoice();
   //console.log("computer choice",compChoice );
   //console.log("User choice",userChoice);
    if(userChoice===compChoice){
        drawGame(compChoice,userChoice);
        userWin= null;
    }
    else{
        if(userChoice==="rock"  ){
            userWin= compChoice==="paper" ? false:true ;
        }
        else if( userChoice=== "paper"){
            userWin=compChoice==="scissor" ?false:true;
        }
        else {
            userWin= compChoice=== "rock" ?false: true;
        }
    }
    score(userWin,userChoice, compChoice);
}

const score= (userWin,userChoice, compChoice)=>{
    console.log("user",userChoice)
    console.log("comp",compChoice)
    if (userWin===true) {
        userScore=userScore+1;
        userScoreboard.innerText= `Player: ${userScore}`;
        message.innerText= `You won. ${userChoice} beats ${compChoice} :)`
        message.style.backgroundColor= "green";
        message.style.color = "white";
    }
    if(userWin===false){
        compScore=compScore+1;
        compScoreboard.innerText= `Computer: ${compScore}`;
        message.innerText= `You lose. ${compChoice} beats ${userChoice} !!`
        message.style.backgroundColor= "red";
        message.style.color = "white";
    }
}

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const userChoice= button.getAttribute("id");
        playGame(userChoice);
    })
})

const resetButton =()=>{
    userScore = 0;
    compScore = 0;
    drawCount = 0;

    userScoreboard.innerText = `Player: ${userScore}`;
    compScoreboard.innerText = `Computer: ${compScore}`;
    drawScoreBoard.innerText = `Draw: ${drawCount}`;

    message.innerText = "Game Reset! Play again :)";
    message.style.backgroundColor = "aquamarine";
    message.style.color = "black";
}

reset.addEventListener("click",resetButton);