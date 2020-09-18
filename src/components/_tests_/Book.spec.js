import React from 'react';
import {render} from '@testing-library/react'; //only want render from tht
//{} is for destructering
import Book from '../Book/Book';


//creates a mock and then tests it
describe('The test should render the book', () => {
    it('displays an title', () => {
        const {getByText} = render(<Book title='title1'/>); ///just putting author1 on the page
        const title = getByText('title1');
        expect(title).toBeInTheDocument();
    });
    it('displays an author', () => {
        const {getByText} = render(<Book author='author1'/>); ///just putting author1 on the page
        const author = getByText('author1');
        expect(author).toBeInTheDocument();
    });
    it('displays an genre', () => {
        const {getByText} = render(<Book genre='genre1'/>); ///just putting author1 on the page
        const genre = getByText('genre1');
        expect(genre).toBeInTheDocument();
    });
    it('displays an genre', () => {
        const {getByText} = render(<Book genre=''/>); ///just putting author1 on the page
        const genre = getByText('');
        expect(genre).toBeInTheDocument();
    });
});




