import React from 'react'
import { render } from '@testing-library/react'
import List from '../List';

describe('Collection should render', () => {
    it('should render collection title', () => {
        const { getByText } = render(<List title='Books' />);
        const title = getByText('Books');

        expect(title).toBeInTheDocument();
    })
})