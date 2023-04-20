const { Library } = require("../src/Library")
const { Stack } = require("../src/Stack")

jest.mock('../src/Stack', () => {
    return jest.fn().mockImplementation(() => {
        return {
            returnBook: "Mort sur le Nil"
        }
    })
})

describe("Going to the Library", () => {
    let library

    beforeEach(()=> {
        library = new Library()
    })

    it("Librarian arranges the book", ()=> {
        library.returnBook("Mort sur le Nil")
        expect(library.books.push()).toHaveBeenCalled(1)
    })
})