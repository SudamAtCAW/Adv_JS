//When we oinvoke a function we get two parameters, this and arguments
//Arguments is an array like object which has iteration and looping like behaviours. se we should avoid using arguments keyword,
//We can use spread operator instead

function one(){
    return 1
}

one()

//a method is a function inside an object
 
const obj = {
    two: function(){
        return 2
    }
}

obj.two() //calling the function as a method, As we are calling function two from obj, this will be updated to obj instead of window


function three(){
    return 3
}

three.call() 

//Constructor: The constructor method is a special method of a class for creating and initializing an object instance of that class
//Function: It is function constructor

//Here all we do is the first parameter is whatever we want the function text to be , which is to return
const four = new Function('return 4')

//We can also give parameters
const five = new Function('num', 'return num')

five(5)

//As functions are objects in JS we can add properties into it

function woohoo(){
    console.log('woohoo')
}

woohoo.yell = 'Ahhhh'
//Here underneath the hood what JS does is well it creates a special type of object called a callable object

const specialObj = {
    yell: 'Ahhh',
    name: 'Woohoo',
}

sumFunc() //this sumfunction has some special properties. It has a piece of code that can invoke with with this these brackets
//it has a name property that is optional as we can have anonymous functions

//properties call, apply, bind

//These properties are only available with function.
//If we have an object, these properties are not available for an object

//Functions are objects, And they are a special type of object that is a callable object with the bracket

//As functions are objects in JS, That means we can pass them around, like objects, like things that contain data