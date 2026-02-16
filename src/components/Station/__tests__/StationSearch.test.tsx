import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, expect, it, vi} from 'vitest';
import {StationSearch} from '../StationSearch';

describe('StationSearch Component', () => {

    it('renders the search input correctly with correct placeholder', () => {
        render(<StationSearch value="" onChange={() => {
        }}/>);

        const input = screen.getByPlaceholderText(/search city or station/i);

        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('');
    });

    it('calls onChange handler when user types', async () => {
        const handleChange = vi.fn();
        const user = userEvent.setup();

        render(<StationSearch value="" onChange={handleChange}/>);

        const input = screen.getByPlaceholderText(/search city or station/i);

        await user.type(input, 'a');

        expect(handleChange).toHaveBeenCalledWith('a');
    });

    it('displays the correct value provided by props', () => {
        render(<StationSearch value="Hamburg" onChange={() => {
        }}/>);

        const input = screen.getByDisplayValue('Hamburg');
        expect(input).toBeInTheDocument();
    });

    it('clears input when the clear button is clicked', async () => {
        const handleChange = vi.fn();
        const user = userEvent.setup();

        render(<StationSearch value="Berlin" onChange={handleChange}/>);

        const clearButton = screen.getByRole('button');

        await user.click(clearButton);
        expect(handleChange).toHaveBeenCalledWith('');
    });
});
