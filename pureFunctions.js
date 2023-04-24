//What are pur functions:
//A function has to return the same output, given the same input, and the function can not modify anything outside itself.

//no side effects
//input--->output

const array = [1, 2, 3]
function mutateArray (arr){
    arr.pop()
}
mutateArray(array); //undefined, as we didn't return anything in the function we got undefined.

//if we 
console.log(array) //[1,2] 

//This function has what we call is side effects
//Side effect means: does the function modify anything outside of intself?
//The above function mutates and modifies the array which lives outside of itself in the global object.

function mutateArray2(arr){
    arr.forEach(item =>{
        arr.push(1)
    })
}

//To find out what is happening here we have to go line by line to figure out how these functions are modifying the data. This global stateand that's one of the problems with having side effects is
//that we're using shared state , something like a global variable that can interact with anything and the order of the function calls matter and that can cause lot of bugs

//To make the side effect stop or to make the functions stop messing with our data, what we can do is to create a new state(array) or new data inside of this function, 

const array2 =[1, 2, 3]
function removelastitem(arr){
    //here we take the data from the given paramater(array) and stored it as a local variable, and our function will only modify the local variable
    //the Global data will stay as it is
    const newArray = [].concat(arr);
    //here we're not modifying anything outside of our scoped world right here, although we are doing pop.
    newArray.pop()
    return newArray
}

console.log(array2); //[1, 2, 3]
console.log(removelastitem(array2))  //[1, 2]

function multiplyBy2(arr){
  return arr.map(item => item*2)
}
console.log(multiplyBy2(array2))
console.log(array2) 
//by using these approach our function doesn't affect anything in the outside world

//

function a(){
    console.log('hi')
}
a()

//this is not a pure function, because console.log is window specific, we're using the browser to log something to the browser
//it's modifying something outside of itself when we call this.

//input --> output
function a(num1, num2){
    return num1 + num2
}

a(3, 4) //no matter how many times we runthis function, it will return 7

//Referential Transparency
//It means if we completely change this function to the number seven, will it affect any part of my program 

//Example

function b(num){
    return num*2
}

b(a(3,4)) //here function b will take the rsult of function a as a parameter
//output 7

//Referential transparency says if I change the result of function a to 7, will it have any effect on the program? 
//It doesn't effect.
//Because of this rule , no matter what my input, if they're(input) the same, it's always going to give me the same output.
//As a matter of fact these functions doesn't have side effetcs, they aren't touching any of the outside of the world. they are only touching their only parameters
//and parameters are local variables

//The biggect thing in functional programming, 
//The idea with pure functions is that it makes functions very easy to test, very easy to compose and  it avoids a lot of bugs because we have no mutations, no shared state
//we have the predictable state

//Can every function be a pure function?
//Every function should return something from it because when we give it an input, we expect an output
//Every function should be pure, which we've discussed about, aand that also menas having no shared state with other functions and immutable state, where we can modify some of the state
//within our function, but we always return whatever we getsuch as an input we always return a new copy of the input. we never just modify our global state

//We should make our function predictable

//Idempotent
//The idea of idempotent is a function that always returns or does what we expect it to do.

function notGood(num){
    return Math.random(num)
}

notGood(5)  //0.96738983228 

function notGood2(num){
    console.log(num)
}

notGood2(5) //it will always 5 , no matter how many times we run this function. it is idempotent
//even though it's not pure because it communicates with outside world

//When we delete a user from DB , we can delete that person once. But if we keep calling the function to delete that user, well it's going to return the same result
//it will return user not found always

//This idea of being able to call something 1000 times and always giving you the same results, is extremely valuable when it comes to things like parallel and distributed computation
//beacuse it makes our code predictable

Math.abs(Math.abs(-50)) //50 
//No matter what calling this function over and over, inside of itself always returns the same thing.
//with that in mind, we have the gurantee of code being predictable