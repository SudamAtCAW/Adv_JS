//Function Currying
function multiply (a, b){
    return a*b
}

//Currying refers to only partially giving a function parameter

let multiplyByTwo = multiply.bind(this, 2) //will multiply the parameter with 2
let multiplyByTen = multiply.bind(this, 10)  //will multiply the parameter with 10
//the multyplyByTwo already has one of the parameters in it, if we run this function by passing the first parameter, it will return by multiplying the parameter with two
console.log(multiplyByTwo()) //function
console.log(multiplyByTwo(4)) //8

//here we aere able to reuse a piece of code , by giving it a partial parameter, and create these functions that are extensible

//Exercise:

var b = {
    name: 'Jay',
    say(){console.log(this)}
}

b.say() //this will out put { Jay amd say} as this is pointing to object b

var c = {
    name : 'Jay',
    say(){
        return function() {console.log(this)}
    }
}
c.say() //this will return window as if a method has a function inside of it , then this will bound to window, an unintended consiquence of JS
var d = {
    name : 'Jay',
    say() {return () =>{
        console.log(this)
    }}
}

d.say() //function
d.say()() // jay say , in this cases we used arrow functions and this keyword was lexically scoped inside of the arrow function, it doesn't care where it is called