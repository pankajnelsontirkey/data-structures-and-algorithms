class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const myKeys = [];
    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (currentBucket) {
        if (currentBucket.length > 1) {
          for (let j = 0; j < currentBucket.length; j++) {
            myKeys.push(currentBucket[j][0]);
          }
        } else {
          myKeys.push(currentBucket[0][0]);
        }
      }
    }
    return myKeys;
  }
}

const myHashTable = new HashTable(2);

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 5500);
myHashTable.set('oranges', 3200);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));

console.log(myHashTable.keys());
