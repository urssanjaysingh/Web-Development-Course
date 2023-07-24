function cancelMessage() {
    document.getElementById("message").innerHTML = "Whoff! Touch event was interrupted!";
}
document.getElementById("dog").addEventListener("touchcancel", cancelMessage);

function displayMessage() {
    document.getElementById("message").innerHTML = "Whoff!";
}

document.getElementById("dog").addEventListener("touchstart", displayMessage);
