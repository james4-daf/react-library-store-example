import React from 'react'
import ListItem from '../ListItem'
import { render } from '@testing-library/react'

describe('List Item', () => {
    it('should render list item component with author', () =>{
        const { getByText } = render(<ListItem title="Dummy" author="Dummy Author" />);

        const author = getByText('Dummy Author');

        expect(author).toBeInTheDocument();
    })
    it('should render list item component with genre', () =>{
        const { getByText } = render(<ListItem title="Dummy" author="Dummy Author" genre="Horror" />);

        const genre = getByText('Horror');

        expect(genre).toBeInTheDocument();
    })

    it('should render genre as unkown genre if not supplied', () =>{
        const { getByText } = render(<ListItem title="Dummy" />);

        const genre = getByText('Unknown Genre');

        expect(genre).toBeInTheDocument();
    })

    it('should render genre as not found if genre is not supplied', () =>{
        const { getByText } = render(<ListItem title="dummy" genre="" />);

        const genre = getByText('Not Found');

        expect(genre).toBeInTheDocument();
    })

    it("should show error message message when title is not valid", () => {
        const { getByText } = render(<ListItem genre="Dummy Values" author="Dummy Author" />);

        const errorMessage = getByText("Title has not been specified");

        expect(errorMessage).toBeInTheDocument();
    })
})

