import React from 'react';

const ListItem = (props) => {
	return (
		<>
			<div className='list-item-title'>{props.title}</div>
			<div className='list-item-author'>{props.author}</div>
			<div className='list-item-genre'>{props.genre}</div>
		</>
	);
};

export default ListItem;
