//Imperative:
//A computer is better at being imperative, which means it needs to how to do thing

//Declarative:
//Humans are more declarative, If we ask for some water to a friend, we don't need to tell the friend how to get the water as the person already knows the way to get it.

//Machine Code is very imperative, 
//Programming language is declarative.: We don't have to say, Hey, This where you should store the memory.We just declare variable with some sort of data and we say we need to get it done.


//Another example Imeperative Vs Declarative is,
//The idea if for loop

for (let i=0; 1<10; i++){
console.log(i)    //here we are saying declare a variable with zero value, loop for ten times while increament the value of the variable, and log i, 
}

//To make this above code more declarative
//we have an array of 3 items , we are saying for each item in the array console lo each item, This way it is more declarative
[1, 2, 3].forEach(item =>{
    console.log(item)
})

//jQuery is a lot more imperative than what we have now on the front end frameworks like React and Angular

//Functional programming helps us to be more declarative by using functions and composing functions we tell our programs what to do, instead of how to do
//Declarative code is always going to end up either compiling down or being processed by something imperative like machine code
//At the end of the day we can't avoid side effects and manupulations