//Higher Order Functios
//it takes one or more functions as arguments or returns a function as result , often called a callback
//here it is returning a function as a result
const hof = () =>() => 5;
hof() //function
hof()() //5
//here it is taking a funtion as a parameter
const hof2 = (fn) => fn(5);
hof(function a(x){return x}) //5n

//closures:
//In JS closures are some sort of mechanism for containing some sort of state and in JS we create a closure whenever a function access a variable defined outside of the immediate function
//scope, that is cope of the parent
//We simply define a function inside another function and expose the inner function either by returning it or passing it to another function , so that we can use that variable
const closure = function(){
    let count = 0;
    return function increament(){
        //here we ar calling the count variable which is outside of increament() scope , in parent function scope
     count++
     return count
    }
} 
//This increament function is touching state or data that belongs to another function, the closure function

const increamentFn = closure()
increamentFn() //1 


//In Fp we can use closures but we have to be careful that closures only make a function impure, if we modified the closed over variable
const closure2 = function(){
    let count = 555;
    return function getCounter(){
        //here we ar calling the count variable which is outside of increament() scope , in parent function scope
     return count
    }
} 

const getCounter = closure2()
getCounter() //555
//Here although we're not modifying the state like we had before, we still have access to data outside of ourself
//but also as long as we don't modify it and mutate data, we're still following the FP
