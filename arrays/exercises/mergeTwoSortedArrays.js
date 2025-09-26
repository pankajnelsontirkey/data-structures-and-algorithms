/**
 * Merge two sorted arrays
 * a = [0,3,4,31], [4,6,30]
 */

function mergeSortedArray(a, b) {
  // Checks
  if (!a || !b) {
    return 'Invalid inputs';
  }

  const mergedArray = [];

  let a_item = a[0];
  let b_item = b[0];
  let i = 1;
  let j = 1;

  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }

  while (a_item || b_item) {
    if (!b_item || a_item < b_item) {
      mergedArray.push(a_item);
      a_item = a[i];
      i++;
    } else {
      mergedArray.push(b_item);
      b_item = b[j];
      j++;
    }
  }

  return mergedArray;
}

const a = [0, 3, 4, 31];
const b = [4, 6, 30];

console.log(mergeSortedArray(a, b));
