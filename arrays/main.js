const strings = ['a', 'b', 'c', 'd'];
// In 32-bit systems - 4*4bytes = 16bytes of storage

strings[2];

/* PUSH */
strings.push('e'); // O(1)

/* POP */
strings.pop(); // O(1)

/* UNSHIFT */
strings.unshift('x'); // O(n)

/* SPLICE */
strings.splice(2, 0, 'alien'); // O(n);

console.log('strings', strings);

/* Static Arrays in C++ */
/* 
int a[20];
int b[5] = [1, 2, 3, 4, 5];
*/
