import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem, { isNullUndefinedOrEmpty } from '../ListItem';

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

    it('should render list item component field lists', () => {
        const { getByText } = render(<ListItem title='My first book' author='The Author' genre='test genre' />);

        const title = getByText('Title:', { selector: 'div.list-item-title-label' });
        const author = getByText('Author:', { selector: 'div.list-item-author-label' });
        const genre = getByText('Genre:', { selector: 'div.list-item-genre-label' });

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
    });

    it('should render blank values when inputs are not specified', () => {
        render(<ListItem title='Test' />);

        const title = screen.getByText('Test', { selector: 'div.list-item-title' });
        const author = screen.getByText('', { selector: 'div.list-item-author' });
        const genre = screen.getByText('', { selector: 'div.list-item-genre' });

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
    });

    it('should render blank values when inputs are empty', () => {
        render(<ListItem title='Test' author='' genre='' />);

        const title = screen.getByText('Test', { selector: 'div.list-item-title' });
        const author = screen.getByText('', { selector: 'div.list-item-author' });
        const genre = screen.getByText('', { selector: 'div.list-item-genre' });

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
    });

    it('should render blank values when inputs are null', () => {
        render(<ListItem title='Test' author={null} genre={null} />);

        const title = screen.getByText('Test', { selector: 'div.list-item-title' });
        const author = screen.getByText('', { selector: 'div.list-item-author' });
        const genre = screen.getByText('', { selector: 'div.list-item-genre' });

        expect(title).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
    });

    it('should show error message when title is not specified', () => {
        const { getByText } = render(<ListItem />);

        const title = getByText('Title not specified', { selector: 'div.list-item-error' })

        expect(title).toBeInTheDocument();
    })
})

describe('Is null or empty checks', () => {
    it('should return false when string is specified', () => {
        const result = isNullUndefinedOrEmpty('Test text');

        expect(result).toBe(false);
    });

    it('should return true when string is empty', () => {
        const result = isNullUndefinedOrEmpty('');

        expect(result).toBe(true);
    });

    it('should return true when string is null', () => {
        const result = isNullUndefinedOrEmpty(null);

        expect(result).toBe(true);
    });

    it('should return true when string is undefined', () => {
        const result = isNullUndefinedOrEmpty();

        expect(result).toBe(true);
    })
})