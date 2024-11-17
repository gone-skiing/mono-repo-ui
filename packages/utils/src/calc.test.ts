import { test, expect } from 'vitest';
import { addRandomTo } from './calc';

test('addRandomT0(10) should return something greater than 10', () => {
    expect(addRandomTo(10)).toBeGreaterThan(9);
});
