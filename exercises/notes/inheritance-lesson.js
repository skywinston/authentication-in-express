// Define a constructor function
function Campsite(location, tentCount, bears, food){
  this.location = location;
  this.tentCount = tentCount;
  this.bears = bears;
  this.food = food || [];
}

// Instantiate a new campsite called 'backyard'
var backyard = new Campsite("backyard", 1, false);
console.log(backyard);
//→ {location: "backyard", tentCount: 1, bears: false, food: Array[0]}


// Use prototype method on Campsite constructor to create addFood method and pass it to all instances of Campsite
Campsite.prototype.addFood = function(arrayOfFoods) {
   this.food.push(arrayOfFoods);
};

// Utilize the new method passed from the prototype method
backyard.addFood(["beans", "bacon", "beer"]);

console.log(backyard.food);
//→ ["beans", "bacon", "bear"]