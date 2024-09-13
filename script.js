function appendCharacter(char) {
    const display = document.getElementById('display');
    display.value += char;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}