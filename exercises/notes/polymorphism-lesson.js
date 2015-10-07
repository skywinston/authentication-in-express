function Bicycle(wheelSize, color) {
  this.wheelSize = wheelSize;
  this.color = color;
}

Bicycle.prototype.toString = function() {
  return 'This sweet ' + this.color + ' bicycle has an awesome ' + this.wheelSize + ' wheelset.';
};

Bicycle.prototype.takeForRide = function() {
  return 'Currently riding a shiny ' + this.color + ' bike down the sidewalk!';
}

function RoadBike(wheelSize, color) {
  this.validWheelSizes = ['700C'];
  this.validateWheelSize(wheelSize);  // the MountainBike constructor will have this as well
  this.wheelSize = wheelSize;

  this.color = color;
}
RoadBike.prototype = new Bicycle(); // Inherits property/value pairs from lines 2-3

var redRoadBike = new RoadBike('700C', 'red');
console.log(redRoadBike.toString());
// This sweet red bicycle has an awesome 700C wheelset.

function MountainBike(wheelSize, color, frontSuspension) {
  this.validWheelSizes = ['26"', '27.5"','29"'];
  this.validateWheelSize(wheelSize); // Because this exists in RoadBike, and both MountainBike & RoadBike inherit from Bicycle, you can DRY this function into Bicycle
  this.wheelSize = wheelSize;

  this.color = color;
  this.frontSuspension = frontSuspension;
}
MountainBike.prototype = new Bicycle();

var blueMountainBikeWithFrontSuspension = new MountainBike('27.5"', 'blue', true);
console.log(blueMountainBikeWithFrontSuspension.toString());

Bicycle.prototype.validateWheelSize = function(wheelSize) {
  if (this.validWheelSizes.indexOf(wheelSize) == -1) throw 'Wheelsize for road bikes must be one of ' + this.validWheelSizes.join(', ');
}; // here we are DRYing this function into the Bicycle prototype, which will be inherited by both RoadBike & MountainBike

