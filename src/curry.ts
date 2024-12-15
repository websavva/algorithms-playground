export function sum(...numbers: number[]) {
  return numbers.reduce((ac, number) => ac + number, 0);
}

export function curry(func: Function) {
  return function curriedFunction() {
    if (arguments.length === func.length) return func.apply(this, arguments);
    else {
      const partialArgs = arguments;

      return function () {
        return curriedFunction.apply(this, [...partialArgs, ...arguments]);
      };
    }
  };
}

export function curriedSum(digit?: number) {
  let sum = digit || 0;

  if (typeof digit === 'undefined') {
    return sum;
  } else {
    return function innerCurriedSum(digit?: number) {
      if (typeof digit === 'undefined') return sum;

      sum += digit;

      return innerCurriedSum;
    };
  }
}
