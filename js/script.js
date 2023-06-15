'use strict';

const Car = function (make, speed, charge) {
  this.make = make;
  this.speed = speed;
  this.charge = charge;
};

const EV = new Car('Tesla', 120, 23);
