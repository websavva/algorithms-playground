import { describe, it, expect } from 'vitest';

import { flat } from './flat';

describe('flat', () => {
  const cases = [
    {
      name: 'standard case',
      arr: [1, 2, 3, [1, 4, 3,]],
      depth: 1,
      flattenedArr: [1, 2, 3, 1, 4, 3],
    },
  ];

  it.each(cases)('$name', ({ arr, flattenedArr, depth }) => {
    expect(flat(arr, depth)).toEqual(flattenedArr);
  });
});
