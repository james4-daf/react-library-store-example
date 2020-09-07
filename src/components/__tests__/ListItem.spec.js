import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from '../ListItem';

describe('List item component', () => {
    it('should render list item component', () => {
        render(<ListItem title='My first book' author='The Author' genre='test genre' />);

        testFieldLabel('title', 'Title:', 'My first book');
        testFieldLabel('author', 'Author:', 'The Author');
        testFieldLabel('genre', 'Genre:', 'test genre');
    });

    it('should render blank values when inputs are not specified', () => {
        render(<ListItem title='Test' />);

        testFieldLabel('title', 'Title:', 'Test');
        testFieldLabel('author', 'Author:', '');
        testFieldLabel('genre', 'Genre:', '');
    });

    it('should render blank values when inputs are null', () => {
        render(<ListItem title='Test' author={null} genre={null} />);

        testFieldLabel('title', 'Title:', 'Test');
        testFieldLabel('author', 'Author:', '');
        testFieldLabel('genre', 'Genre:', '');
    });

    it('should show error message when title is not specified', () => {
        const { getByText } = render(<ListItem />);

        const title = getByText('Title has not been specified', { selector: 'div.list-item-error' });

        expect(title).toBeInTheDocument();
    })
})

const testFieldLabel = (name, title, text) => {
    const fieldLabel = screen.getByText(title, {
        selector: `div.list-item-field > label[for='${name}']`
    });

    const fieldValue = screen.getByText(text, {
        selector: `div.list-item-field > span[name='${name}']`
    });

    expect(fieldLabel).toBeInTheDocument();
    expect(fieldValue).toBeInTheDocument();
};