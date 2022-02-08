import { default as Leaderboard } from '.';
import { render, screen } from '@testing-library/react';

describe('Welcome', () => {

    test('it renders the title', () => {
        render(<Leaderboard />)
        const heading = screen.getByText('Leaderboard')
        expect(heading.textContent).toContain('Leaderboard');
    });

});