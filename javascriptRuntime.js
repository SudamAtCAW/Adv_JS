// As javascript is a single threaded programming language, it has only one stack and one heap.
//hence if any other program or function wants to execute something, it has to wait until the previus program 
//or function is completely executed

//if we do anything that takes really really long time, that will 
//slow our program

//In this case the web browser is working in the background , while the synchronous javascript code 
//is running, and it's using something called web  API or the web browser API to communicate and let
//the JS engine know "Hey, I'm back with some data, some work that you told me to do in the
//background "

//Web APIs
//Each browser has their javscript engine and have a javascript runtime that provide a web API
//these web APIS can do a variety of things like send HTTP requests, listen to DOM events
//dealay execution using something like setTimeOut
//It can also be used for caching and databases storage

//The browser has this window object which has many APIs
//it has some thing called index DB which lets us store data in the browser 
//setInterval
//setTimeOur
//There are the thing provided by the browser , so the browsers are helping us 
//to create rich web applications , so that uer's aren't just
//waiting for javascrpt to be executed

//Asynchronous
//these web Apis are asynchronous, that means we can instruct these APIs to do something in the
//background and return data once it's done 
//Meanwhile we can just continue working on our jaascript call stack execute functions

//when ever in call stack something like setTimeout() comes it is taken care by the web API as it is not part of call stack
//it gets executed in the background while the call stack keeps on execute the functions
//when the web is has done it's work it will send the response to the call back loop 
//present in the event loop

//When ever the call stack is free, the event loop will add it into the call stack


console.log('1')
setTimeout( () =>{ //this will be moved away from the call stack as this is web API
    console.log('2'), 1000
})
console.log('3')

// //the event loop only runs when the call stack is empty and all the 
// //javascript file hs been read

// //no matter how fast the web api responds as the console.log('2') to the call back queue, the event loop
// //won't start putting anything into the call stack until the call stack is empty and we ran through the file atleast once
console.log('1')
setTimeout( () =>{ //this will be moved away from the call stack as this is web API
    console.log('2'),0
})
console.log('3')

//now matter how fast the set time out happens it gets sent to the web API then to call back queue
//then event loop will add it to the call stack when it is 
//free
console.log('1')
setTimeout( () =>{ //this will be moved away from the call stack as this is web API
    console.log('2'),1000
})
setTimeout( ()=>{
    console.log('3'),2000
})
console.log('4')

//in the above case 2 will printed before 3