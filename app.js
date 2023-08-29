let gameSeq =[];
let userSeq = [];
let started = false;
let level = 0;
let h2= document.querySelector("h2")
let btns = ["yellow" , "red" , "purple" , "green"];

document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameFlash (btn) {
    btn.classList.add("flash"); //jab bhi styling add krni hoti h toh stylesheet m add krte h ek classs aur woh uss element ki classlist m add kr dete h java script m 
    setTimeout(function () {
        btn.classList.remove("flash");
    },400);
}

function userFlash (btn) {
    btn.classList.add("userflash");  
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx) {
    console.log(level);
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn") ;

for(btn of allBtns) {
    btn.addEventListener("click" , btnPress);
}

function reset() {
    started = false;
    gameSeq =[];
    userSeq = [];
    level =0;
}
