/** A more modern way of adding events to elements is with the addEventListener() method. */
const item = document.querySelector("div.item");

function changeColor() {
    item.classList.toggle("pink");
}
// When using methods to add or remove events, we use the event names and not the property names.
// instead of onclick, we write click.
item.addEventListener("click", changeColor);

/**  we can also remove events with the removeEventListener
>>  removeEventListener("click", changecolor);
>>  remove elements comes in handy if we only want an event to happen once.
*/

const itemDefault = document.querySelector("div.default");
const el = document.querySelectorAll("button");

function changeWidth() {
    itemDefault.classList.toggle("width");
}

function changeHeight() {
    itemDefault.classList.toggle("height");
}

el[0].addEventListener("click", changeHeight);
el[0].addEventListener("click", changeWidth);
el[1].addEventListener("click", changeHeight);
el[2].addEventListener("click", changeWidth);
