// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// function containsCommonItems(arr1, arr2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// containsCommonItems(array1, array2); // O(a*b)

function containsCommonItems(arr1, arr2) {
  const arr1ToObj = arr1.reduce((acc, item) => ({ ...acc, [item]: true }), {});
  const indexInArr2 = arr2.findIndex((item) => arr1ToObj[item]);
  return indexInArr2 > -1;
}

console.log(containsCommonItems(array1, array2)); // O(a + b)
