import React from 'react';

const ErrorField = ({ message }) => {
	return (
		<>
			<div className='list-item-error'>{message}</div>
		</>
	);
};

export default ErrorField;
