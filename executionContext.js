function ptrintName(){
    console.log('Sudam charan')
}

function findname(){
    return printname()
}

function sayMyName(){
 return findname()
}

sayMyName()

//Whenever javascript reads a function or (), it will create an execution context
//for sayMyname and will add it on to the stack, 
//It will create another execution context when it reads findName()
//It will do the same for printName, whcih will return a string
//now findname will return printName result and then 
//sayMyName will return findName result

//When we say a execution cntext Java script is creating a global execution context
//Global execution context gives us 2 things
// 1.Global Object 2.This
//The javascript engine creates 2 objects Global object and This whch are equal 
//to one another

//When we are using node the the global object will be Global instead of window

//What ever variables/functions or objects that we create will be a part of window

//when we run our code in javascript engine a global execution context is created and 
//when we run a function a function execution execution context is created