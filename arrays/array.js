/* Create an array object from scratch */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const newArr = new MyArray();

console.log(newArr);
// console.log(newArr.get(0));

newArr.push('apple');
newArr.push('oranges');
newArr.push('!');
newArr.push('fire');
newArr.push('water');
console.log('after push - ', newArr);

// newArr.pop();
// console.log('after pop', newArr);

newArr.delete(2);
console.log('after delete', newArr);
