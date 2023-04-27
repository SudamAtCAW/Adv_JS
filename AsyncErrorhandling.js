//In JS there is always asynchronous code

Promise.resolve('asyncFail')
.then(response =>{
    console.log(response) //this will return asyncFail
    return response //by doing this we are passing the response
})
.then(response =>{
    console.log(response) //this will return asyncFail
})

//With async Error
Promise.resolve('asyncFail')
.then(response =>{
    throw new Error('#1 Fail') //it fails silently, this error wont be catched, so the programmers will not have any clue about their async code being failing
    return response //by doing this we are passing the response
})
.then(response =>{
    console.log(response) //this will return asyncFail
})

//In order to catch the erros of async code, we must have a catch block

Promise.resolve('asyncFail')
.then(response =>{
    throw new Error('#1 Fail') 
    return response 
})
.then(response =>{
    console.log(response) //as we got an error before this line, it will never be executed
})
//this catch block just works like the try catch block
.catch(err =>{
    console.log(err) //this will catch the error from the async code
    //output: #1 fail
})  

.then( response =>{
    //it will have the error that it received from the catch block
    console.log(response.message) //as error was handled before this block , the block will be executed
})
//what ever code we have after the error is handled will be executed


//Another example

Promise.resolve('asyncFail')
.then(response =>{
    throw new Error('#1 Fail') 
    return response 
})
.then(response =>{
    console.log(response) 
})

.catch(err =>{
    //here we are throwing a new error
    throw new Error('#2')
   
})  
//this block will never execued, as Js will search for the catch block when an error is throw
.then( response =>{
    
    console.log(response.message) 
})

.catch( err =>{
    console.log('#3', err)
})


//In case of nested promises and erros

Promise.resolve('asyncFail')
   //There will be no error inside of this because it reads synchronous and returns five, which gets received
.then(response =>{
   Promise.resolve().then( () =>{
 
    throw new Error('#4 fail')
   })
   console.log(5) 
})
.then(response =>{ //it receives 5 as response
    console.log(response) //output 5, this shouldn't happen(any code shouldn't be executed until the error is handles)
})

.catch(err =>{
    //here we are throwing a new error
    throw new Error('#2')
   
})  
//this block will never execued, as Js will search for the catch block when an error is throw
.then( response =>{
    
    console.log(response.message) 
})

.catch( err =>{
    console.log('#3', err) //it will out put #3 error as we have thrown this error in the las t catch block
})


//In this example we will remove the middle catch block
Promise.resolve('asyncFail')
   //There will be no error inside of this because it reads synchronous and returns five, which gets received
.then(response =>{
   Promise.resolve().then( () =>{
 
    throw new Error('#4 fail')
   })
   console.log(5) 
})
.then(response =>{ //it receives 5 as response
    console.log(response) //output 5, this shouldn't happen(any code shouldn't be executed until the error is handles)
})

// .catch(err =>{
//     //here we are throwing a new error
//     throw new Error('#2')    //removed
// })  
//this block will never execued, as Js will search for the catch block when an error is throw
.then( response =>{
    
    console.log(response.message) 
})

.catch( err =>{
    console.log('#3', err) //it will out put #3 error as we have thrown this error in the las t catch block
})

//the error we get from the first promise will be printed out in the last catch block, because the error is still there as we had thrown in our program and 
//it keeps on going until the we find something catch the error

//when this is ran on node we will get the unhandledPromisereject error

//We should handle error for each promise

Promise.resolve('asyncFail')
   //There will be no error inside of this because it reads synchronous and returns five, which gets received
.then(response =>{
   Promise.resolve().then( () =>{
 
    throw new Error('#4 fail')
   }) .catch(console.log) //this will print the error received fromthe promise
   console.log(5) 
})
.then(response =>{ 
    console.log(response) 
})

.then( response =>{
    
    console.log(response) //this will output undefined, as we didn't returned any value fromthe last .then block
    console.log(response.message) //when we did this response.message, that was actually the error that was being thrown and being caughtby the #3 error
    //it gets tricky here
    //We have to under stand each flow and that on each level you're handling these with a .catch call, instead of having something like #3 error you're actually
    //logging out the error what is happening
})

.catch( err =>{
    console.log('#3', err) //even we handles the error of Promise block this will still be executed
})

//Lets fix this:

Promise.resolve('asyncFail')
   
.then(response =>{
   Promise.resolve().then( () =>{
 
    throw new Error('#4 fail')
   }) .catch(console.log) /
   console.log(5) 
})
.then(response =>{ 
    console.log(response) 
})

//removed the .then block from here

.catch( err =>{
    console.log('#3', err) //the #3 error will be actually logging out our error
})



//Error handiling im async Await
//Even though async await are asynchronous , we can handle the error by try catch
(async function(){
    try{
        await Promise.reject('oopsie')
    } catch (err){
console.log(err)
    }
    console.log('is this still good?')
})()

//So we're able to handle asynchronous code and rejections in similar ways that we've done with synchronous
//We can have nested try catch blocks also


//Extending errors
//We can extend the properties of error class and can use them
//in throwing meaningful errors while running our server

class authenticationError extends Error {
    constructor(message){
        this.name= 'authenticationError'
        this. severioty = 'high'
    }
}

const a = new authenticationError('oopsie') //authenticationError
a.severioty //high

//if we have a node server , we might not want to show the actual 
//error to the user with full stack trace