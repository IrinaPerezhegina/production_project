import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button variant="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test render theme', () => {
        render(<Button variant="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
