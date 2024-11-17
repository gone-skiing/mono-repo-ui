import { test} from 'vitest';
import { render, screen} from '@testing-library/react'
import Button from './Button';

test('Button should be rendered', () => {
    render(<Button>Hello</Button>);

    screen.getByText(/Hello/);
});
