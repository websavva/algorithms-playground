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

  cases.forEach(({ name, brackets, isCorrect }) => {
    it(name, () => {
      expect(checkBrackets(brackets)).toBe(isCorrect);
    });
  });
});
