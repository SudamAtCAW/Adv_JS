//With ES6, JS finally got the class key word
//OP was cretaed with the class idea in mind, a class being a blue print of what we want to create

//The constructor is something that gets run everytime we instantiate or use the new key word on a class. 

//The beauty with classes as OOP suggests, we want to keep all our functionality inside of this class, all the properties, all the methods, actions
//Instead of having the elfFunction in a separate location we can add this inside the class 

//An instance happens when we call this class and create an object out of this class.

class Elf{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    //The attck function was kept outside of the constructor , because each elf has a different name and weapon but every elf has the same attack method.
    //If attack is declared inside the constructor it will consume more memory as it will create one attack method for each instatiation
    //So by keeping this attack() outside of constructor block we are storing it at just one location and that all these instances can access
    attack(){
        return 'attack with '+ this.weapon
    }

}
//Here peter is an instance of Elf
const peter = new Elf('peter', 'jump')
console.log(peter instanceof Elf)  //true
console.log(Elf instanceof peter)  //false

//When ever we are creating an object with the new keyword, we are creating an instance of class.
//This with the new key word called instantiation, we are instating a class

//In other language classes are actual things, in JS calsses are just objects

//In JS classes exist as Syntactic sugar, but class keyword is still just prototypal inheritance
//In JS it is called sudo classical inheritance because it's not real classical inheritance