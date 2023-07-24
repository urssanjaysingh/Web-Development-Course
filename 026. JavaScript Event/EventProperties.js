/** A more maintainable way of adding events is with event properties. */
const prompt = document.querySelector("#prompt");
const el = document.querySelector("button");

// The function called after an event is triggered is referred to as an event handler.
function publish() {
    prompt.innerText = "Website Published";
}
// once we select the element and indicate the event property, we can call a function
//  by adding = and the function name without parentheses.
el.onclick = publish;
