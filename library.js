let myLibrary = [
    {
        name: "rings of fire",
        author: "J.R Tolkein",
        publishYear: 1960
    }, {
        name: "wuthering heights",
        author: "emily bronte",
        publishYear: 1942
    }, {
        name: "peter pan",
        author: "megan markle",
        publishYear: 1698
    },
    {
        name: "super contra",
        author: "mark ruffalo",
        publishYear: 1234

    },
    {
        name: "da vinci code",
        author: "margin homer",
        publishYear: 5678
    }
]
let i = 0


class bookDetail {
    constructor(name, author, publishYear) {
        this.name = name
        this.author = author
        this.publishYear = publishYear
    }
}

function bookDisplay() {
    while (i < myLibrary.length) {
        addBookToDisplay.innerHTML += `<ul id="book"><li> NAME OF THE BOOK :${myLibrary[i].name}</li>
        <li> AUTHOR : ${myLibrary[i].author}</li>
        <li> PUBLISH YEAR : ${myLibrary[i].publishYear}</li></ul>`
        i++
    }

}
function addBookToLibrary() {
    const name = prompt("name of the book")
    const author = prompt("auhtor of the book")
    const publishYear = prompt("publish year of the book")
    const book = new bookDetail(name, author, publishYear)
    myLibrary.push(book)
    bookDisplay()

}

const addBookToDisplay = document.getElementById("bookDisplay")
const btnAddBook = document.getElementById("addBook")
btnAddBook.addEventListener("click", addBookToLibrary)

bookDisplay()

