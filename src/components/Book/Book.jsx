import React from 'react';


const Book = ({title, author, genre}) => {
    return(

    <div>
            <p>{title}</p>
            <p>{author}</p>
            <p>{genre}</p>
              
    </div>

    )
}


export default Book;