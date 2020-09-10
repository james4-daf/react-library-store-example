const bookData = [
    {
        "id": "c5d5cabf-5a23-45f2-9782-30f26a949d03",
        "title": "The Colour of Magic",
        "author": "Terry Pratchett",
        "genre": "Fantasy",
        "available": true
    },
    {
        "id": "2d86259e-8b3a-4b71-89b4-fa359c644930",
        "title": "The Light Fantastic",
        "author": "Terry Pratchett",
        "genre": "Fantasy",
        "available": false
    },
    {
        "id": "8e1b9955-403e-4947-8d38-53729ed88874",
        "title": "",
        "author": "Kathy Reichs",
        "genre": "Crime",
        "available": true
    },
];

const BookService = {
    getAllBooks: () => {
        return bookData;
    },
    getAllBooksFromApi: async () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                var mappedBooks = [];
                json.map((book, index) => (
                    mappedBooks.push({
                        "id": book.id,
                        "title": book.username,
                        "author": book.name,
                        "genre": book.website
                    })
                ))
                return mappedBooks;
            })
    }
}

export default BookService;