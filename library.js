let myLibrary = []

class bookDetail {
    constructor(name, author, publishYear) {
        this.id = new Date().valueOf()
        this.name = name
        this.author = author
        this.publishYear = publishYear
        this.read = false;
    }
    toggleStatus = () => {
        this.read = !this.read;
    }
}
const addBookToDisplay = document.getElementById("bookDisplay")

function bookDisplay() {

    addBookToDisplay.innerHTML = " "
    addBookToDisplay.innerHTML = myLibrary.map((value) => {
        return `<ul class="book">
        <li> TITLE :${value.name}</li>
        <li> AUTHOR : ${value.author}</li>
        <li> PUBLISH YEAR : ${value.publishYear}</li>
        <button onClick='remove(${value.id})'>remove</button>
        <button onClick='toggle(${value.id})'>${(value.read) ? 'read' : 'unread'}</button>
        </ul>`
    }).join("")
}

function addBookToLibrary() {
    const name = prompt("name of the book")
    const author = prompt("auhtor of the book")
    const publishYear = prompt("publish year of the book")
    const book = new bookDetail(name, author, publishYear)
    myLibrary.push(book)
    bookDisplay()
}


function remove(value) {
    const index = myLibrary.findIndex((element) => element.id == value)
    myLibrary.splice(index, 1)
    bookDisplay()
}

function toggle(id) {
  const index= myLibrary.findIndex(element => element.id === id)
 myLibrary[index].toggleStatus()
    bookDisplay()
}
    

bookDisplay()




