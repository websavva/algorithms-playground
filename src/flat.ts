export function flat(arr: any[], n: number): any {
  if (n > 1000) throw new Error(`n is larger than max depth of ${n}`);

  const flattenedArr: any[] = [];

  for (const arrItem of arr) {
    if (Array.isArray(arrItem) && n > 0) flattenedArr.push(...flat(arrItem, n - 1));
    else flattenedArr.push(arrItem);
  }

  return flattenedArr;
}
