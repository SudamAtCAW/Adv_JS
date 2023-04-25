//Promises
//A promise is an object that may produce a single value some time in the future.
// a promise may be in one of three possibel states: Fulfilled, Rejected, Pending

//Before promises we had call backs which means when some thing is done execute this piece of code
//Example: We text one of our friend , to know in when he is going to home. When our fried gets time , he calls us back and says i will be going to home next week.

//Callback pyramid of doom, where we have functions nested inside functions, If the outer functions gets executed , the next inner function will execute
movePlayer(100, 'Left', function(){
    movePlayer(400, 'Left',function(){
        movePlayer('10', 'Right', function(){
            movePlayer(330, 'Right', function(){

            })
        })
    })
})
//A more realastic Example
//We have this grab tweets functions that the firat parameter has the url(for now the we just pass twitter and the twitter handle) in URL, and then call back function
//After we grab the tweets which has an error and tweets, and if there is any error we through an error, so that just creates an error in JS, Otherwise we will display the tweets
grabTweets('twitter/sudamCharan',(error,sudamTweets) =>{
    if(error){
        throw error
    }
    displaytweets(sudamTweets)
//Let's do an Elon musk this time and again , there we're going to throw error, otherwise we're going to throw erre otherwise we will tweets of elon
grabTweets('twitter/elonMusk',(error, elonTweets) =>{
    if(error){
        throw error
    }
    displaytweets(elonTweets)
    //this is also the same, just the tweets will be from kangna
    grabTweets('twitter/kangnaRanawat',(error, kangnaTweets) =>{
        if(error){
            throw error
        }
        displaytweets(kangnaTweets)
    })
})
})

//The issue with the above code is we are just doing the same thing with repeation of code

movePlayer(100, 'Left', function(){
    movePlayer(400, 'Left',function(){
        movePlayer('10', 'Right', function(){
            movePlayer(330, 'Right', function(){

            })
        })
    })
})

//The promises way

movePlayer(100, 'left')
.then(() =>movePlayer(400, 'left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Right'))

//Our very first promise
const promise = new Promise((resolve, reject) =>{
    //if our condition is true the resolve part will be executed
    if(true){
        resolve('Stuff worked')
        //otherwise the reject part will be executed
    } else{
        reject('Error, it broke')
    }
})

//to call our promise, here , the code after .then will only execute when the promise will be executed, 
//the result will contain the output of the promise
promise.then(result => console.log(result)) //Stuff worked

//Lets chain our promise
promise
 .then(result =>result + '!')
 .then(result2 =>{
    throw Error
    console.log(result2)
 })
 .catch(() => console.log('error !'))

 //With promises we can catch errors by doing .catch and it will catch any error that the promise may have
 //If we move the throw Error to the first .then section, it will show the same error
 //So .catch , catches ant error may happen between the chains
 promise
 .then(result =>result + '!')
 .then(result2 =>result2 +'?')
 .catch(() => console.log('error !'))
 .then( result3 =>{
    console.log(result3 + '!')
 })   //output: Stuff worked!?! , so catch only runs if something fails in between


 promise
 .then(result =>result + '!')
 .then(result2 =>result2 +'?')
 //.catch block is in this section
 .catch(() => console.log('error !'))
 .then( result3 =>{
    console.log(result3 + '!')
    //and the error is coming from this section
    throw Error
 })  //output: Uncaught (in promise) ƒ Error() { [native code] }
 //We got an error within our console because we did throw an error, but the catch statement never runs
 //So where we put the catch statement is going to check and run , if anything before it fails

 //This example will show some real power of Promises

 const promise1 = new Promise((resolve, reject) =>{
    //if our condition is true the resolve part will be executed
    if(true){
        resolve('Stuff worked')
        //otherwise the reject part will be executed
    } else{
        reject('Error, it broke')
    }
})


 const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 100, 'POOKIE')
})

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 'Hiii')
})

const promise4 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 5000, 'Is it me you are looking for')
})

Promise.all([promise1, promise2, promise3, promise4])
.then(values =>{
    console.log(values);
}) //Output: ['Stuff worked', 'POOKIE', 'Hiii', 'Is it me you are looking for']

//This will print the output after 5 seconds, even if some of the promises returned sooner, it will only return them when all of them are executed

//When we run  this part of the code again, we will get the result instantaneously, as we had ran it once and it remembers the value of it
//by this we don't have to execute the long running tasks again and again
Promise.all([promise1, promise2, promise3, promise4])
.then(values =>{
    console.log(values);
})


//real world promise example
//in this case the user might want to get some data from the database with user,posts and album
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//now our promise

Promise.all(urls.map(url =>{
    return fetch(url).then(resp => resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
})

//while we ran this piece of code , the fetch wasn't working in the browser console.
//worked fine in the terminal by using node Promises.js
//tried with this 
const urls3 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//now our promise

Promise.all(urls3.map(url =>{
    return fetch(url).then(resp => resp.json())
})).then(results =>{
    console.log(results)
   
})

//lets check what happens if some error is there in our program

const urls2 = [
    'https://jsonplaceholde.typicode.com/uusers',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls2.map(url =>{
    return fetch(url).then(resp => resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch( () =>console.log('error')) //error, as we mis spelled one off the error

//Now we want to show the user a meaning ful message which will explain the why the error has caused
//We will simply show the rejected section
//The fetch returns a promise and by adding a .then we are answering to whatever the promise returns with, whether it's result or reject we get to manupulate the data
//So at their most basic promises ara a bit like event listeners, except a promise can only sucseed or failed once, it can not succeed or failed twice
//This is extremely useful for things that are asynhronous success and failure, such as API calls
//Because we are less interested in the exact time something became available and more interested in reacting to the outcome
//So we are reacting to something that happens asynchronously


//----------------->
//A promise is an object that may produce a single value sometime in the future, either resolved or a reason that it's not resolved(rejected)



