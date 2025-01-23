let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let nextbtn = document.querySelector(".nxt-game");
let msgWin = document.querySelector(".msg-win");
let turnO =true;
const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count = 0;

const draw = ()=>{
    document.querySelector(".msg").innerText = `It's a draw!`;
    msgWin.classList.remove("hide");
    disabledbtn();
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO === true ){
            box.innerText = "O";
            box.style.color = "#3a5a40";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#353535";
            turnO = true;   
        }
        box.disabled = true;
        count++;
        console.log(count);
        checkWinner();
        if(count === 9){
            draw();
        }
    });
});

const disabledbtn = ()=>{
    for (const box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
    document.querySelector(".msg").innerText = `Congratulations, Winner is ${winner}`;
    msgWin.classList.remove("hide");
    disabledbtn();
}

const checkWinner = ()=>{
    for (const pattern of winPattern) {
        
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1 === p2 && p2 === p3){
                showWinner(p1);
            }
        }
    }
}
const reset = ()=>{
    turnO = true;
    count = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgWin.classList.add("hide");
}
resetbtn.addEventListener("click",reset);
nextbtn.addEventListener("click",reset);