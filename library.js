let myLibrary = []

function addBookToLibrary() {
    const name = prompt("name of the book")
    const author = prompt("auhtor of the book")
    const publishYear = prompt("publish year of the book")
    const book = new bookDetail(name, author, publishYear)
    myLibrary.push(book)
    console.log(myLibrary)
}
class bookDetail {
    constructor(name, author, publishYear) {
        this.name = name
        this.author = author
        this.publishYear = publishYear
    }
}

const btnAddBook = document.getElementById("addBook")
btnAddBook.addEventListener("click", addBookToLibrary)