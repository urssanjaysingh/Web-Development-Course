function showMessages() {
    let bodyElement = document.getElementById("parent");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Meg: movie later?";
    bodyElement.appendChild(paragraph);
}
