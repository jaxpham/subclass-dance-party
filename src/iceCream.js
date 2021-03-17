var iceCream = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
};

iceCream.prototype = Object.create(makeDancer.prototype);

iceCream.prototype.constructor = iceCream;

