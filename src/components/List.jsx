import React from 'react';
import ListItem from './ListItem';

const List = ({ title, data }) => {
	const listStyle = {
		listStyleType: 'none',
		marginBottom: '10px',
	};

	return (
		<>
			<h3 className='list-title'>{title}</h3>
			<ul>
				{data && data.map((item, index) => (
					<li key={item.id} style={listStyle}>
						<ListItem title={item.title} author={item.author} genre={item.genre} />
					</li>
				))}
			</ul>
		</>
	);
};

export default List;
