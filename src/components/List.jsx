import React from 'react';
import ListItem from './ListItem';

const List = ({ title }) => {
	return (
		<main>
			<div>
				<h3 className='list-title'>{title}</h3>
				<ul>
					<li>
						<ListItem title='' author='Terry Pratchett' genre='Fantasy' />
					</li>
					<li>
						<ListItem
							title='The color of magic'
							author='Terry Pratchett'
							genre='Fantasy'
						/>
					</li>
					<li>
						<ListItem
							title='The Light Fantastic'
							author='Terry Pratchett'
							genre='Fantasy'
						/>
					</li>
					<li>
						<ListItem
							title='Death de Jour'
							author='Kathy Reichs'
							genre='Crime'
						/>
					</li>
					<li>
						<ListItem
							title='The Holy Bible'
							author='Various'
							genre='Religion'
						/>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default List;
