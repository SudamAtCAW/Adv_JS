//Memorization:
//In order to understand how dynamic programming works, we need to understand what caching menas.
//Caching is a way to store values so you can use them later on.

//We can think of caching something like a backpack. When we need something like sharpener/ pencil, we have a small box in our bag that holds those items. So that when we are in school we can reuse them
//fast over and over

//Caching is just a way to speed up programs and hold some piece of data in an easily accessible box.
//Memorization is a specific form of caching that we're going to discuss. Because it has been used a lot in dynamic programming.

function addto80(n){
    return n + 80
}

//If we call this function for the second time, We will have to go through this n+80 step again to show the answer, we have ran the calculation 3 times
addto80(5) //5
addto80(5)
addto80(5)

//In the above function it just took less than a second to return the result, Think of the scenario when we have complex functions which takes a long time to return the result.
//We will have to wait for a long time , for each call to the function

//this is where caching come's into play

//We will create a new object cache , that's going to hold an empty object.
let cache = {};
function memoizedAddTo80(n){
    //first we will check whether n is existing or not in the cache object. if true then we will return the existing value of n
    if(n in cache){
        return cache[n]
        //if we are running the function for the first time, then we are going to cache the property n (passed parameter) to have a value of passed parameter + 80
        //and return the value 
    } else {
        return cache[n] = n + 80
    }
}

memoizedAddTo80(7)
//So, when ever we run the same function, we will check whether the property 7 in the cache object is existing or not, if yes then will return the value of property 7. Only
//the if block will be executed as the condition in it will be true on running for the second time 
memoizedAddTo80(7)

//Let's improve this function a little bit.
//Ideally we don't want to fill the cache in what we call the global scope. That is living outside of this function. Ideally it's good to have memory or in this case, the cache to live inside
//of this function, Not polluting the global scope


//The issue with having the cache object inside the memoization function is it get's reset everytime the function gets called, So the cache becomes an empty object
//In JS we can use closures to solve this. So by using closures we can return another function inside memoization function, in there we will pass the parameter n , 
//and we will move all our logic inside the child function

function memoizedAddTo802(){
    //as the child function is taking n as aparameter, we can remove n from memoizedAddTo802(n) , because the child function will require the n  while executing and at time we can provide
    //the parameter ther, just to avoid complexity
    //Now we creted the cache object inside our function, so when ever it gets called it won't  pollute the global scope
    let cache = {};
 return function(n){
 //And because of closures, now we can access cache object from the inside of the child function
    if(n in cache){
        return cache[n]
    } else {
        console.log('Long time')
         cache[n] = n + 80
         return cache[n]
    }
 }
    
}

//This function remembers that the parameter has not changed, it's the same parameter and it's going to check the cache and say, I don't need to do all that
//calculation, I already have the value, here you go, just using a hash table here it is.
//Hash Table
//A Hash table is a data structure that stores some information, and the information has basically two main components, i.e., key and value. The hash table can be 
//implemented with the help of an associative array. The efficiency of mapping depends upon the efficiency of the hash function used for mapping
const memoized = memoizedAddTo802()
memoized(80)

//What we have learned here is very powerful, because it allows us to be very efficient with our code.
//Dynamic programming uses memoization to optimize our code