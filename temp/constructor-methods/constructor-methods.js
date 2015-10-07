function Pet(){
    this.cute = true;
    this.hungry = true;
    this.feed = function(){
        this.hungry = false;
    }
    this.wagTail = function(){
        console.log("Irritated/happy.");
    }
}

function Dog(){
    this.hasBall = false;
    this.fetch = function(){
        this.hasBall = true;
    }
}
Dog.prototype = new Pet();

var myDog = new Dog();

myDog.cute

myDog.feed();
myDog.hungry;

Pet.prototype.cuddle = function() {
  console.log("Your pet is happy.");
};


