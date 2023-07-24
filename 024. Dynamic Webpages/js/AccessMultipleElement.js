// we can get a collection of elements of the same tag type with getElementsByTagName()

function displayItem() {
    const el = document.getElementsByTagName("li");
    const div = document.querySelector("div");
    div.innerHTML = el.length;
}

function displayUrgentTasks() {
    const el = document.getElementsByClassName("urgent");
    const p = document.querySelector("p");
    p.innerHTML = "You have " + el.length + " urgent tasks:";
    const f = document.querySelector(".first");
    f.innerHTML = el[0].innerHTML;
    const s = document.querySelector(".second");
    s.innerHTML = el[1].innerHTML;
}

function displayImportantTasks() {
    const el = document.getElementsByClassName("urgent important");
    const i = document.querySelector("p.important");
    i.innerHTML = el.length;
}

function displayTheItems() {
    const el = document.querySelectorAll("h3");
    const p = document.querySelector("p.third");
    p.innerHTML = el[2].innerHTML;
}

function displayNews() {
    const el = document.querySelectorAll("h4.news");
    const p = document.querySelector("p.news");
    p.innerHTML = el.length;
}

function displayNewsAndMovie() {
    const el = document.querySelectorAll(".mov, .tec");
    const p = document.querySelector("p.newsMovie");
    p.innerHTML = el.length;
}