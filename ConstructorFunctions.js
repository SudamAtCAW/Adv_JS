//Here we will talk about constructor functions

//A function that is invoked using the new keyword is called a constructor function.

function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

const peter = new Elf('peter', 'jump')

//Constructor
Number
Function
Object
//Capital letters but they were functions.These are all constructor functions.
//they are invoked by using the new keyword.
//All constructor functions should start with a capital letter to let other programmers know that , they need to know that thy can call this Elf function constructor using the new key word

//Let's create an elf using the constructor function that comes natively in JS
//the parameters of constructor function should be with in quotes
//The last parameter of the constructor will be what this function is going to do or return and it should be in template string
const Elf1 = new Function('name', 'weapon',
    ` this.name = name;
    this.weapon = weapon;`)


const sally = new Elf1('sarah', 'knowledge')

//A function constructor are those which allows us to use the new keyword. and create these objects for us

//The new keyword automatically returns an elf object for us and it creates this elf constructor, we have created a new object, and because this function is called a new execution context is
//created

//When a new context is created , we automatically get this variable attached t it.

//Instead of this pointing to the window object,like it usually does. the new keyword changes  what this is pointing to when a new execution context is created

//When ever we create a new object using the function constructor, this will point to the newly created object

//If we remove the new . without new we are not creating this object, we are not returning  an object and we're also not assigning this to the object that called us.
//the new key word does a ton of things for us behind the scenes

//Every function in JS gets automatically a prototype property

//Functions in JS are a special type of object. It's a callable object and the prototype property comes with it.

//This prototype property is absolutely useless with aby regular function, but when we have constructor functions, which we can invoke with new
//this prototype finally becomes useful and native constructor functions like the function comes will call, apply and bind
//Arrays come with things like map, reduce ,for each, because they built out of the array constructor.

//By the help of prototype property that comes with every function constructor
//we can add our own property to the prototype

Elf.prototype.attack = function(){
    //this will point out to the object who ever called it 
    return 'attack with '+ this.weapon
}

sally.attack()

//To review we were able to use constructor functions instead of something like objet create to create this magical 
//functios that creates a new object , returns a new object and also modifies what this means to whatever object calls us
//insted of global(window) object this will point to the object that call it peter, sally

//with the help of prototype property we can attach our own property to the Elf (constructor function) and by the prototype chain 
//object peter and sally will be able to call/use the properties

//if we use arrow functions we will get undefined error as arrow functions are lexically scoped

//The only way we can add properties to the constructor function is by using this keyword

//if we do 
peter.__proto__ //we will get elf as out prototype. Because Elf was created with the new keyword

//If we do we will get undefined ans only functions have the prototypr property and peter is an object
console.log(peter.prototype)

Elf.prototype.build = function(){
    function building(){
        return this.name + 'builds a house'
    }
    building()
}
console.log(peter.build()) //we will get undefined
//the above problem occured as we have functions inside methods or functions inside of functions, which means this is not assigned to the object itself but actually to the window object

//to solve the above
//1.
Elf.prototype.build = function(){
    function building(){
        return this.name + 'builds a house'
    }
    building().bind(this)
    return building.bind(this)
}
//2.
Elf.prototype.build = function(){
    function building(){
        return this.name + 'builds a house'
    }
    return building.bind(this)
}
//3 :Easire
Elf.prototype.build = function(){
    //here we are saving the the value where this is pinting to, otherwise inside the building function it will point to window object, currently it is pointing to the calling object
    const self = this
    function building(){
        //changed this.name to self(saved value of this) self.name

        return self.name + 'builds a house'
    }
    return building()
  
}

var a = new Number(5)
typeof a //object, as a was ceated with new key word
var b = 5 
typeof b //number

//Even though b is not creted with new key word, it has all the methods available to us. and even though type of b is a number
//And numbers are just primitive types
//In JS when we do something like , we are assign a variable internally, it's going to construct the number that we have added. so that we have access to all these methods

//JS sees that we want to use object methods so , it automatically assumes you meant objectinsted of primitive