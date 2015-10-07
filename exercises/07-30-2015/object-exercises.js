var laptop = {
  powerOn: false,
  asleep: false,
  uptime: null,
  turnOff: function(){
    if (this.powerOn === true){
      this.powerOn = false;
      this.uptime = 0;
      this.asleep = false;
  }
};

var coffeeMug = {
  isFull: true,
  capacityInOz: 16,
  color: "white",
  fillCoffee: function(){
    if (this.isFull === true) {return "Already Full"};
    this.isFull = true;
  }
  emptyCoffee: function(){
    if (this.isFull === false) {return "Already Empty"};
    this.isFull = false;
  }
};