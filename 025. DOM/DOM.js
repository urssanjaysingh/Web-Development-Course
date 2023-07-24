/** The Document Object Model(DOM) is a JavaScript interface for webpages. It represents the 
 * document as nodes and objects.
 * The DOM allows us to access HTML elements based on their relations in the HTML document's tree.
 */

// DOM allows us to access the root HTML node with JS keyword document.
let htmlRoot = document;

// we can access the child nodes of the html node with dot(.) followed by the child of the node.
let theBody = document.body;

// we can also get all the children of a parent node. with the .children property.
function numChild() {
    let listChildren = document.querySelector("ol").children;
    let paragraph = document.querySelector("p");
    paragraph.innerHTML = listChildren.length;
}

// we can also access the nearest sibling of an element node with .nextElementSibling
function deleteList() {
    let heading = document.querySelector("h1");
    let siblingElement = heading.nextElementSibling;
    siblingElement.innerHTML = "List deleted";
}

// if we only want to access the first child node of a parent,
// we can do so with .firstElementChild
let heading = document.body.firstElementChild;
heading.innerHTML = "Week 13";