import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({title}) => {
    return (
        <div>
            <h3 className="list-title">{title}</h3>
            <ul>
                <ListItem title="Has Valid Title" author="Jordan" genre="testing" />
                <ListItem author="Unknown" />
                <ListItem title="" author="Dummy Author" />
            </ul>
        </div>
    )
}

export default List;