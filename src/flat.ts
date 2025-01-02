export function flat<T extends any[]>(arr: T, n: number) {
  if (n > 1_000) throw new Error(`n is larger than max depth of ${n}`);

  const flattenedArr: T[] = [];

  for (const arrItem of arr) {
    if (Array.isArray(arrItem) && n > 0)
      // @ts-expect-error
      flattenedArr.push(...flat(arrItem, n - 1));
    else flattenedArr.push(arrItem);
  }

  return flattenedArr;
}
