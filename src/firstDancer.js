var FirstDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

FirstDancer.prototype = Object.create(Dancer.prototype);
FirstDancer.prototype.constructor = FirstDancer;

FirstDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};
