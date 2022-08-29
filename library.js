let myLibrary = [
    {
        id: 001,
        name: "rings of fire",
        author: "J.R Tolkein",
        publishYear: 1960
    }, {
        id: 002,
        name: "wuthering heights",
        author: "emily bronte",
        publishYear: 1942
    }, {
        id: 003,
        name: "peter pan",
        author: "megan markle",
        publishYear: 1698
    }, {
        id: 004,
        name: "super contra",
        author: "mark ruffalo",
        publishYear: 1234

    }, {
        id: 005,
        name: "da vinci code",
        author: "margin homer",
        publishYear: 5678
    }
]


class bookDetail {
    constructor(name, author, publishYear, id) {
        this.id = id
        this.name = name
        this.author = author
        this.publishYear = publishYear
        this.status = this.changeStatus
    }
    changeStatus() {
        console.log("read")
    }
}

const addBookToDisplay = document.getElementById("bookDisplay")
const btnAddBook = document.getElementById("addBook")

function bookDisplay() {
    addBookToDisplay.innerHTML = " "

    for (let i = 0; i < myLibrary.length; i++) {
        addBookToDisplay.innerHTML += `<ul class="book">
       
        <li> TITLE :${myLibrary[i].name}</li>
        <li> AUTHOR : ${myLibrary[i].author}</li>
        <li> PUBLISH YEAR : ${myLibrary[i].publishYear}</li>
        <li>ID : ${myLibrary[i].id}</li>
        <button class="remove" onClick='remove(${myLibrary[i].id})'>remove</button>
        <button class="status" onClick='check(event)'></button>
        
        </ul>`
    }

}
function check(value) {
    const status = document.getElementsByClassName("status")
    value.target.style.backgroundColor = "red"
}



function addBookToLibrary() {
    const id = prompt("ID")
    const name = prompt("name of the book")
    const author = prompt("auhtor of the book")
    const publishYear = prompt("publish year of the book")
    const book = new bookDetail(id, name, author, publishYear)
    myLibrary.push(book)
    bookDisplay()

}

btnAddBook.addEventListener("click", addBookToLibrary)

bookDisplay()


function remove(value) {
    const index = myLibrary.findIndex((element) => element.id == value)
    myLibrary.splice(index, 1)
    bookDisplay()
}




