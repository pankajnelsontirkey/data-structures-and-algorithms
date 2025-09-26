/**
 * Create a function that reverses a string:
 * 'Hi, my name is Pankaj' should become -> 'jaknap si eman ym ,iH'
 */

function reverse(str) {
  if (!str || typeof str !== 'string' || str.length < 2) {
    return false;
  }

  const arr = str.split('');
  const len = arr.length;

  for (let i = 0; i < len / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }

  return arr.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = () => str.split('').reverse().join('');

const reverse4 = () => [...str].reverse().join('');

const str = 'apples and oranges!';

console.log(str);
console.log(reverse(str));
console.log(reverse2(str));
console.log(reverse3(str));
console.log(reverse4(str));
