import fileData from "../db.json";

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
    getAllBooksFromFile: () => {
        return fileData.lists[0].items;
    }
}

export default BookService;