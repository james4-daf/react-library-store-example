import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../About';

jest.mock('../Wording', () => () => (<div>Hello World</div>));

describe('About', () => {
    it('inline mock', () => {
        const { getByText } = render(<About />);
        const wording = getByText('Hello World');

        expect(wording).toBeInTheDocument();
    })
})