const buttonNumbers = document.querySelectorAll('[data-value]');
const buttonOperators = document.querySelectorAll('[data-operation]');
const operationSign = document.getElementById('operation-sign');
const del = document.getElementById('delete');
const reset = document.getElementById('reset');
const equal = document.getElementById('equal');
const inputField = document.getElementById('input-field');
const tempValueDisplay = document.getElementById('temp-value')
const themeSelection = document.querySelectorAll('.selection');
const themeSelector = document.getElementById('active-selector');
const theme = document.getElementsByClassName('themes')[0].querySelectorAll('li');
const root = document.documentElement.style;
var nextOp = '';
var previousOp = '';
var tempValue = 0;
var rgx = /^[0-9]*\.?[0-9]*$/;
var hasDot = false;


reset.addEventListener('click', (e)=> {
    inputField.value = null;
    tempValueDisplay.innerHTML = '';
    previousOp = 0;
    tempValue = 0;
    operationSign.innerText = '';
    hasDot = false;
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
        if (value == '.' && !hasDot){
            hasDot = true;
        }else if (value == '.' && hasDot){
            return;
        }
        inputField.value += value;
    });
});

buttonOperators.forEach((operator)=> {
    operator.addEventListener('click', (e)=> {
    let operation = operator.getAttribute('data-operation');
    hasDot = false;
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
        if(tempValueDisplay.innerText != ''){
            operationSign.innerText = nextOp;
        }
        if(inputField.value != '' && inputField.value.match(rgx)){
            if (previousOp == ''){
                tempValue = Number(inputField.value);
                tempValueDisplay.innerText = Number(inputField.value);
                operationSign.innerText = nextOp;
            }
            else if (previousOp == '+'){
                tempValue += Number(inputField.value);
                tempValueDisplay.innerText = tempValue;
            }
            else if (previousOp == '-'){
                tempValue -= Number(inputField.value);
                tempValueDisplay.innerText  = tempValue;
            }
            else if (previousOp == '*'){
                tempValue *= Number(inputField.value);
                tempValueDisplay.innerText  = tempValue;
            }
            else if (previousOp == '/'){
                tempValue /= Number(inputField.value);
                tempValueDisplay.innerText  = tempValue;
            }
        }    
        previousOp = nextOp;
        inputField.value = '';
    });
});

equal.addEventListener('click', (e)=>{
    if (tempValueDisplay.innerText != ''){
        if (previousOp == '+'){
            tempValue += Number(inputField.value);
        }
        else if (previousOp == '-'){
            tempValue -= Number(inputField.value);
        }
        else if (previousOp == '*'){
            tempValue *= Number(inputField.value);
        }
        else if (previousOp == '/'){
            tempValue /= Number(inputField.value);
        }
        else {
            tempValue = '';
        }
        tempValueDisplay.innerText = '';
        inputField.value = tempValue;
        previousOp = '';
        operationSign.innerText = '';
        hasDot = false;
    }
});


themeSelection.forEach ((section, index) => {                             
    theme[index].addEventListener('click', (e)=> {
        themeSelector.style.left = `${index*32}%`
        themeChange(index)
    });
    section.addEventListener('click', (e) => {
        themeSelector.style.left = `${index*32}%`
        themeChange(index)
    });
});

const themeChange = (theme) => {
    if (theme == 2) {
        root.setProperty('--body-bg', '#17062A');
        root.setProperty('--input-bg', '#1E0936');
        root.setProperty('--input-font', '#FFE53D');
        root.setProperty('--button-bg', '#331C4D');
        root.setProperty('--button-hover', '#6C34AC');
        root.setProperty('--keypad-font', '#FFE53D');
        root.setProperty('--keypad-bg', '#1E0936');
        root.setProperty('--btn-shadow', '#881C9E');
        root.setProperty('--reset-btn-shadow', '#BE15F4');
        root.setProperty('--del-and-reset-bg', '#56077C');
        root.setProperty('--del-and-reset-hover', '#8631AF');
        root.setProperty('--del-reset-font', '#FFFFFF');
        root.setProperty('--equal-btn-font', '#1A2327');
        root.setProperty('--equal-btn-shadow', '#6CF9F1');
        root.setProperty('--equal-bg', '#00DED0');
        root.setProperty('--equal-hover', '#93FFF8');
    }else if (theme == 1) {
        root.setProperty('--body-bg', '#F2F2F2');
        root.setProperty('--input-bg', '#EEEEEE');
        root.setProperty('--input-font', '#36362C');
        root.setProperty('--button-bg', '#E5E4E1');
        root.setProperty('--button-hover', '#FFFFFF');
        root.setProperty('--keypad-font', '#36362C');
        root.setProperty('--keypad-bg', '#D2CDCD');
        root.setProperty('--btn-shadow', '#A79E91');
        root.setProperty('--reset-btn-shadow', '#1B6066');
        root.setProperty('--del-and-reset-bg', '#378187');
        root.setProperty('--del-and-reset-hover', '#62B5BC');
        root.setProperty('--del-reset-font', '#FFFFFF');
        root.setProperty('--equal-btn-font', '#FFFFFF');
        root.setProperty('--equal-btn-shadow', '#873901');
        root.setProperty('--equal-bg', '#C85402');
        root.setProperty('--equal-hover', '#FF8A38');
    } else {
        root.setProperty('--body-bg', '#3A4663');
        root.setProperty('--input-bg', '#181F33');
        root.setProperty('--input-font', '#FFFFFF');
        root.setProperty('--button-bg', '#EAE3DC');
        root.setProperty('--button-hover', '#FFFFFE');
        root.setProperty('--keypad-font', '#434A59');
        root.setProperty('--keypad-bg', '#242D44');
        root.setProperty('--btn-shadow', '#B3A497');
        root.setProperty('--reset-btn-shadow', '#414E73');
        root.setProperty('--del-and-reset-bg', '#647198');
        root.setProperty('--del-and-reset-hover', '#A2B2E1');
        root.setProperty('--del-reset-font', '#FFFFFF');
        root.setProperty('--equal-btn-font', '#FFFFFF');
        root.setProperty('--equal-btn-shadow', '#93261A');
        root.setProperty('--equal-bg', '#D03F2F');
        root.setProperty('--equal-hover', '#F96B5B');
    }
    document.documentElement.classList.add('color-theme-in-transition')
    window.setTimeout(function() {
        document.documentElement.classList.remove('color-theme-in-transition')
        }, 1000);
}

