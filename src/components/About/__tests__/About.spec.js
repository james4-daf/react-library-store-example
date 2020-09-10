import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../About';

describe('About', () => {
    it('should render dummy text', () => {
        const { getByText } = render(<About />);
        const wording = getByText('Just some dummy text', { selector: 'p.about-description' });

        expect(wording).toBeInTheDocument();
    })
})