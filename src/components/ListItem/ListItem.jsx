import React from 'react';
import { isNullUndefinedOrEmpty } from "../../utilities/StringUtils";

const ListItem = ({title, author, genre}) => {
    if(typeof(genre) === "undefined"){
        genre = "Unknown Genre";
    } else if(genre === "") {
        genre = "Not Found";
    }

    var isValid = isNullUndefinedOrEmpty(title);

    return isValid ? (
        <li>
           
                <div>{title}</div>
                <div>{author}</div>
                <div>{genre}</div>
       
        </li>
    ) : (
        <p>Title has not been specified</p>
    )
}

export default ListItem;