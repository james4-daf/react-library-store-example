import React from 'react';
import { isNullUndefinedOrEmpty } from "../../utilities/StringUtils";
import "./ListItem.css"
import css from "./ListItem.module.css";

const ListItem = ({title, author, genre}) => {

    const titleStyle = {color: "red", marginBottom:"20px"};

    if(typeof(genre) === "undefined"){
        genre = "Unknown Genre";
    } else if(genre === "") {
        genre = "Not Found";
    }

    var isValid = isNullUndefinedOrEmpty(title);

    return isValid ? (
        <li>
           
                <div style={titleStyle}>{title}</div>
                <div className="list-item-author">{author}</div>
                <div className={css.greenText}>{genre}</div>
       
        </li>
    ) : (
        <p>Title has not been specified</p>
    )
}

export default ListItem;