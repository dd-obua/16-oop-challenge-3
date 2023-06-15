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

const EV = new Car('Tesla', 120, 23);
EV.accelerate();
EV.accelerate();
EV.accelerate();
EV.accelerate();
EV.accelerate();
console.log();

const EC = new Car('XYZ', 100, 90);
EC.accelerate();
EC.accelerate();
EC.accelerate();
EC.accelerate();
EC.accelerate();
