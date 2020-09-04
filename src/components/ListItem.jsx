import React from 'react';

export const isNullUndefinedOrEmpty = (title) => {
	if (title === null) {
		return true;
	}

	if (title === undefined) {
		return true;
	}

	if (title.length === 0) {
		return true;
	}

	return false;
};

const ListItem = (props) => {
	const isValid = !isNullUndefinedOrEmpty(props.title);

	return isValid ? (
		<>
			<div>
				<div className='list-item-title-label'>Title: </div>
				<div className='list-item-title'>{props.title}</div>
			</div>
			<div>
				<div className='list-item-author-label'>Author: </div>
				<div className='list-item-author'>{props.author}</div>
			</div>
			<div>
				<div className='list-item-genre-label'>Genre: </div>
				<div className='list-item-genre'>{props.genre}</div>
			</div>
		</>
	) : (
		<>
			<div className='list-item-error'>Title not specified</div>
		</>
	);
};

export default ListItem;
