import React from 'react';
import './ListItemField.css';

const ListItemField = ({ labelText, name, text, ...rest }) => {
	let { className, ...inputProps } = rest;
	className = className ?? '';
	className += ' list-item-field';

	//The input props are any other properties we may want to pass down such as vidibility
	return (
		<div className={className} {...inputProps}>
			<label htmlFor={name} className='list-item-label'>
				{labelText}
			</label>
			<div name={name}>{text}</div>
		</div>
	);
};

export default ListItemField;
