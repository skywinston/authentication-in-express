function Person(name, title, evil, enemyOfKing){
  this.name = name;
  this.title = title;
  this.evil = evil;
  this.enemyOfKing = enemyOfKing;
  
  var that = this;
  
  return {
    getName: function(){
      return that.name;
    },
    getTitle: function(){
      return that.title;
    },
    setTitle: function(newTitle){
      that.title = newTitle;
    },
    getIsEvil: function(){
      return that.evil;
    },
    getIsEnemyOfKing: function(){
      return that.enemyOfKing;
    },
    setIsEnemyOfKing: function(boolean){
      that.enemyOfKing = boolean;
    }
  };
}

function Castle(){
  this.people = [];

  that = this;

  return {
    addPerson: function(person){
      if (person.getIsEnemyOfKing()){
        return "You shall not pass!";
      } else {
        that.people.push(person);
      }
    },
    getPeople: function(){
      return that.people;
    }
  }
}

var andrew = new Person("Andrew", "King", false, false);
var joker = new Person("Joker", "The Jester", true, true);
var andrewsCastle = new Castle();

console.log(andrew);
andrewsCastle.addPerson(andrew);
console.log(andrewsCastle.getPeople());






