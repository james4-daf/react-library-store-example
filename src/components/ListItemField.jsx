import React from 'react';

const ListItemField = ({ labelText, name, text, ...rest }) => {
	let { className, ...inputProps } = rest;
	className = className ?? '';
	className += ' list-item-field';

	//The input props are any other properties we may want to pass down such as vidibility
	return (
		<div className={className} {...inputProps}>
			<label htmlFor={name}>{labelText}</label>
			<span name={name}>{text}</span>
		</div>
	);
};

export default ListItemField;
