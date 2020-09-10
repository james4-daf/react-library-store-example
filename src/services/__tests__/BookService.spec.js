import BookService from "../BookService";

describe('Book Service', () => {
    it('get all books should return at least one', () => {
        const data = BookService.getAllBooks();
        expect(data.length).toBeGreaterThan(0);
    })
})