//Function scope:
//Every time we create a function we create an execution context, which has it's own variable environment

//Block Scope
//Other programming languages has block scope

if(5>4){
    var secret = '12345'
}
//secret is accessible outside, as it is functionally scoped. we only create a new scope / a new env when there is a function
secret; //12345

function a(){
    var secret = '12345'
}

secret; // this will through reference error

//Other languages were able to block scope a variable, 
//after this const and let was introduced which are alternatives for

if (5>4){
    let secret = '12345'
}

secret; //reference error

//when we use function scope variables declared with var can be accessed out side of start and end of the curly brackets

//let and const are just block scoped alternatives for variable declaration


//Exercise:

function loop(){
    for (var i= 0; i< 5; i++){
        console.log(i)
    }
    console.log('final', i)  // output 0 1 2 3 4 final 5
}


function loop(){
    for (let i= 0; i< 5; i++){
        console.log(i)
    }
    console.log('final', i)  // output reference error as i can not be accessed outside of it's declared block
}

//Block scoping means declaring a variable not just inside a function, but around any curly brackets 

//In the way with var we have functional scope and with let and const we have block scoping


