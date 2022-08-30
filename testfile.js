const library = (() => {

    let collection = [];
    function insert(book) {
        collection.push(book);
    }
    function remove(bookId) {
        const index = this.collection.findIndex(book => book.id === bookId)
        this.collection.splice(index, 1);
    }
    return { insert, remove }
})();
library.insert(new)

class book {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    editAuthor(name) {
        this.name = name;
    }
}

const lib1 = new library();
lib1.collection = null;
lib1.insert(new book(1, 'jungle book'))
lib1.insert(new book(2, 'jungle book'))
console.log([...lib1.collection]);
lib1.remove(1)
// console.log(lib1)