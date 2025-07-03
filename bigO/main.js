// const nemo = ['nemo'];

// const everyone = [
//   'dory',
//   'bruce',
//   'marlin',
//   'nemo',
//   'gill',
//   'bloat',
//   'nigel',
//   'squirt',
//   'darla',
//   'hank'
// ];

// const large = new Array(10000).fill('nemo');

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found Nemo!');
//       break;
//     }
//   }

//   let t1 = performance.now();

//   console.log('Call to findNemo took', t1 - t0);
// }

// findNemo(large); /* O(n) - Linear time*/

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes); /* O(1) - Constant time */

/* Log all pairs of array */
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes); // O(array.length * array.length) -> O(n * n) -> O(n^2)

/* --------- SPACE COMPLEXITY --------- */

function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boo!');
  }
}

boo([1, 2, 3, 4, 5]); // O(1) space

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n) space
