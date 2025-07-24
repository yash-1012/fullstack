const tictac = document.querySelector(".tictac");

let currentPlayer = 'X';

tictac.addEventListener("click", (e)=>{
    // console.log(e.target);
    if(e.target.className != 'tictac'){
        if(e.target.innerText ==''){
            e.target.textContent = currentPlayer;
            
            if(currentPlayer == 'X'){
                
                currentPlayer = 'O';
            
            }else{
            
                currentPlayer = 'X';
            
            }
        }
    }


});