const displayBar = document.querySelector('.expression');
displayBar.value= '';

document.querySelectorAll('td').forEach(td => {
    td.addEventListener('click', () => {
        const buttonText = td.innerText;

        if(!isNaN(buttonText) || buttonText === '.') {
            displayBar.value += buttonText;
        } else if (buttonText === 'AC') {
            displayBar.value = '';
        }
        else if (buttonText === 'DEL') {
            displayBar.value = displayBar.value.slice(0, -1);
        } else if (buttonText === '=') {
            displayBar.value = eval(displayBar.value);
        } else {
            displayBar.value += ` ${buttonText} `;
        }
        displayBar.innerText = displayBar.value;
    })
});