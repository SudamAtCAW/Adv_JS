var x = 'x' //Global Variable


function findname(){
    var b= 'b'
    console.log(scrollX)
    return printname()
}

function ptrintName(){
    var c = 'c'
    return 'Sudam charan'
}

function sayMyName(){
    var a= 'a'
 return findname()
}
sayMyName()

//Each of the functions has access to the Global scope

//Each of the functions have their own variable environment whcih has the access to the local variables
//A scope chain gives links and give aceess to the variables that are in our parent in the above case it is Global Environment
//If a value of a variable is not found in the variable environment, by using scope chain it will look for the same value in the parents

//In java script our lexical scope (available data + variables where the function is defined) determines our available variables. Not where the function is called(dynamic scope)

//This idea of lexical scope , which is also called static scope in a language , means that only by looking at the source code we can determine which environment the variables and data are available in
//The javascript compiler also does the same, it looks at the code and attaches all these scope chains before it even runs

//The scope chain starts where the variables is defined and goes all the way down to the global context to see if the variables exist
//A scope simply means where the variable is in the code

function sayMyNamw(){
    var a= a;
    return function findName(){
        var b = 'b'
        console.log(c)
        return function printName(){
            var c = 'c';
            return 'Andrei Neagoe'
        }
    }
}

sayMyName() //this will return findname

sayMyName()() //this will return printName

sayMyName()()() //Andrei Negaoe

//Function Lexical Environment

//The scope chain will look like printName()-> findName() -> sayMyName()

//By this print name has access to c,b, a 
//findname has access to b,a 
//sayMyName has access to only a

//A child function can have the acces to the parent functions variables but parent functions can not have the acces to the child functions Variables

//Scope defines the accessibility of veriables and functions in the code, it says which of the variables can be accesssed by us.

//Undefined is a type in javascript, it means javascript has the variable but it doesn't have the vaalue of it
//While reference error is that variable is completely undeclared

//eval() and with statement has issues with scope.
//with eval() and with we can change how scope chain actually works internally in javascript, 
//As we have lexical scope which controls the scope chain, by using eval and with it will create issues

//Leakage of Global variables

function weird(){
    height = 50;
    return 50;   //This will output 50
}

//in the above code height is not declared with var, const, let keyword, javascript will look for height in the Global object if it doesn't find it will assign the value to iy
//To prevent this from happening use 'use strict' on top of your code, it helps us avoiding the pitfalls

var heyhey = function doodle(){
    doodle()  //heyhey
    return 'heyhey'
    
}

heyhey() //heyhey

doodle() //it will through reference error as it is only accessible inside heyhey()