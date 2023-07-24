function showColor() {
    const el = document.querySelector("p");
    const container = document.querySelector("div");
    container.innerText = el.style.color;
}

function changeColor() {
    const el = document.querySelector("p.color");
    el.style.color = "#d7465f";
}

function backgroundColor() {
    const el = document.querySelector("p.back");
    el.style.backgroundColor = "#d7465f";
}