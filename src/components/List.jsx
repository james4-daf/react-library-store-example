import React from 'react';
import ListItem from './ListItem';

const List = ({ title }) => {
	const listStyle = {
		listStyleType: 'none',
		marginBottom: '10px',
	};

	return (
		<>
			<h3 className='list-title'>{title}</h3>
			<ul>
				<li style={listStyle}>
					<ListItem title='' author='Terry Pratchett' genre='Fantasy' />
				</li>
				<li style={listStyle}>
					<ListItem
						title='The color of magic'
						author='Terry Pratchett'
						genre='Fantasy'
					/>
				</li>
				<li style={listStyle}>
					<ListItem
						title='The Light Fantastic'
						author='Terry Pratchett'
						genre='Fantasy'
					/>
				</li>
				<li style={listStyle}>
					<ListItem title='Death de Jour' author='Kathy Reichs' genre='Crime' />
				</li>
				<li style={listStyle}>
					<ListItem title='The Holy Bible' author='Various' genre='Religion' />
				</li>
			</ul>
		</>
	);
};

export default List;
