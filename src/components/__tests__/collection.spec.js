import React from 'react'
import { render } from '@testing-library/react'
import Collection from '../collection';

describe('Collection should render', () => {
    it('should render collection title', () => {
        const { getByText } = render(<Collection />);
        const title = getByText('Books');

        expect(title).toBeInTheDocument();
    })
})