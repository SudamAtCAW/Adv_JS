//Lexical environment is where we write something,

// function ptrintName(){
//     console.log('Sudam charan')
// }

// function findname(){
//     return printname()
// }

// function sayMyName(){
//  return findname()
// }

// sayMyName()

//lexical environment is created every time we create a execution context 
//which means executing a function

//when we say lexical analysis it means where the words were written and their 
//location that is what universe is a part of

function ptrintName(){
    console.log('Sudam charan')
}

function findname(){
    return printname()
}

function sayMyName(){
 return findname()
}

window.sayMyName()

//as all of the functions are part of global window.sayMyName() will also do the same work.


function ptrintName(){
    console.log('Sudam charan')
}

function findname(){
    function a(){

    }
    return printname()
}

function sayMyName(){
 return findname()
}

window.sayMyName()

//in the above case function a() is not a part of global object
//as it is inside lexical env of findName()

//In that way the compiler get to know where our code is and in which areas 
//it has access to


//in javascript whenever we have a function, it creats a new world for us inside of that function
//We are shot up into that planet every time we add it into the call stack

//Inside that planet we can do different things, have information inside them
//and they can communicate with eachother in different ways

//execution context tells us which lexical environment is currently running  

//In javascript our lexical scope(available data+variables where the function was defined)
//determines our available data variables.Not where the function is called(Dynamic Scope)