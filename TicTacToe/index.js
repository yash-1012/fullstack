const tictac = document.querySelector(".tictac");
const boxes = document.querySelectorAll(".box");
const winnerdeclare = document.getElementById("winnerdeclare");
const rbtn = document.getElementById('rbtn');

let currentPlayer = 'X';
let count = 0;

let winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function startGame(e){
    // console.log(e.target);
    if(e.target.className != 'tictac'){
        if(e.target.innerText ==''){
            e.target.textContent = currentPlayer;
            count++;
            winner();

            if(currentPlayer == 'X'){
                
                currentPlayer = 'O';
            
            }else{
            
                currentPlayer = 'X';
            
            }
        }
    }
    if(count == 9){
        winnerdeclare.innerText = "Match is Draw";
    }
}

tictac.addEventListener("click", startGame);

function winner(){
    winningCondition.forEach((item)=>{
        let index0 = item[0];
        let index1 = item[1];
        let index2 = item[2];

        let val0 = boxes[index0].innerText;
        let val1 = boxes[index1].innerText;
        let val2 = boxes[index2].innerText;
    
        if(val0 != '' && val1 != '' && val2 != ''){
            if(val0 == val1 && val0 == val2){
                count=0;
                boxes[index0].classList.add('winnerClass');
                boxes[index1].classList.add('winnerClass');
                boxes[index2].classList.add('winnerClass');
                winnerdeclare.innerText = "Winner is " + val0;
                tictac.removeEventListener('click', startGame);
            }
        }
    });
}

rbtn.addEventListener('dblclick', ()=>{
    currentPlayer = 'X';
    winnerdeclare.innerText = '';
    boxes.forEach(item => {
        item.innerText = '';
        item.classList.remove('winnerClass');
    });
})