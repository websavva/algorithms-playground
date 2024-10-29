import { describe, it, expect } from 'vitest';

import { sortNumbers } from './sort-numbers';

describe('sortNumbers', () => {
  const cases = [
    {
      name: 'empty list',
      unsortedNumbers: [],
      sortedNumber: [],
    },
    {
      name: 'all positive numbers',
      unsortedNumbers: [4, 2, 9, 1, 7, 3, 6],
      sortedNumbers: [1, 2, 3, 4, 6, 7, 9],
    },
    {
      name: 'all negative numbers',
      unsortedNumbers: [-5, -3, -8, -1, -7],
      sortedNumbers: [-8, -7, -5, -3, -1],
    },
    {
      name: 'mixed positive and negative numbers',
      unsortedNumbers: [12, -3, 5, -1, 8, -10],
      sortedNumbers: [-10, -3, -1, 5, 8, 12],
    },
    {
      name: 'all zeros',
      unsortedNumbers: [0, 0, 0, 0],
      sortedNumbers: [0, 0, 0, 0],
    },
    {
      name: 'single number',
      unsortedNumbers: [7],
      sortedNumbers: [7],
    },
    {
      name: 'already sorted in ascending order',
      unsortedNumbers: [-3, 1, 2, 4, 6, 9],
      sortedNumbers: [-3, 1, 2, 4, 6, 9],
    },
    {
      name: 'sorted in descending order',
      unsortedNumbers: [10, 5, 3, 2, 0, -1],
      sortedNumbers: [-1, 0, 2, 3, 5, 10],
    },
    {
      name: 'duplicate numbers',
      unsortedNumbers: [4, 2, 5, 2, 4, 3],
      sortedNumbers: [2, 2, 3, 4, 4, 5],
    },
    {
      name: 'large numbers',
      unsortedNumbers: [1000, 500, -200, 150, 0, 10000],
      sortedNumbers: [-200, 0, 150, 500, 1000, 10000],
    },
    {
      name: 'including small decimals',
      unsortedNumbers: [0.5, -0.2, 1.3, -1.7, 2.1],
      sortedNumbers: [-1.7, -0.2, 0.5, 1.3, 2.1],
    },
  ];

  it.each(cases)('$name', ({ unsortedNumbers, sortedNumbers }) => {
    expect(sortNumbers(unsortedNumbers)).toEqual(sortedNumbers);
  });
});
