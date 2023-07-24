console.clear();
/*  
 *  To create a new class, we start with class keyword, a name, and braces.
 *  We have to make sure the name starts with an uppercase letter.
 *  To create new objects, classes need a special method called the constructor().
*/
class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}
const book1 = new Book("Leo Tolstoy", "War and Peace");
const book2 = new Book("Dr. Seuss", "Oh, the Places You'll Go!");
console.log(book1);
console.log(book2);
