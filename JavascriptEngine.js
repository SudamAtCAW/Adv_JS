//A javascipt engine is the translator between the js file and computer.Javascript engine reads the js file and converts it into Machine executable code
//There are over 800 javascript engines.
//V8 engine is written in C++,
//Brendon Eich is the creator of javascript engine for NetScape
//How the V8 works:
//1.Lexical Analysis whcih breaks the code into tokens 
//The tokens gets formed in a Abstract syntax treee(AST)
//To check the AST visit astexploreer.net
//After AST it goes thorough interpreter, profiler and Compiler than converting into byte code
//Regex: Regular expression .A regex is a string or text that lets you create patterns that help match, locate and Manage text.

function jsengine(code){
    console.log( code.split(/\s+/))
}

jsengine('var a =5') //output [ 'var', 'a', '=5' ]

//Is Javascript is an Interpreted language,
//Not technically. It dependes on the implementation