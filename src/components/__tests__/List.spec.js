import React from 'react'
import { render, screen } from '@testing-library/react'
import List from '../List';

describe('Collection should render', () => {
    it('should render collection title', () => {
        const { getByText } = render(<List title='Books' />);
        const title = getByText('Books', { selector: 'h3.list-title' });

        expect(title).toBeInTheDocument();
    })

    it('should render blank title when empty', () => {
        render(<List title='' />);
        const title = screen.getByText('', { selector: 'h3.list-title' });

        expect(title).toBeInTheDocument();
    })

    it('should render blank title when undefined', () => {
        render(<List />);
        const title = screen.getByText('', { selector: 'h3.list-title' });

        expect(title).toBeInTheDocument();
    })

    it('should render blank title when null', () => {
        render(<List title={null} />);
        const title = screen.getByText('', { selector: 'h3.list-title' });

        expect(title).toBeInTheDocument();
    })
})