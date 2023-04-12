//The javascript engine does a lot of work ,  But there 2 most important steps that Javascript engine does
//1. To store and write informations i.e to store our variables and objects or data of our apps
//2.And a place to run and keep track of whats happening line by line on our code

//We use Call stack and memory heap for these two important purposes
//Memory heap is used to store and write information
//Call stanck is used to run and keep track of where our code is in execution

const number =  610; //allocate memory for number
const string = 'some text'  //allocate memory for a string

const human = { //allocate memory for human and it's values
 first: 'Sudam',
 last: 'Charan'
}

//there is no order in memory

//Call Stack

function subtractTwo(num){
return  num-2
}

function calculate() {
    const sumTotal = 4+5;
    return  subtractTwo(sumTotal)
}

console.log(calculate())

//The call stack stores functions and variables as our code executes 
//at each entry state of the stack also called the stack frame allows us to know where we are in the code
//It runs in first in and last out mode
//when ever a functions is executing it will be in the call stack
//once it is executed, it will be removed from the call stack

//We use memory heap to point different variables, objects that we store
//these work in most of the programming languages

//as  javasript engines have different implementations , where varibales are allocated is not 100 same all the time
//simple varibles can be stored in stack
//Objects and complex data structures can be stored in memoryheap