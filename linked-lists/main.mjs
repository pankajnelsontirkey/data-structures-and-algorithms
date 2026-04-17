// const basket = ['apples', 'grapes', 'pears']; // array

/* 
linked list: apples --> grapes --> pears

OR

apples
8947 -->  grapes
          8742 -->  pears
                    372 -->   null
*/

let obj1 = { a: true };
let obj2 = obj1;

obj1.a = 'hello';

// console.log('1', obj1);
// console.log('2', obj2);

delete obj1;
// console.log('1', obj1);
console.log('2', obj2);

obj2.a = 'goodbye';
console.log('2', obj2);
