import React from 'react';
import {render} from '@testing-library/react'; //only want render from tht
//{} is for destructering
import List from "../List/List";


describe('The list should render a title', () => {
    it('displays a title', () => {
        const {getByText} = render(<List title='Books'/>);
        const title = getByText('Books');
        expect(title).toBeInTheDocument();
    });
});