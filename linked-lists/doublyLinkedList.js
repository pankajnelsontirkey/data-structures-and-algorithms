class MyNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = { prev: null, value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new MyNode(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new MyNode(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      this.length++;
    }
    if (index > this.length) {
      this.append(value);
      this.length++;
    }

    const newNode = new MyNode(value);
    const leftNode = this.traverseToIndex(index - 1);
    newNode.prev = leftNode;
    newNode.next = leftNode.next;
    leftNode.next = newNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    if (this.length === 0) {
      return this.head;
    }

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
}

const myDoublyLinkedList = new DoublyLinkedList(2);

myDoublyLinkedList.append(4);
myDoublyLinkedList.prepend(8);
myDoublyLinkedList.insert(0, 3);
myDoublyLinkedList.insert(2, 5);

console.log(myDoublyLinkedList.printList());
