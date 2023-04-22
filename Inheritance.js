//Inheritance  means passing knowledge down
//We have a Elf class 
class Elf2{
    constructor (name, weapon){
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        return 'attack with '+ this.weapon 
    }
}
//this object fiona is created from Elf class
const fiona = new Elf2('fiona', 'ninja stars')
//Now we will create another object, 
//We have copied all the data of fiona into ogre
const ogre = {...fiona}
console.log(ogre)  //{name: 'fiona', weapon: 'ninja stars'}
console.log(fiona === ogre) // false

ogre.attack() //error, we have lost this prototype inheritance chain

//To make naming lot better we will change the class name

class Charcter{
    constructor (name, weapon){
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        return 'attack with '+ this.weapon 
    }
}

//This is called subclassing in OOP
//Here Character class is the base class or super class and Elf is the sub class
//In order for us to have our constructor and be able to use this and know what this is referring to, which is Elf and not the character class because we have both name and weapon from character class
//we have this special keyword called Super for super class,
//here we are declaring super() with the required parameters from inside of constructor. And by doing so, we are saying call the superclass(Character), so it goes up and calls the constructor
//so that we create this.name and this.weapon 

//when we do class Elf extends Character, it means hey. extend and set the prototype to point to Character
//So Elf has a prototype chain up to character
class Elf extends Charcter{
 constructor(name, weapon, type){
    //when we have our own constructors we need to specify which of the variables are to be called from supercalss and which are from sub class
    //The below line of code means, any time you run instance of Elf like harry and it uses a property or a method that I don't have look up in Character.
    //The constructor is our own constructor just for the Elf class, this is something that only gets run with an elf, not with character
    //we can leave the below two lines of code, but if we want to set any sort of property that is used the THIS keyword, we have to call super and say, hey, Call the constructor of the super class
    //and then I will know what to do with this keyword
    super(name, weapon);
    console.log(this) //{name: 'harry', weapon: 'magic stick'}, so this because we call the super and runs the constructor,we now have an instance of Character with the properties
    this.type = type;  //by this we are adding our own data
    console.log(this) // In this case we use the new keyword, so this is going to be set to Elf

 }
}

const ariana = new Elf('fiona', 'ninja stars') 

const harry = new Elf('Harry', 'Magic stick', 'sorcer')

class Ogre extends Charcter{
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }

    //when we created this makefort method, what we did is Ogre.prototype.makefort(extended the prototype chain to makefort method)
    //Underneath the hood JS does this for us as we created this by using the new keyword
    makefort(){
        return 'strongest fort in the world'
    }
}

const shrek = new Ogre('Shrek','Hammer', 'Green')
//Ogre is a constructor function
console.log(Ogre.isProtypeOf(shrek)) //false
//we should check this way Ogre.prototype which is the object that contains all the methods and methods we have available
console.log(Ogre.prototype.isProtypeOf(shrek)) //true
console.log(Charcter.prototype.isProtypeOf(Ogre)) //false
console.log(Charcter.prototype.isProtypeOf(Ogre.prototype)) //true

//the prototype of way is a bit confusing to check the connection

//There is abetter way
console.log(shrek instanceof Ogre)  //true
console.log(shrek instanceof Elf)  //false
console.log(shrek instanceof CharacterData) //because it refers all the way up to character

//Instance is essentially creating a version of the class
//What we do with the keyword extends is inheriting something from a higher class
//inheritance in JS is not copy of functionality, it just doesn't copy what we have in the superclass, instead it simply links up the prototype chain
//We are not creating copies and making things inefficient
 
