function two (){
    var isValid;
}

function one(){
    var isValid= true; //Local Environment
    two()
}

var isValid = false//Global Environment
one()

//in the above case when it is executed the functions gets hoiseted allocating memory for them
//then global variable isValid gets hoisted assigning undefined

//During execution the first line that will get executed is line 10
//the value global isValid will be false
//Then another execution context will be created for function one()
//where there is  isvalid is there and whose value is true and it will be put in Local environment
//Now inside one() , two()  there
//so another execution context will be created , Now we are insdie function two()
//The isValid is undefined there

//So the value of a same valriable changes depending on the Global execution context, 
//Variable Environment describes which of the functions have the access to which variables it doesn't care what is the value of the same variable in Global execution cotext

//one() --true
//two() --undefined
//global --false

//In the above case each of these worlds carry information or variables and data that they have access to

//and when we are finished executing this first two() gets popped off then one(), In the end the global gets popped off

//A variable environment is a place where we store information, when we say store information, some of this information can be on the actual call stack or  thr execution context or it could be 
//reference to somewhere in the memory heap

//Each execution context has it's own variable environment context