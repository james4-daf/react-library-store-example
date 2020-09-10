import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../About';

jest.mock("../Wording");

describe('About', () => {
    it('external mock', () => {
        const { getByText } = render(<About />);
        const wording = getByText('External Mock');

        expect(wording).toBeInTheDocument();
    })
})