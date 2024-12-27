if (!Array.prototype.some) {
  Array.prototype.some = function <T extends any[]>(
    this: T,
    checker: (value: T[number], index: number, arr: T) => boolean,
    thisArg?: any,
  ) {
    const shouldPassThisArg = arguments.length === 3;

    for (let i = 0; i < this.length; i++) {
      const baseCheckerArgs = [this[i], i, this] as const;

      const wasConditionMet = shouldPassThisArg
        ? checker.call(thisArg, ...baseCheckerArgs)
        : checker(...baseCheckerArgs);

      if (wasConditionMet) return true;
    }

    return false;
  };
}
