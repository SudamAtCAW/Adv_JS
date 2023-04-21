let view;
function initilize(){
    view = '🏞️';
    console.log('View has been set !')
}


//even the view has been set we initilized the function 3 times somehow, This shouldn't be happening

initilize()
initilize()
initilize() 
console.log(view)
//this will output
//view has been set
//view has been set
//view has been set
//🏞️
//Even after initilizing it for once, we are still letting it to initilize. 
//we have to write our code in such a way that it should not initilize if it has been initilized once

//Approach 1 : by keeping a count of how many times it has been called and if it has called once, no need to return anything, 
//we want to use closures to keep track of it but we also don't want people outside of this env touching it.

let view2;
function initilize(){
    //called will store the no of times the initilize is executed
    let called= 0;
    if (called > 0){
        //if called is greater than zero, means initilize has already been called once it won't return anything
        return;
    } else{
        //otherwise everything will run as normal
        view = '🏞️';
        //after executing it once we have to increase called to 1, so that next time when we again call initilize, in the if condition it will fail
        called++;
        console.log('View has been set !')
    }
   
}

const startOnce = initilize()

startOnce()
startOnce()
startOnce()

//output 
//view has been set !
//🏞️

//Exercise 3

const array = [1, 2, 3, 4];

for(var i=0; i<array.length; i++){           
    setTimeout(function(){
        console.log('I am at index '+ i)
    },3000)
}

//output
//I am at index 4
//I am at index 4
//I am at index 4
//I am at index 4


//Solution 1:
for(let i=0; i<array.length; i++){
    setTimeout(function(){
        console.log('I am at index '+ array[i])
    },3000)
}
//when we changed the var to let, let allows us to use block scoping, so that this block which is these curly brackets over here, creates a scope for each i, so that each i is scoped with in here.
//reason: Initially when we had a variable i over here, it was part of the global scope. Because we didn't have a function sorrounding it, so that this set timeout when 
//it finally returned by that point, the for loop has already gone and through everything and has turned i into 4. 
//output
//I am at index 1
//I am at index 2
//I am at index 3
//I am at index 4

//Solution 2: Using IIFE, to wrap the code inside a function and reference i as long as we need it

for(let i=0; i<array.length; i++){
    //by keeping the function inside a bracket, it will have it's own private data
    (function (closureI){
        setTimeout(function(){
            console.log('I am at index '+ array[closureI])
        },3000)
        //(i) means calling the function immediately with the parameter i
    })(i)
}