const buttonNumbers = document.querySelectorAll('[data-value]');
const buttonOperators = document.querySelectorAll('[data-operation]');
const theme = document.getElementsByClassName('themes')[0].querySelectorAll('li');
const del = document.getElementById('delete');
const reset = document.getElementById('reset');
const equal = document.getElementById('equal');
const inputField = document.getElementById('input-field');
const tempValueDisplay = document.getElementById('temp-value')
const themeSelection = document.querySelectorAll('.selection');
const themeSelector = document.getElementById('active-selector');
var nextOp = '';
var previousOp = '';
var tempValue = 0; 


reset.addEventListener('click', (e)=> {
    inputField.value = null;
    tempValueDisplay.innerHTML = '';
    previousOp = 0;
    tempValue = 0;
});

del.addEventListener('click', (e)=> {
    let value = [...inputField.value]
    for(let i = 0; i < value.length; i++){
        if (i == (value.length-1)){
            let removedValue = value.splice(i, 1);
            let newValue = value.join('');
            inputField.value = newValue;
        }
    }
});

buttonNumbers.forEach((button)=> {
    button.addEventListener('click', (e) => {
        let value = button.getAttribute('data-value');
        inputField.value += value;
    });
});

buttonOperators.forEach((operator)=> {
    operator.addEventListener('click', (e)=> {
    let operation = operator.getAttribute('data-operation');
        switch (operation) {
            case '+':
                nextOp = '+';
                break;
            case '-':
                nextOp = '-';
                break;
            case '*':
                nextOp = '*';
                break;
            case '/':
                nextOp = '/';
                break;
        }
        if(inputField.value != ''){
            if (previousOp == ''){
                tempValue = parseInt(inputField.value);
                tempValueDisplay.innerText = parseInt(inputField.value);
            }
            else if (previousOp == '+'){
                tempValue += parseInt(inputField.value);
                tempValueDisplay.innerText = tempValue;
            }
            else if (previousOp == '-'){
                tempValue -= parseInt(inputField.value);
                tempValueDisplay.innerText  = tempValue + '-';
            }
            else if (previousOp == '*'){
                tempValue *= parseInt(inputField.value);
                tempValueDisplay.innerText  = tempValue + ' *';
            }
            else if (previousOp == '/'){
                tempValue /= parseInt(inputField.value);
                tempValueDisplay.innerText  = tempValue + ' /';
            }
        }    
        previousOp = nextOp;
        inputField.value = '';
    });
});

equal.addEventListener('click', (e)=>{
    if (tempValueDisplay.innerText != ''){
        if (previousOp == '+'){
            tempValue += parseInt(inputField.value);
        }
        else if (previousOp == '-'){
            tempValue -= parseInt(inputField.value);
        }
        else if (previousOp == '*'){
            tempValue *= parseInt(inputField.value);
        }
        else if (previousOp == '/'){
            tempValue /= parseInt(inputField.value);
        }
        else {
            tempValue = '';
        }
        tempValueDisplay.innerText = '';
        inputField.value = tempValue;
        previousOp = '';
    }
});


themeSelection.forEach ((section, index) => {
    theme[index].addEventListener('click', (e)=> {
        themeSelector.style.left = `${index*32}%`
    });
    section.addEventListener('click', (e) => {
        themeSelector.style.left = `${index*32}%`
    });
});


