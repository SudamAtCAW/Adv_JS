//Hoisting is the behaviour of moving the variables or function declarations to the top of their respective envs during their compilation
//It is the javascript engine alocating memory for the variables and functions that sees in your code during the creation phase before it executes our code

console.log('---1')
console.log(teddy) //this will result in undefined
console.log(sing()) //this will print 'off la la'
var teddy='bear'
function sing(){
    console.log('ohh la la')
}

//during the creation phase whenever javascript sees var and function key word it will allocate some memory for them even if their value is unknown to them : Hoisting
//Variables are partially hoisted where as functions are fully hoisted

(function sing(){
    console.log('ohh la la')
})

//in the above case the function is inside the brackets that and when called it will through referenceerror as javascript will the see the brackets instead of the function during the hoisting
//Hoisting will only happen for var and function keyword
//in case of new es6 syntax const and let doesn't get hoisted it will through reference error. 
console.log('---1')
console.log(teddy) //this will result in Reference error as we can not use a let or const variable before declaring them
console.log(sing()) //this will print 'off la la'
let teddy='bear'
//function declaration
function sing(){
    console.log('ohh la la')
}

//function expression
var sing2= function(){
    console.log('uhh la la')
}

//hoisting doest put the var or functions on top of our code, it just allocates memory for them
//in case of function expression as it starts with var keyword it is partially hoisted and result in undefined

//Global execution context
//We have Global object and this with hoisting

var one = 1;
var one = 2;

console.log(one) ////javascript always prefers the last line of the scode
//whenever javascript sees same var tpy with same variable name it will just ingonre them
//which will resulted in undefined
a()
function a(){
    console.log('hi')
}


function a(){
    console.log('bye')
}
a() //it doesn't matter where we call the function

//in the ablove case when function is hoisted we have the first value but when js sees the same function again it will simply replace the value of the function

var favouriteFood = 'grapes'

var foodThoughts = function(){
    console.log('Original food is: '+ favouriteFood)
}

var favouriteFood = 'sushi'
console.log('new favourite food :'+ favouriteFood)

foodThoughts()

//it will result im Original food is undefined
//New fabourite food is sushi

//hoisting is confusing , we should avoid the use of it,
//we can prevent that by using const and let