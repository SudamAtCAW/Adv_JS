//IIFE: Imediatelt Invoked Function Expression:
//By keeping the function inside the bracket's we are saying that it is a function expression not a function declaration, after we are done with the function we are immediately invoking the 
//function
(function (){
var a= 1
})(); // this will output undefined

// function(){}() //this will  through error as we can not call a function declaration immediately afterwards
//However in case of function expressions we can, as the functioon with in this IIFE is a function expression and it's not being assigned to any global variables , no global property is being created
//This allows us to attach private data right in there that can be accessed by the global execution, because the scope chain runs downwards
//An IIFE simply allows us to call imediately as javascript is executing 
(function (){
    var a= 1
    }())

    //here we have move the brackets inside and we are still following the rules of JS
//IIFE enables us to attach private data to a function and it creates a fresh environment for us so that we don't pollute our global execution context

//as we start to get more an d more javascript files, we want to make sure that we can wrap things in a fuction to scope things into their own envs and minimize the amount of data we place