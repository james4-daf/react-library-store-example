import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from '../ListItem';

describe('List item component', () => {
    it('should render list item component', () => {
        const { getByText } = render(<ListItem title='My first book' author='The Author' genre='test genre' />);

        const title = getByText('My first book', { selector: 'div.list-item-title' });
        const author = getByText('The Author', { selector: 'div.list-item-author' });
        const genre = getByText('test genre', { selector: 'div.list-item-genre' });

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
    });

    it('should render blank values when inputs are not specified', () => {
        render(<ListItem />);

        const title = screen.getByText('', { selector: 'div.list-item-title' });
        const author = screen.getByText('', { selector: 'div.list-item-author' });
        const genre = screen.getByText('', { selector: 'div.list-item-genre' });

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
    });

    it('should render blank values when inputs are empty', () => {
        render(<ListItem ListItem title='' author='' genre='' />);

        const title = screen.getByText('', { selector: 'div.list-item-title' });
        const author = screen.getByText('', { selector: 'div.list-item-author' });
        const genre = screen.getByText('', { selector: 'div.list-item-genre' });

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
    });

    it('should render blank values when inputs are null', () => {
        render(<ListItem ListItem title={null} author={null} genre={null} />);

        const title = screen.getByText('', { selector: 'div.list-item-title' });
        const author = screen.getByText('', { selector: 'div.list-item-author' });
        const genre = screen.getByText('', { selector: 'div.list-item-genre' });

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
    });
})