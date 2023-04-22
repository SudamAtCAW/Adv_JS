//There are two pilars of JS that are really really important.
//One is closures which is already coverd

//Second is Prototypal Inheritance:


//In JS arrays and functions are objects, 

//Inheritance is an object getting access to the properties and functions of another object
//The array object gets access to the properties and menthods of the object through inheritance. and the same happens with Functions.

const array = []
//This array was created from array[] , what we call a constructor, The array[] created our array variable that contained, well an empty array.
array.__proto__

//By running the above line of code to go up the prototype chain and get into this array.So if we go by that theory, if we go up the prototype chain, we should  get an object
array.__proto__.__proto__

//same in case of functions also

function a(){
    console.log('a')
}

a.__proto__
//we will get a native function
a.__proto__.__proto__
//we will get the object

const obj1 = {}

obj1.__proto__
//we will get the object

//Other languages uses classical inheritance
//JS uses prototypal inheritance

//in JS class is called syntactic sugar. There is no class in JS. Only prototypal inheritance

let dragon = {
    name: 'Valerion',
    fire: true,
    fight(){
        return 5
    },
    sing(){
        return `The song of ice and fire by ${this.name}`
    }

}
dragon.sing() //the song of ice and fire by Valerion

let lizard = {
    name: 'Draco',
    fight(){
        return 1
    }
}

//borrowing a method of another object
const singLizard= dragon.sing.bind(lizard)
console.log(singLizard())
//The song of ice and fire by Draco

//Lets add a property to the dragon , which will check for fire property and if it is true only then it will execute sing()

let dragon2 = {
    name: 'Valerion',
    fire: true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire)
        return `The song of ice and fire by ${this.name}`
    }

}
dragon.sing() //the song of ice and fire by Valerion

let lizard2= {
    name: 'Draco',
    fight(){
        return 1
    }
}

const singLizard2= dragon2.sing.bind(lizard2)
console.log(singLizard2()) //undefined as the lizard doesn't have the fire property

//We were able to borrow one method from dragon object this time manuallly
//Think of this like, if we have thousands of properties and we want to borrow each one of the methods, it is difficult to borrow each method

//Thats where inheritance comes into play
//To create a prototype cahin betn lizard and dragon
lizard.__proto__=dragon

//Now lizard inherits all the properties and methods of dragon object
lizard.fire()
lizard.fight()

//whenever we try to access something from lizard object, if it doesn't find that inside lizars and will look up the prototype chain into dragon

//If it doesn't find the property or method in both of the objects it will thrugh error

//to check an obect is of which protptype
dragon2.isPrototypeOf(lizard2) //true, it means is lizard inherits from Dragon
lizard2.isPrototypeOf(dragon2) //false, it's the opposite

//if we do a for in loop in lizard
for(let prop in lizard2){
    console.log(prop) //name, fight, fire, sing
}

//it will print all the properties of dragon as well as lizard as , lizard inherits from Dragon by creating a prototype chain

//The hasown proprty checks if the proprty is of it's own or inherited
for(let prop in lizard2){
    //this hasOwnPropert takes a property as parameter abd checks it with the lizard
   if(lizard2.hasOwnProperty(prop)){ console.log(prop)} //name, fight are the only two properties of Lizard, other properties are inherited
}

//the hasOwnProperty is not a propert of lizard or dragon, it is a property of object, and hence lizard was able to access it by prototype chain automatically

//the __proto__ is bad for performance, and we should never use it

//Why proptotypal inheritance is important
//Because of prototypal inheritance, we don't have to copy and paste the properties every time, we jsut store it at one place and point out to the place from different places

//By this we are not repeating our selves and saving memory.

//whenever any called object is not found by JS, we get undefined, 

const obj = {}
obj.__proto__ //object {}

//if we try get up the chain
obj.__proto__.__proto__ //null, which menas nothing is there

//prototype chain for functions

multiplyBy5()


//multiplyBy5 which is a callble object that has code that is invaluable and has name:  that's optional
//some property and also has __proto__ as well as a prototype property. That prototype property linkes up to this function which once again is a callable object that has it's own code.
//it has properties, but it also has this property callled prototype that the prototype links to. and thats where call. apply, bind live. 
//the __proto__ lives in side the prototype object

