import React from 'react';

const ErrorField = ({ message }) => {
	return (
		<>
			<div className='list-item-error' style={{ color: 'red' }}>
				{message}
			</div>
		</>
	);
};

export default ErrorField;
