const buttons = document.querySelectorAll('[data-value]');
const theme = document.getElementsByClassName('themes')[0].querySelectorAll('li');
const del = document.getElementById('delete');
const reset = document.getElementById('reset');
const equal = document.getElementById('equal');
const inputField = document.getElementById('input-field');
const themeSelection = document.querySelectorAll('.selection');
const themeSelector = document.getElementById('active-selector');

reset.addEventListener('click', (e)=> {
    inputField.value = null;
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

buttons.forEach((button)=> {
    button.addEventListener('click', (e) => {
        let value = button.getAttribute('data-value');
        inputField.value += value;
    });
});

equal.addEventListener('click', ()=>{
    let value = inputField.value;
    calculate(value)
})

const calculate = (value) => {
    let operation = value.split('');
    for (let i=0; i<operation.length; i++) {
        switch (operation[i]) {
            case '+':
                let test = operation.splice(i, 1);
                console.log(test)
            break;
            case '-':
            break;
            case '*':
            break;
            case '/':
            break;
            default : 'nista'
        } 
    }
}





themeSelection.forEach ((section, index) => {
    theme[index].addEventListener('click', (e)=> {
        themeSelector.style.left = `${index*32}%`
    });
    section.addEventListener('click', (e) => {
        themeSelector.style.left = `${index*32}%`
    });
});


