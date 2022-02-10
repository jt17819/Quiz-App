import { screen } from '@testing-library/react';
import React, { component } from 'react';
import renderWithReduxProvider from 'redux';

import Home from "."

describe('Home', () => {
    test('it renders a div', () => {
        renderWithReduxProvider(<Home />)
        const div = screen.getByRole('homepageContainer')
        expect(div).toBeInTheDocument();
        
    })

})