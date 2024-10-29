import { describe, it, expect } from 'vitest';

import { checkBrackets } from './check-brackets';

describe('checkBrackets', () => {
  const cases = [
    {
      name: 'empty string',
      brackets: '',
      isCorrect: true,
    },
    {
      name: 'nested brackets',
      brackets: '{([()])}',
      isCorrect: true,
    },
    {
      name: 'inverted brackets',
      brackets: '}{()',
      isCorrect: false,
    },
  ];

  it.each(cases)('$name', ({ brackets, isCorrect }) => {
    expect(checkBrackets(brackets)).toBe(isCorrect);
  });
});
