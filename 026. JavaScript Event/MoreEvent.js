const item = document.querySelector("div");

function changeColor() {
    item.classList.toggle("pink");
}
item.ondblclick = changeColor;

const textArea = document.querySelector('textarea');

function changeOnScroll() {
    textArea.style.backgroundColor = "red";
}
textArea.onscroll = changeOnScroll;

const input = document.querySelector('input');
const log = document.getElementById('date');

function updateValue() {
    log.innerText = input.value;
}
input.onchange = updateValue;

const textInput = document.querySelector('input.text');
const logText = document.getElementById('text');

function updateText() {
    logText.innerText = textInput.value.length + " Characters";
}
textInput.oninput = updateText;