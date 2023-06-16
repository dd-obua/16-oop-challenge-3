'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return `${this.make} is going at ${this.speed} km/h`;
  }

  break() {
    this.speed -= 5;
    return `${this.make} is going at ${this.speed} km/h`;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
console.log(ford.accelerate());
console.log(ford.break());
ford.speedUS = 50;
console.log(ford);
