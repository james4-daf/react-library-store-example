import data from "../data.json";
const bookData = [
    {
        id: 123,
        title: "Valid Title",
        author: "Jordan",
        genre: "testing"
    },
    {
        id: 124,
        title: "Different",
        author: "Test",
        genre: "Horror"
    }
]

const BookService = {
    getBooks: () => {
        return data.books;
    },
    getVideos: () => {
        return [
            {
                id: 523,
                title: "My Video",
                author: "Jordan",
                genre: "testing"
            },
        ]
    },
    getBooksFromApi: async () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                var mappedData = [];
                json.map((user, index) => (
                    mappedData.push(
                        {
                            "id": user.id,
                            "title": user.username,
                            "author": user.name,
                            "genre": user.website
                        }
                    )
                ))
                return mappedData;
            })
    }
}

export default BookService;