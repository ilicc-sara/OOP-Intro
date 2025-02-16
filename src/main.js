"use strict";
import "./style.css";

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create method inside of constructor function
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person("Jonas", 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} is linked to prototype
// // 4. function automatically return {}

// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// // Prototypes

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// Challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// class expression
// const PersonCl = class {}

///////////////////////////////////////////////////////////////////////////
// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this._fulltName}.`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica.age);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}.`);
// };

jessica.greet();

// 1. lasses are not hoisted
// 2. Classes are first-class citizens
// 3. Body of a class are always executed in strict mode

const walter = new PersonCl("Walter White", 1965);
console.log(walter.fullName);

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
