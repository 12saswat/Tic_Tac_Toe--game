let boxes=document.querySelectorAll(".box");
let resBtn=document.querySelector("#reBtn");
let winmsg=document.querySelector("#msg");
let newgameBtn=document.querySelector("#newgame");
let winCont=document.querySelector(".win_container");

//Winner Indexes 
let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

//Restart button
const rstgame=()=>{
    turnO=true;
    eneblebox();
    winCont.classList.add("hide")
};

//Dissable the boxes, When we find the winner
const dissablebox=()=>{
    for(let box of boxes){
       box.disabled=true;
    }
}

//Eneble the boxes, when we want to restart and a new game
const eneblebox=()=>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
}

//Input 'O' , 'X' in boxes
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){
    box.innerText="O" ;
    turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
})
})

//Show the winner message 
const showWinner=(winner)=>{
   msg.innerText=`congratulation winner is ${winner}`;
   winCont.classList.remove("hide");
   dissablebox();
}

//Logic for checking the game
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1 === pos2 && pos2  === pos3){
                console.log("winner",pos2)
                showWinner(pos1);
            }
        }
    }
}

//Add events in buttons
newgameBtn.addEventListener("click",rstgame);
resBtn.addEventListener("click",rstgame);
