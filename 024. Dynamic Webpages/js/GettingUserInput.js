// to access user input from an input element, we need to add .value at the end of
// document.getElementById()

function register() {
    const paragraph = document.querySelector("p");
    const username = document.getElementById("usernameInput").value;
    paragraph.innerHTML = username + ", you're signed up!";
}