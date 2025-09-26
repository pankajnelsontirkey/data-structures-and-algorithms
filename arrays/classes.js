/* Advanced objects */

// Objects are reference type data structures

/* referece type */
// var obj1 = { value: 10 };
// var obj2 = obj1;
// var obj3 = { value: 10 };

// obj1 === obj2; // true
// obj1 === obj3; // false

/* context vs scope */
// const obj4 = {
//   a: function () {
//     console.log(this);
//   }
// };

// obj4.a();

/* instantiation */
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    console.log('Player - ', this);
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('Wizard - ', this);
  }

  play() {
    console.log(`You shall not pass! (said ${this.name}, The ${this.type})`);
  }
}

const wizard1 = new Wizard('Gandalf', 'Benevolent');
wizard1.play();

// const wizard2 = new Wizard('Saruman', 'Sorceror');
// wizard2.introduce();
