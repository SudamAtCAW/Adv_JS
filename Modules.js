//Modules is like a painter on his oalette,paint in different comparatments with different colors and we he/she can bind them to create a piece of art.
//Or a writer who writes different chapters to make a book
//Different pieces of code grouped together so that things are organized. And as our application gets larger and larger, we can combile different pieces together to make these large applications
//Good modules are highly self contained grouped together with their own specific functionality, allowing them to be moved arround, used by other places or even removed without disrupting the 
//whole system

//we need a way to import code that we want to use, we don't necessarily have just one massive JS file
//ideally our code is broken into different files with different functionality or perhaps we even borrowing code that somebody else wrote and we want to use that in our progrma

//So we need a way to import dependencies that we want to use and export functionality : often called interface , to allow others to use our code

//What are programs
//They are simply a way for us to modify data, modify variables, because so much of our code is just about modifying data and how we organize these variables within our code.
//The way we structure this data should be the most important part of our program because it's going to allow us to have more maintainable code

//While declaring a variable inside a function we shouldn't worry about someone outside of the function of modifying it. Because of function scope we can only modify it from the inside
//of the function

//And there is a problem , without talking to other functions, without talking to other pieces of data outside of ourselves, we can't really write progrmas. we need a way to share data between 
//these different functions

//we can create an object which will store the shared data, and with each function we will pass this objct as a parameter, we are just moving the pieces of data that we need to share up the scope chain to
//a parent that can share the piece  of data with it's children i.e. the global scope
//if we keep adding data on the global scope, we might get tight coupling
//when in one function we are calling a variable named obj1 and if some one changes the name to objOne then we will get coupling
//Tight coupling means a lot of things having to depend on one another, this type of will also be hard to debug, it will also pollute the global space
//Causes possible memory leaks
//creating different script files won't solve the problem becaues the browser doesn't care whether it is asingle file or multiple file
//When it is executed, JS treats them one, that will be counted as a global variable
//the dependencies between these different parts of our code are what we call implicit, we are not defining it as they just kind of figure out on their own what's depending on whats modifying
//the data

var harry = 'potter'
var voldemort = 'He who must not be named'

function fight(char1, char2){
    //This will create a random number by multiplying the character length to math.random function and the math.floor will return a whole number/ an integer
    var attack1 = Math.floor(Math.random()* char1.length)
    var attack2 = Math.floor(Math.random()* char2.length)
    return attack1 > attack2 ? `${char1} wins `: `${char2} wins`
}

fight(harry, voldemort)

//When we will have this piece of code in the script.js file which again is in the index.html file
//harry and voldemort will remain in the global scope unless we define them inside the function
//problem will arise when some one redeclare our function as a variable or modifies

//we can not build large applications with out modules

//Very first module pattern

//Scopes in hierarchy order
 //Global scope
  //module scope
   //function scope
    //Block scope: let and const

//By looking at the order we can say that the modile scope can be used to share these variables between different functions , so we can share things without going to the global scope
//With a module scope , we can be explicit which of the variables , classes or functions in the module should be available, we can define which module to export which of the variables and functions
//And inside other module we can import the exported functions and variables
//Being explicit means, saying directly, hey this is what I want, this is what I am importing, this is what I will be exporting

//what ever we place inside an IIFe, we are we are not putting it in the Global scope. We have our own env

(function(){
    var harry = 'potter'
    var voldemort = 'He who must not be named'
    
    function fight(char1, char2){
        //This will create a random number by multiplying the character length to math.random function and the math.floor will return a whole number/ an integer
        var attack1 = Math.floor(Math.random()* char1.length)
        var attack2 = Math.floor(Math.random()* char2.length)
        return attack1 > attack2 ? `${char1} wins `: `${char2} wins`
    }
    
    console.log(fight(harry, voldemort))
})()

//we should be able to run this function in the console, but we can not access the functions and variables from outside the IIFE, we have removed the Global Namespaces

//What if we wanted other scripts to use this fight function? But we don't really want them to touch our variables(harry, voldemort), as they are private variables

//what we can do is
var fightModule = (function(){
    var harry = 'potter'
    var voldemort = 'He who must not be named'
    
    function fight(char1, char2){
        //This will create a random number by multiplying the character length to math.random function and the math.floor will return a whole number/ an integer
        var attack1 = Math.floor(Math.random()* char1.length)
        var attack2 = Math.floor(Math.random()* char2.length)
        return attack1 > attack2 ? `${char1} wins `: `${char2} wins`
    }
    
    console.log(fight(harry, voldemort))
})()
//So this which we call the Module pattern , allows us to assign this variable(fightModule) whatever the return of this function gets immediately invoked
//So when we run this function, something gets returned to fightModule

var fightModule = (function(){
    var harry = 'potter'
    var voldemort = 'He who must not be named'
    
    function fight(char1, char2){
        //This will create a random number by multiplying the character length to math.random function and the math.floor will return a whole number/ an integer
        var attack1 = Math.floor(Math.random()* char1.length)
        var attack2 = Math.floor(Math.random()* char2.length)
        return attack1 > attack2 ? `${char1} wins `: `${char2} wins`
    }
    //So we will return an object that contains a fight and we don't want to return harry and voldemort because thoese are private variables
    return {
        fight: fight
    }
})()

//We can only access the fight object only under the fightModule
//reusing our fightModule

fightModule.fight('bran', 'tyrion') //by this other pieces of code can now use this functionality, but only what we tell it to
//So here we are saying is , this is our public API, this is our interface, we are only exporting this(fight object), whatever is not exporting you can not touch touch
//And this  pattern of retunring  what we need 
return {
    fight: fight
}
//is actually called the revealing module pattern, we just reveal whatever we need
//from the module we have access to can the gobal variables and functions and we can easily modify them, any changes made in the module will affect and visible in global
//To avoid this from happening we can import the needed variables and functions
//by passing the global variable as parameeter and returning it will solve the problem, even if we use same naming convention
//Because in JS first it will search for the variable in local Scope , then in the Global scope, hence it will print the value it got ftom local scope

//By the export and import method we can exchanges data with out side world


//In the above function var fightmodule is a global variable, we are only revealing one variable polluting the global name space, just once
//And we are hiding everything else

//By this we can increase maintainability, can reduce dependencies on other code

//Updating a single module is much easier when this module is decoupled from other pieces of code
//When we fix our module, it will not affect the outer world

//two main proble with this module

//We are still polluting the global space
//As we don't know the dependencies, any changes in the sript file order will cause errors
//So we have to make sure that the script tag are in required order, so that those scripts depending on other scripts
//were declared after, so that we had these variables available to them