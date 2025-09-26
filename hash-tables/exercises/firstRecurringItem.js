/**
 * Given an array = [ 2, 5, 1, 2, 3, 5, 1, 2, 4 ]
 * Return the first recurring item - in this case 2
 */

function firstRecurringItem(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    } else {
      map[nums[i]] = true;
    }
  }
  return undefined;
}

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [1, 2, 3, 4, 5];

console.log(firstRecurringItem(array3));
