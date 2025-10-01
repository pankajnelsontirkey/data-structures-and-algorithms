/**
 * 10 --> 5 --> 16

  let myLinkedList = {
    head: {
      value: 10,
      next: {
        value: 5,
        next: {
          value: 16,
          next: null
        }
      }
    }
  };
 */

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value: value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = { value: value, next: null };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // 12 -> 10 -> {99} -> 5 -> 16 -> 3
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = { value: value, next: null };

    const leftNode = this.traverseToIndex(index - 1);

    newNode.next = leftNode.next;
    leftNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return this;
    }
    if (index > this.length) {
      console.log('Overflow!');
      return this;
    }

    const leftNode = this.traverseToIndex(index - 1);
    const currentNode = leftNode.next;
    leftNode.next = currentNode.next;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  printList() {
    const list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  getLength() {
    return this.length;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5); // 10 -> 5
myLinkedList.append(16); // 10 -> 5 -> 16
myLinkedList.append(3); // 10 -> 5 -> 16 -> 3
myLinkedList.prepend(12); // 12 -> 10 -> 5 -> 16 -> 3

myLinkedList.insert(2, 99); // 12 -> 10 -> 99 -> 5 -> 16 -> 3
myLinkedList.insert(4, 23); // 12 -> 10 -> 99 -> 5 -> 23 -> 16 -> 3
myLinkedList.insert(11, 36); // index > length; 12 -> 10 -> 99 -> 5 -> 23 -> 16 -> 3 -> 36
myLinkedList.insert(0, 75); // index = 0;  75 -> 12 -> 10 -> 99 -> 5 -> 23 -> 16 -> 3 -> 36
// myLinkedList.remove(0);
// myLinkedList.remove(20);
myLinkedList.remove(3);

console.log(myLinkedList.printList());
