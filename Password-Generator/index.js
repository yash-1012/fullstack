const GenPassBtn = document.getElementById("GenPass-btn");
const GenPass = document.getElementById("GenPass");
const PassLength = document.getElementById("PassLength");
const rangeVal = document.getElementById("rangeValue")
rangeVal.innerText = PassLength.value;

const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numberBox = document.getElementById('number');
const symbolBox = document.getElementById('symbol');


PassLength.addEventListener("input", (e)=>{
    e.preventDefault();
    rangeVal.innerText = e.target.value;
});

GenPassBtn.addEventListener("click",(e)=>{
    // console.log(e.target);

    let CapitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let SmallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let NumberStr = '0123456789';
    let Symbol = '!@#$%&*';

    let finalStr ='';

    if(upperCase.checked){
        finalStr += CapitalLetter;
    }

    if(lowerCase.checked){
        finalStr += SmallLetter;
    }

    if(numberBox.checked){
        finalStr += NumberStr;
    }

    if(symbolBox.checked){
        finalStr += Symbol;
    }

    let latestPass = '';
    
    // console.log(finalStr);

    for (let i=0; i<PassLength.value; i++){
        let index = Math.floor(Math.random() * finalStr.length);
        latestPass += finalStr.charAt(index);
    }

    GenPass.innerText=latestPass;


});