const promiseOne = new Promise((resolve, reject)=>
setTimeout(resolve,3000))
const promiseTwo = new Promise((ressolve, reject)=>
setTimeout(reject, 3000))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))

//When we run this Promise.all we will get uncaught error 
//Because Promise.all only resolves if all of the promises are resolved

//So inorder for us to have this work , we need a catch statement

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(err => console.log('failed', err))

//output: we will get failed error after 3 seconds
//because promise.all has to have all promises , resolved and not throw any errors

//promise.allSetteled() doesn't care about resolve and reject, unlike promised.all
//Promise.allSettled runs all promises regardless of whatever they reject or not
//it will only return when all of the prmises are resolved or rejected