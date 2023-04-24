//1,
//. Encapsulation: OOP puts things in an object in a container and organizes things into unitsthat model real world applications.
//We wrap code into boxes that are related to one another so that these boxes can just interact with each other using the methods and properties that we make available. This makes code easire to maintain and more 
//reusable

//2.Abstraction: 
//Just hiding the complexity from the user, Creating simpler interfaces such as We will take care of the class , all you do is instantiate a class and there you go. You have an 
//object and all the properties and methods. The idea of abstraction says, here are the methods and properties that you can use.Don't wory about everything else.we will do all the calculations behind the scenes
//This reducees complexity because we can just see the methods and understand what this class can do.The idea of abstarction also helps when we have private variables and private methods.

//3.Inheritance:
//By inheriting from other clasees we avoid having rewrite the same code, and we alsosave memory space by having shared methods.

//Polymorphism: many forms
//The idea is the ability to call the same method on different object and each object responding in different way. In the Elf and Ogre class
//The idea is to appear in many forms,we are simply doing method over writing, where the same method acts differently for each type of class
//The idea of polymorphism with OOP is that it has the ability to process the object differently depending on their data type or class
//Js is a dynamically typed language, it actually limits the amount of polymorphism that we can have
//The ability to redefine methods for derived classes and allowing us to re-use some of the functionality but also customize methods to their own objects


//Method Overloading
//Adding extra features or extra features or parameters to a method to add onto what that method can do. 
class Charcter{
    constructor (name, weapon){
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        return 'attack with '+ this.weapon 
    }
}


class Elf extends Charcter{
    constructor(name, weapon, type){
       super(name, weapon);
       console.log(this) 
       this.type = type;  
       console.log(this) 
    }
    //elf has a attack method which will take a parameter and will return with some text and passed parameter
    attack(cry){  
        return 'attack with '+ cry //you can also add this to line 17: super.attack() (Which calls the superclass method and combile it with the what we currently have on line 17)
    }
   }
   

class Ogre extends Charcter{
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    //The attack method of Orge is simply returning some text. It doesn't take any parametres
    attack(){
        return 'arghhhhh'
    }
}

//if look in Elf anf Orge both have the same attack method inherited from Character class, but each of them will respond to the attack method differently

const gollum = new Elf('gollum', 'magic', 'My precious')
const rocket = new Ogre('rocket','AR', 'grey')


//Exercise:

class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
  }
  //Polymorphism--
  //Extend the Character class to have a Queen class. The output of the below code should be:

  class Queen extends Character{
    constructor(name, weapon, type){
        super(name, weapon)
        this.type = type
    }

    attack(){
        //this super.attack () method will run the method of super class, where this will point to current calling object. It will have the behaviour defined in the
        //super class.
        console.log(super.attack()); 
      return `I am the ${this.name} of ${this.type}, now bow down to me!`
    }
  }
  const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'
  
  victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '