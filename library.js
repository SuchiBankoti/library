let myLibrary = []
let i = 0
function addBookToLibrary() {
    const name = prompt("name of the book")
    const author = prompt("auhtor of the book")
    const publishYear = prompt("publish year of the book")
    const book = new bookDetail(name, author, publishYear)
    myLibrary.push(book)

}
class bookDetail {
    constructor(name, author, publishYear) {
        this.name = name
        this.author = author
        this.publishYear = publishYear
    }
}
function bookDisplay() {
    while (i < myLibrary.length) {
        addBookToDisplay.innerHTML += `<ul><li> NAME OF THE BOOK :${myLibrary[i].name}</li>
        <li> AUTHOR : ${myLibrary[i].author}</li>
        <li> PUBLISH YEAR : ${myLibrary[i].publishYear}</li></ul>`
        i++
    }

}

const btnAddBook = document.getElementById("addBook")
btnAddBook.addEventListener("click", addBookToLibrary)
const addBookToDisplay = document.getElementById("bookDisplay")
const viewBooks = document.getElementById("viewBook")
viewBooks.addEventListener("click", bookDisplay)