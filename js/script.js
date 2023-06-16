'use strict';

const Car = function (make, speed, charge) {
  this.make = make;
  this.speed = speed;
  this.charge = charge;
};

Car.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  return this.charge;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%'`
  );
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
