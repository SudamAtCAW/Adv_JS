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

function calculate() {
    const sumTotal = 4+5;
    return sumTotal
}

console.log(calculate())