/* Once we've accessed an element with JS, we can get its attributes by adding a dot(.) followed by
attribute name. */
function showAttribute() {
    const el = document.querySelector("img");
    const paragraph = document.querySelector("p.src");
    paragraph.innerText = el.src;
    
    const ele = document.querySelector("a");
    const para = document.querySelector("p.href");
    para.innerHTML = ele.href;
}

function changeQuestionType() {
    const el = document.querySelector("input");
    el.type = "checkbox";
}

function addStyleSheet() {
    const el = document.querySelector("link");
    el.href = "css/SettingAttributes.css";
}