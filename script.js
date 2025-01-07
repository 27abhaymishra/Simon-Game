let gameseq = [];
let userseq = [];

let btns = ["yellow" , "red" , "purple" , "green"]; 

let started  = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
        
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },300);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = (Math.floor(Math.random() * 4));
   
    
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp ,1000); 
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b> ${level}  </b> <br> Press any Key to start.`;
        document.querySelector('body').style.backgroundColor = "red";
     setTimeout(function(){
        document.querySelector('body').style.backgroundColor = " rgb(104, 101, 66)";
     },700)
        reset();
    }
}

function btnPress(){
  
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    
    checkAns(userseq.length - 1)
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);

}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}