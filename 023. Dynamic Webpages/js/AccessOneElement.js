const element = document.getElementById("messages");
console.log(element.innerHTML);
element.innerHTML = "No Messages";

/* if we want to retrieve an individual HTML element, we can use the querySelector() method
    querySelector() only retrieves the first element it finds. So, if we have two elements with the
    same tag or class, we only access the first one. 
    If several elements share a class we can specify its tag. like p.prompt
    To access an element with two classes, we include them together.
*/
function publish() {
    const el = document.querySelector("p");
    el.innerHTML = "Website published!";
    const el1 = document.querySelector("#prompt");
    el1.innerHTML = "Done!";
    const el2 = document.querySelector("p.prompt");
    el2.innerHTML = "Congrats!";
    const el3 = document.querySelector(".prompt.update");
    el3.innerHTML = "Thank you for waiting!";
}

function refresh() {
    const element = document.querySelector(".order.info");
    element.innerHTML = "Your order has been shipped. Happy self-assembly!";
}