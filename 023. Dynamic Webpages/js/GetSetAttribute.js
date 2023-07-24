function displayAttribute() {
    const img = document.querySelector("img");
    const imageLink = img.getAttribute("src");
    const p = document.querySelector("p.cat");
    p.innerText = imageLink;
    img.setAttribute("src", "https://mimo.app/r/kittles.png");
}

function displayAllAttribute() {
    const el = document.querySelector("a");
    const linkStyles = el.getAttribute("style");
    const p = document.querySelector('p.insta');
    p.innerText = linkStyles;
}
