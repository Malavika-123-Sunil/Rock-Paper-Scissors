let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScr=document.querySelector("#user-score");
const compScr=document.querySelector("#comp-score");
const getCompChoice= () => {
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=() =>{
    msg.innerText="Draw Match! Play Again!";
    msg.style.backgroundColor="rgb(247, 207, 51)";
    msg.style.fontWeight="600";
};
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        msg.innerText=`You Won! Yours:${userChoice} beats Computer:${compChoice} `;
        msg.style.backgroundColor="lightgreen";
        msg.style.fontWeight='700';
        userScore++;
        userScr.innerText=userScore;
    }
    else{
        msg.innerText=`You Lost! Computer: ${compChoice} beats Yours:${userChoice} `;
        msg.style.backgroundColor="red";
        msg.style.fontWeight="700";
        compScore++;
        compScr.innerText=compScore;
    }
};
const playGame=(userChoice) => {
    const compChoice=getCompChoice();
    if(userChoice == compChoice){
        //draw
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice == 'rock'){
            //scissors,paper
            userWin= compChoice=='paper'? false: true;
        }
        else if(userChoice == 'paper'){
            userWin= compChoice=='scissors'? false: true ;
        }
        else {
            userWin= compChoice=='rock'? false: true ;
        }
        showWinner(userWin,userChoice,compChoice);  
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
