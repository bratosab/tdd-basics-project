const { Stack } = require("./Stack")

class Library {
    constructor() {
        this.books = new Stack()
    }

    returnBook(book) {
        // Intelligence
        this.books.push(book)
    }

    arrangeBook() {
        return this.books.pop()
    }
}

module.exports = { Library }