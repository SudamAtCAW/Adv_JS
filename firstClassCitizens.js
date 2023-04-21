//Functions in JS are objects.

//Functions are first class citizens in JS

//1: Functions can be assigned to variables and properties of objects 

var func = function (){
    return 'Can be assigned'
}

const obj = {
    one : function(){
        return "can be assigned"
    }
}

//2: We can also pass functions as arguments into a function,

function a(fn){
    fn()
}
//in the above lines of code a is function which receives a function as a parameter

a(function(){console.log('hi there')}) //hi there

//3: We can return functions as a values from other functions.

function b(){
    return function c(){console.log('bye')}
}

b() //function c

b()() //Bye 

//or we can call the function and assign it to ta variable and call that variable

var func= b()

func()


//Extra Bits 

//We should be careful of initilizing functions inside of loops, 

for(let i=0; i<5; i++){
    function a(){
                                
    }
    a()   // As we are initilizing the function inside the loop it will be initilized five times and executed five times 
}

//Instead we can initilize the function outside of the loop and execute the function inside the loop

function a(){
                                
} //initilized the function outside, now it will be inilized only once

for(let i=0; i<5; i++){
    
    a()   // executed five times 
}

function a(){
    return param
}
a()  //If our function doest find the given variable in scope chain it will throw the reference error



function a(param){
    return param
} 
a() //now it will not through the reference error when when we add a parameter to a function, it adds it automatically to our variable environment, as if we just declared that variable
//We will get undefined error as we didn't assign any value to it

//We can provide a default value to the parameter while giving it

function a(param =7){ // with es6 we can provide a default parameter 
    return param
} 
a() //6