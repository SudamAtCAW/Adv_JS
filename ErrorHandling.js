//Error Constructos native function

Error //Capital letter means it's a constructor function, we can create new instances of error by 
new Error ('did not work')

//this instance of Error is not doing anything, just printing some message to the console
//In order to have an error we need to throw an error

//When we throw an error in our script, it stops executing or atleast stops executing if we're not handling this error somehow
throw new Error() //this will stop the execution of the program
//This throw statement used to define errors during runtime, when we run our JS, when a throw statement is encountered by Program, The execution of the current program stops and control will be passed
//to the next part of the call

//with throw we can throw strings, booleans, and Error constructor, or an instance of the error

//when a new error is created , we mainly have 3 properties
const myError = new Error('did not work')

//error name
myError.name 
//error message
myError.message
//Stack trece: A very important one
myError.stack //the out put will be string, it will just show where the error happened
//In this case it happend inside of an anyounimous function, which is the golbal execution context
function a(){

    const b = new Error('What')
    return b;
}

//When ever we will run 
a() // we will get a stack trace, which is global anonymous global execution context, then we have the a() which was called

//So it's actually shows us what is happening on our call stack
a().stack
//by this we can get to know where we were in the program when the error happened or it shows where we were when our callstack  when the error happen
//By this we can get to know what is responsible for that error, it's almost like seeing your history in action
//The SyntaxError will throw an error whenever there is a syntax error in our program
new SyntaxError ;
//new reference error
new ReferenceError//Throws the reference error
//It automatically throws and it has the throw keyword added upon it as soon as we have an error

//Sometimees we might want to catch the error instead of letting the execution of the program stop

//As soon as an error happens on the call stack, we go to the execution context and underneath us and and say is there a catch for US
//Is there something handling this error, if it doesn't find anything it will keep on going
//If no one is handling the error, we will be gettting this error insdie of the browser anf that gives us that in red text
//In nodeJs instead of oneerror(), we have the process on cart exeception, so the run time handles the error, if nothing in our program catched this

//If the exception always zoomss straight down to the bottom stack

//The power in the air, we will create these little bundlesand these little stops along the callStack to catch those exceptions
//Whe we caught the exception m we can do something interesting to address of the problem , so that our program doesn't start running
//instead we handle these errors, so that our program keeps running