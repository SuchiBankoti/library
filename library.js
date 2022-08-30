let myLibrary = []


class bookDetail {
    constructor(name, author, publishYear,) {
        this.id = new Date().valueOf()
        this.name = name
        this.author = author
        this.publishYear = publishYear
        // this.status = this.changeStatus
        this.read = false;
        this.status = "unread"
    }
    toggleStatus = () => {
        this.read = !this.read;
    }
}
const toggle = new bookDetail().toggleStatus
const addBookToDisplay = document.getElementById("bookDisplay")

function bookDisplay() {
    addBookToDisplay.innerHTML = " "
    console.log("bookdispolay")

    addBookToDisplay.innerHTML +=
        myLibrary.map((value) => {
            return `<ul class="book">
        <li> TITLE :${value.name}</li>
        <li> AUTHOR : ${value.author}</li>
        <li> PUBLISH YEAR : ${value.publishYear}</li>
        <li>ID : ${value.id}</li>
        <button>${value.status}</button>
        <button onClick='remove(${value.id})'>remove</button>
        <button onClick='read(${value.id})'></button>
        </ul>`
        }).join("")

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

function read(value) {
    const index = myLibrary.findIndex((element) => element.id == value)
    if (myLibrary[index].read == false) {
        toggle()
        myLibrary[index].status = "read"
        bookDisplay()
    }
    // else {
    //     toggle()
    //     myLibrary[index].status = "unread"
    //     bookDisplay()
    // }
    //   ee.target.style.backgroundColor="red"
}



