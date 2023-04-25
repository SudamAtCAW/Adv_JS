//What is a program:
//A program has to do some simple things, It has to allocate memory, otherwise we douldn't be having, variables 
//it also has to parse and execute scripts, which means read and run commands
//The V8 engine has 2 parts 1.Memory Heap, and 2.Cal  Stack, And call is 
//In memory heap the memory allocation happens
//In call stack, this is where our code is read and executed. It tells us where we are in the program
const a = 1 //Js allocated memory for a
const b = 3
const c = 5
//here we have jsut created some global variables
//Memory leaks:
//In memory heap we have limited amount of space, so by increasing the number of variables , jsut imagine, instead of just numbers if we had some really big arrays
//Memory leaks happen when we have unused memory, such as if we aren't using the b variable, but it's still there, by having unused memory, it just fills up this memory heap
//Global variables are bad because if we don't get to clean up after using it, we fill up memory heap, and eventually the browser won't work.
const one = () =>{
    const two = () =>{
        console.log('4') 
    }
    two()  
}

one() //4
//So here what happened is, according to call stack, we 1st ran the one function , then fn 2 and then we logged 4
//Now that we have read 4 and printed in console, it will remove fun 2 than fn 1 from the call stack
//And the call stack is empty

//JS is a single threaded language that can be non blocking
//Single threaded:---------->
// one execution at a time, (call stack is first in last out)
//Runnning code with single thread can be quite easy, since you don't have to deal with complicated scenarios that arise in multi threaded envs
console.log('3')
console.log('4')
console.log('5')
//Synchoronous programming means the latter can't start before first finishes
//So  console.log('4') won't start until console.log('3') finishes and console.log('5') does't start until console.log('4') console.log('3') finishes

//Stackverflow is something, when  the call stack gets bigger and bigger until it just doesn't have enough space any more
//Stackoverflow Example

function foo(){
    foo()    //Recursion: When a function calls itself
}

//Non Blocking --------------->
//We don't wait around for things that take time.

//So JS is asynschronous when we can leave it a messsage and callback tells us , you have a message when you are too busy (while the callstack was't empty)