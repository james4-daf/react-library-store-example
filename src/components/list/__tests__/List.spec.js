import React from 'react'
import List from '../List'
import { render } from '@testing-library/react'

describe('List Collection', () => {
    it('should render title as heading', () => {
        //  Arrange

        //  Act
        const { getByText } = render(<List title="Mock Title" />);
        const title = getByText('Mock Title', { selector: 'h3.list-title'});

        //  Assert
        expect(title).toBeInTheDocument();
    })

    it('should render blank title as heading when empty', () => {
        //  Arrange

        //  Act
        const { getByText } = render(<List title="" />);
        const title = getByText('', { selector: 'h3.list-title'});

        //  Assert
        expect(title).toBeInTheDocument();
    })

    it('should render blank title as heading when undefined', () => {
        //  Arrange

        //  Act
        const { getByText } = render(<List />);
        const title = getByText('', { selector: 'h3.list-title'});

        //  Assert
        expect(title).toBeInTheDocument();
    })

    it('should render blank title as heading when null', () => {
        //  Arrange

        //  Act
        const { getByText } = render(<List title={null} />);
        const title = getByText('', { selector: 'h3.list-title'});

        //  Assert
        expect(title).toBeInTheDocument();
    })
})