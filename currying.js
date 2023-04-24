//currying:
//It is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument.
//or
//You take a function that can take multiple parameters and instead using currying, modify it into a function that takes one parameter at a time.

//Here is a function, which takes two parameters and returns the two numbers multiplication
const multiply = (a, b) => a*b
//One way to call this is
multiply(3,4) //12
//But we have to make this function in such a way that it take do the same thing by taking one parameter

//We will create a method, which will take one parameter and going to return another function that takes another parameter
//and the second function will return the multiplication of a*b
//Because of closures, we have access inside of the B function to the a variable 
const curryiedMultiply = (a) => (b) => a*b

//to use this
curryiedMultiply(5, 7) //no result , as it is curryied, it takes one parameter

//the way we look at arrow functions is that we can mimic how the function is written in the way that I call the function 
curryiedMultiply(5)(7) //35
//By the above currying we have achieved to give one parameter at a time

//the useful of currying is now we can create multiple utility functions out of this
//example
//here we have called the function once, and this function(curryiedMultiply) is going to remember this piece of data(5) for forever until we finish running the program
//instead of running this program over and over, we have ran this program once  and now this curriedmultiplyBy5  is there for us to use.
const curriedmultiplyBy5 = curryiedMultiply(5)
//10 years from now
curriedmultiplyBy5(7) //35


//Currying almost reminds us of those methods, on prototypes that we're shared among objects, they are trying to save on memory, or atleast the amount that our computers has to work
