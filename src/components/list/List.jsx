import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({ title, data }) => {
    
    return (
        <div>
            <h3 className="list-title">{title}</h3>
            <ul>
                {
                    data && data.map((book, index) => (
                        <ListItem key={book.id} title={book.title} author={book.author} genre={book.genre} />
                    ))
                }

            </ul>
        </div>
    )
}

export default List;