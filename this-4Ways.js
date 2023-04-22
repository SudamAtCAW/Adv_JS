//new binding this
function Person1(name, age){
    this.name = name;
    this.age = age;
}
//With the proper this updated the new binding allows us to assign this to the object that we instantiate
const person1 = new Person('Logan', 28)
person1 //{name: 'logan', age:28}

//implicit binding: here we don't have to do anything
//We created an object, inside of that object, the this keyword will refer to the person , that is implicit binding 
const person2 = {
    name: 'Rhea',
    age: 24,
    hi(){
        console.log('hi '+ this.name)
    }
}

//Explicit binding
//It is the use of bind/call/apply to explicitly tell the program , we want this to point to this object(window)
const person3 = {
    name: 'Sushant',
    age: 34,
    hi: function(){
        //here instead of this we could have given window, but we want to this to point to window explicitly
        console.log('hi '+ this.setTimeout)
        //here we are explicitly giving the object where this needs to pint
    }.bind(window)
}
person3.hi()


//Arrow functions
//With arrow functions we learned that unlike all the other times where this is dynamically scoped, that is, it gets determined whenever it gets called

//With the arrow functios we can do lexical scoping that is, whenever we write a function , that's where this binds to

//if wehace person 4 and we have hi function inside of that function, but inside of that function we have another function
//Remember a method with a function inside of it is the biggest gotcha when it comes to this
//When we run inner here , w=everything is working because we're using arrow functions
//if we have used a regular function , this will be pointing to the windw object, which we never want
const person4 = {
 name: 'Karen',
 age: 40,
 hi: function(){
    var inner = () =>{
        console.log('hi '+ this.name)
    }
    return inner()
 }
}

person4.hi()