import React from 'react';
import ListItemField from './ListItemField';
import ErrorField from './ErrorField';
import { isNullUndefinedOrEmpty } from '../utilities/StringUtils';

const ListItem = (props) => {
	const isValid = !isNullUndefinedOrEmpty(props.title);

	return isValid ? (
		<>
			<ListItemField name='title' labelText='Title:' text={props.title} />
			<ListItemField name='author' labelText='Author:' text={props.author} />
			<ListItemField name='genre' labelText='Genre:' text={props.genre} />
		</>
	) : (
		<>
			<ErrorField message='Title has not been specified' />
		</>
	);
};

export default ListItem;
