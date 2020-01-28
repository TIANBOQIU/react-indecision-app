class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return "Hi! I am " + this.name + "!";
  }

  getDescription() {
    return `my name is ${this.name} and age ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    return `this student is a ${this.major} student`;
  }
}

// const me = new Student("Andrew Mead", 26, "CS");
// console.log(me.hasMajor());
// console.log(me.getDescription());

class Traveler extends Person {
  constructor(name, age, homeLocation = "New York") {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler("Andrew", 26, "Duibai");
console.log(me.getGreeting());
