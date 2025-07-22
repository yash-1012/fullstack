const GenPassBtn = document.getElementById("GenPass-btn");
const GenPass = document.getElementById("GenPass");
const PassLength = document.getElementById("PassLength");
const rangeVal = document.getElementById("rangeValue")
rangeVal.innerText = PassLength.value;

const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numberBox = document.getElementById('number');
const symbolBox = document.getElementById('symbol');

 const copyBtn = document.getElementById("copy-btn");


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

    // if(!upperCase.checked && !lowerCase.checked && !numberBox.checked && !symbolBox.checked){
    //     alert("Please select atleast one checkbox");
    // }

    if(finalStr==''){
        alert("Please select atleast one checkbox");
    }

    let latestPass = '';
    
    // console.log(finalStr);

    for (let i=0; i<PassLength.value; i++){
        let index = Math.floor(Math.random() * finalStr.length);
        latestPass += finalStr.charAt(index);
    }

    GenPass.innerText=latestPass;


});

copyBtn.addEventListener("click",()=>{
    // console.log("password copied");

    window.navigator.clipboard.writeText(GenPass.innerText);
})