const bracketPairs = {
  '{': '}',
  '[': ']',
  '(': ')',
};

const invertedBracketPairs = Object.fromEntries(
  Object.entries(bracketPairs).map((entry) => entry.reverse()),
);

export function checkBrackets(str: string) {
  const bracketStack: string[] = [];

  for (const bracket of str) {
    if (
      invertedBracketPairs[bracket] &&
      bracketStack[bracketStack.length - 1] === invertedBracketPairs[bracket]
    ) {
      bracketStack.pop();
    } else {
      bracketStack.push(bracket);
    }
  }

  return bracketStack.length === 0;
}
