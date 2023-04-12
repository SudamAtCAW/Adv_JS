//Interpreter
//We translate and read a file line by line, Interpreter gives instructions to our computer

//Compilers
//It understands what we wanna do and takes our language and changes it to something else
//All languages has to be interpreted and compiled.
//There are two ways to run a Java script. 1.Interpreter 1.Compiler

// Babel is a  compiler that takes your modern JS code and returns  browser compatible JS (older JS code).
// Typescript is a superset of Javascript that compiles down to Javascript.

function someCalculation(x,y){
    return x+y
}

for (let i = 0; i < 1000; i++) {
   console.log(someCalculation(6,8))
}

//Interpreter is prefered over Compiler as Interpreter doesn't need it to change it into another language
//Interpretes gets slow when one line of code is ran again and again it gets slower

//Compiler in this case is faster, as it already have looped over the code for once and 
//whenever it reads the same line of code again, instead of executing, it just replaces the output of that line of code
//Because the compiler doesn't need to repeat the translation for 
//each pass through in tht loop, the code generated from it is actually faster.
//These sort of edits done by the compiler is called optimiation

//Both Interpreter and Compiler have their pros and cons .
//In V8 engine the Interpreter is called Ignition and it spits Byte Code


//Profilers: also called Monitor
//It watches our code as it runs and makes note how we can optimize our code
//JIT COMPILER
//Just In Time compiler
//If the same lines of code are  runs for a  few times we actually pass some of 
//some of the code to JIT compiler
//Because as the code is running, The interpreter will say to JIT Compiler "Hey, Here is some code for you to optimize"
//Now the JIT copiler will take those lines of code and try to optimize them
//At that point Optimized code from JIT compiler is used instead of Byte Code from Interpreter
//In that way we are having both Interpreter and Compiler in V8 engine, By that the  execution speed of javascript code will increase
//In V8 engine Compiler is called as "Turbo Fan"