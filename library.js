let myLibrary = [
    {
        id: 'kljsdkljflksjf',
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


class bookDetail {
    constructor(name, author, publishYear) {
        this.name = name
        this.author = author
        this.publishYear = publishYear
    }
}

const addBookToDisplay = document.getElementById("bookDisplay")
const btnAddBook = document.getElementById("addBook")

function bookDisplay() {
    addBookToDisplay.innerHTML = " "
    let i = 0
    for (i = 0; i < myLibrary.length; i++) {
        addBookToDisplay.innerHTML += `<ul class="book">
        <li> NAME OF THE BOOK :${myLibrary[i].name}</li>
        <li> AUTHOR : ${myLibrary[i].author}</li>
        <li> PUBLISH YEAR : ${myLibrary[i].publishYear}</li>
        <button class="remove" onClick=()=>remove(${myLibrary[i].id})>remove</button>
        </ul>`
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

btnAddBook.addEventListener("click", addBookToLibrary)

bookDisplay()

const btnRemove = document.getElementsByClassName("remove")
for (let b = 0; b < myLibrary.length; b++) {

    function remove(id) {

        let removedBook = myLibrary.filter((value, index) => index === b)
        console.log(removedBook)
        const index = myLibrary.indexOf(removedBook[0])
        myLibrary.splice(index, 1)
        console.log(myLibrary)
        bookDisplay()


    }

    btnRemove[b].addEventListener("click", remove)
}