multiplyBy5.__proto__ //native function, here __proto__ is a pointer which points to prototype object
//object has prototype property which has hasOwnproperty.
Function.prototype // f{} native code
Object.prototype // {}
Object.prototype.__proto__ //null

//__proto__ is a simply a reference or a pointer to up the chain prototype object

const array2 = [];
[].hasOwnProperty('map'); //false, we are being efficient with our memory , map function should live only in one location

[].__proto__.hasOwnProperty('map') //true
array.prototype //base oarray
array.__proto__ //base array, it is pointing to the father

//arrays and functions are obects in JS. multipliedby5 is a special type of object that is a callable object that instead of having call, apply and bind directly as it's properties
//uses prototypal inheritance to actually inherit from the base function

//__proto__ points to prototype{...} up the cain,and __proto__ lives inside prototype object, 
//We should never do prototype __proto__=some type of an object because we shuld never use this ,for performance reason in JS

//The safe way to inhertance

let human = {
    mortal: true
}

let socrates = Object.create(human) //this is one of the ways for inheritance, we creted using object create a prototype chain up to human

//object human will be equal to socrates
console.log(socrates)  //{} empty object
//Add a property in socrates
socrates.age= 45;
console.log(socrates) //{age:45}
consoole.log(socrates.mortal) //true

console.log(human.isPrototypeOf(socrates)) //true

//------>>> Only the functions have the prototype property.  <<<------

//Every function has a prototype property and it references to an object used to attach properties that will be inherited by objects further down
//The last object in the chain is this built in Object.prototype

//Object is a function as it has the prototype property, 
Object.prototype //base object, That's the very last object that we can look for properties on before point.
//cretaed obejcts and arrays even if they are Objects, they don't have the prototype property because they are not a function

'string'.prototype //undefined , when we tried this, underneath the hood, when we try to access a method on the 'string' JS is going to convert it into a string object and look up the prototype chain for these methods
//that way we can perform all these actions on the string type.
String.prototype // String object , 

//Everything in JS is an object. and arrays and functions in jS are objects they inherit through the prototype chain from the base object. We can go up the prototype chain looking forproperties
//on this prototype property. This prototype property also has the __proto__ property inside of it, that links higher up to the next prototype.

//Exercise:
Array.prototype.map = function()  { // what happens with arrow function here?
    arr = [];
    //here this will be referred to whoever called this, whatevere to the left of this
    for (let i = 0; i < this.length; i++) {
        //here we are getting each property of the array by it's index number and concatinating that with the map, Because of type coercion, we can concate a string with a number
      arr.push((this[i]+'🗺'));
    }
    //we havee to return the array
    return arr;
  }
  console.log([1,2,3].map())
  
  //Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
  //So the date object doesn't have lastyear property. By writing this below line we can access the lastyear property for Date object
  Date.prototype.lastYear = function(){
    //As we are currently inside Date object this will point out to Date object and use the methods that Date object has,
    //by substacting one from the current year(getFullYear) we will get last year
    return this.getFullYear() - 1;
  }
  
  new Date('1900-10-10').lastYear() //1899
//the below arrow function will through error as now this is lexically scoped. This will refer to the actual function that called us, This is one of the rare cases that we want this to be 
//determined at call time, when we actually run this function.
  Date.prototype.lastYear = () =>{
    console.log(this)
    return this.getFullYear() -1;
  }

  //Problem\
//   How would you be able to create your own .bind() method using call or apply.

// Hint:

Function.prototype.bind = function(){
}


//Solution

//here by doing this below line we are creating our own bind method and by prototype we can access it later
  Function.prototype.bind = function(whoIsCallingMe){
    //by assigning the value of this, even if the scope is changed, we will still be able to point out to the required object
    const self = this;
    return function(){
        //self is pointing to the object to which this was pointing
      return self.apply(whoIsCallingMe, arguments);
    };
  }
  // don't worry if you didn't get this... we will expand on this later.