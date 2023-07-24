/** To add a new class without overriding the previous one, 
 * first, we have to add the classList property. 
 * Then, We can use it to access the add() method.*/

function addBold() {
    const el = document.querySelector("p");
    el.classList.add("bold");
}

function removeBold() {
    const el = document.querySelector("p");
    el.classList.remove("bold");
}

function toggleBold() {
    const el = document.querySelector("p");
    el.classList.toggle("bold");
}

function addClasses() {
    const el = document.querySelector("p");
    el.classList.add("highlight", "underline");
}

function removeClasses() {
    const el = document.querySelector("p");
    el.classList.remove("italic", "bold", "highlight", "underline");
}