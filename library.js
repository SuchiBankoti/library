let myLibrary = []


class bookDetail {
    constructor(name, author, publishYear,) {
        this.id = new Date().getMilliseconds()
        this.name = name
        this.author = author
        this.publishYear = publishYear
        this.status = this.changeStatus
    }
    changeStatus = (value) => {
        if (value.target.innerHTML == "unread") {
            value.target.innerHTML = "read"
            value.target.style.color = "white"
            value.target.style.backgroundColor = "red"
        }
        else {
            value.target.innerHTML = "unread"
        }
    }
}

const addBookToDisplay = document.getElementById("bookDisplay")

function bookDisplay() {
    addBookToDisplay.innerHTML = " "

    for (let i = 0; i < myLibrary.length; i++) {
        addBookToDisplay.innerHTML += `<ul class="book">
       
        <li> TITLE :${myLibrary[i].name}</li>
        <li> AUTHOR : ${myLibrary[i].author}</li>
        <li> PUBLISH YEAR : ${myLibrary[i].publishYear}</li>
        <li>ID : ${myLibrary[i].id}</li>
        <button class="remove" onClick='remove(${myLibrary[i].id})'>remove</button>
        <button onClick='status(${myLibrary[i].status},event)'>unread</button>
        </ul>`
    }
}

function status(value1, value2) {
    value1(value2)
}


function addBookToLibrary() {
    // const id = prompt("ID")
    const name = prompt("name of the book")
    const author = prompt("auhtor of the book")
    const publishYear = prompt("publish year of the book")
    const book = new bookDetail(name, author, publishYear)
    myLibrary.push(book)
    bookDisplay()
}

bookDisplay()

function remove(value) {
    const index = myLibrary.findIndex((element) => element.id == value)
    myLibrary.splice(index, 1)
    bookDisplay()
}




