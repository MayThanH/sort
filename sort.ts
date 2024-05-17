export function sort(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const mergedCollection = [...collection1, ...collection2, ...collection3];
  const n = mergedCollection.length;

  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (mergedCollection[i] < mergedCollection[i + 1]) {
        [mergedCollection[i], mergedCollection[i + 1]] = [
          mergedCollection[i + 1],
          mergedCollection[i],
        ];
        swapped = true;
      }
    }
  } while (swapped);

  return mergedCollection;
}
