export function promiseAll<T extends Array<Promise<any>>>(promises: T) {
  const results = [] as Awaited<T>;

  let resolvedPromisesCount = 0;

  return new Promise<Awaited<T>>((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];

      promise
        .then((result) => {
          results[i] = result;

          if (++resolvedPromisesCount === promises.length) resolve(results);
        })
        .catch(reject);
    }
  });
}

async function main() {
  const results = await promiseAll([Promise.resolve(1), Promise.resolve(true)] as const);
  
}

main();
