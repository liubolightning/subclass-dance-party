var SecondDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

SecondDancer.prototype = Object.create(Dancer.prototype);
SecondDancer.prototype.constructor = SecondDancer;

SecondDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};
