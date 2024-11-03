let display = document.getElementById('display');

// let previous = document.getElementById('previous');

function clearDisplay(){
    display.innerText ='0';

}

function deleteLast(){
    if (display.innerText.length > 1){
        display.innerText = display.innerText.slice(0, -1);

    }else{
        display.innerText = '0';
    }

}

function appendNumber(number){
    if(display.innerText === '0'){
        display.innerText = number;
    }else{
        display.innerText += number;

    }
}

 function appendOperator(operator){
    display.innerText += operator;

 }


 function calculateResult(){
    try{
        display.innerText = eval(display.innerText);
    }catch{
        display.innerText = 'Error'
    }
 }