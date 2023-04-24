//Compose
//It is the idea that any sort of data transformation that we do should be obvious.
//Let's take an example: A conveior belt
//In a factory , we hve data that gets processed by a function that outputs some sort of data and that data get's processed by another function, that outputs that data in a new form and
//so on and so forth
// data--> fn--> data--> fn-->

//Composability is a system design principle that deals with the relationship of components, how we can compose different componenets of a factory that works on, 
//let's say conveyor belt and a highly composable system provide components that can be selected and assembled in various combinations, Just like an assembly line,
//we're moving this machine here and this machine here. it's easy to move pieces arround to get the desired output based on the user's specific requirements.


//Here we have two values -50 and 3 , we want the multiplication of those two and it should return the absolute value 
-50 , 3
//in FP we can use something called compose. Now compose doesn't exist in JS, however there are ton of libraries that actually let you use compose
//for example , one of the best libraries when it comes to JS and FP is ramdajs
//------------------------------------------------------------------------------------------------------------------------------|
//Ramda Example
const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
//we can use compose like this R.compose and we can pass it in functions just like an assembly line to operate on data
const yellGreeting = R.compose(R.toUpper, classyGreeting);
yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"

R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7


//----------------------------------------------------------------------------------------------------------------------------------

//This compose function, when given a number is going to multiply by three and make positive


//Lets define our own compose function, This compose function is going to take two functions , so let's call it f and g
//And f and g going to return another function, and this function will receive the data, so whatever we want to multiply by 3 and absolute that number
//Let's say in our example we want to to be able to call multiply by three in absolute -50, it means to call the multiplyBy3 function inside absolute function or make positive function
//multiply by 3 function is f and absolute function is g
//here the data will be the number what ever we want to multiply by three and absolute that number 
 //this is just an example, -50 is the data here


//Our compose function is going to accept f and g, which is multiply by three and make positive, which is going to return a function
//and that function will take the data which is -50 in our case and we want to first apply the make positive function, so we will say g is going to call the data g(data)
//after g evaluates , we want the result to be multiplied 3 , As functions are first class citizens in JS and when that gets done , we want to
//call f which in our case is multiplyBy3, f(data) -> here data is the evaluated value returned from absloute function. 
//lets just place absolute function insdie multiplyBy3 function f(g(data))
//so f (multiply by 3 ) will take the value which it received from g(data) and will multiply it by three and return the value

//Here in place of f and g we can pass any type of functions
//Here we have created our own compose function
//The order of execution of this compose function is from RIGHT to LEFT
const compose = (f, g) => (data) =>f(g(data)) 

const multiplyBy3 = (num) => num * 3
//We are using the Math.abs to find the absolute value of the passed number
const makePositive= (num) => Math.abs(num)

//creating an variable which will stroe the compose functionality of the multiplyBy3 and makePositive function
//here using compose we have created our little assembly line, where we can compose different functions together 
const multiplyBy3AndmakePositive = compose(multiplyBy3, makePositive)
//calling the variable by passing the dta
multiplyBy3AndmakePositive(-50)  //150

//Definition of Compose
//Composability is a system design principle that deals with relationship between components, In the above case function multiplyBy3 and makePositive are the components. That can be selected and
//assembled in various combinations, We can move multiplyBy3 to the end and makePositive to the beginnin((compose(makePositive, multiplyBy3))g to change the order of the operation changes.
//Just like moving little machinery in the assembly line.

//Pipe:
//Pipe is essentially the same thing except instead of going from right to left it goes LEFT to RIGHT
//In Pipe first f gets run over the data, f is the first prameter that we give in compose, which means multipliedBy3 gets run first and then G gets run over that data.
//which means makepositive gets run last
const pipe = (f, g) => (data) =>g(f(data)) 

//A better way to understand is 
//Imagine if we had a function, one that takes as a parameter a function and that function is function two, that itself takes a function which is function three, and that function(function 3)
//itself takes -50
//With compose we are going to say, take the data and then apply function tree to it, after that apply function 2 to the data received from function 3 and then apply function 1 to the dta received
//from function2 
compose(fn1, fn2, fn3)(50)

//Pipe is just the opposite
pipe(fn3, fn2, fn1)(50)

//Both of the above functions are going to have the exact same output because the order is actually the same
//The only difference is pipe is going to grab 50 and then start of with fn3 just like compose start off with fn3 and then do function 2 and then function 1, so goes left to right 