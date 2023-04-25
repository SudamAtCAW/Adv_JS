//Async Await are introduced in ES8 and built on top of promises

//Async function is a function that returns a promise, but the benifit of async await is that it makes code easier to read

movePlayer(100, 'left')
.then(() =>movePlayer(400, 'left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(330, 'Right'))

//with asunc await, it will look something like this

async function playerStart() {
    const firstMove = await movePlayer(100, 'left');
   const first =  await movePlayer(400, 'Left');
   const second =  await movePlayer(10, 'Right');
    await movePlayer(330, 'Left') 
}

//With the async word we let JS know, Hey, this is an async function and we declare it with the word function and the function name
//Now we can do anything we want inside of this function, but we have access to a new keyword(await) because we used the async word to define this function
//We have the await keyword, and this keyword says pause this function (await movePlayer(400, 'Left');) until I have something for you.,
//So we are awaiting for the response
//We can use this await keyword infront of any function that returns a promise which we know that movePlayer does, And when the promise is resolved, then the function moves to the
//next line and it awaits for the response of next function
//the good thing here is instead of chaining the functions we can assign each of the functions responses to a variable

//The fetch() function is a promise, so with the f

fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log(resp))

//Lets changes this function in async await

async function fetchUser(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
}

//to call the function

fetchUser() // array



//Lets have an promise example, and we will change them into async

const urls4 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//By doing Promise.all we are making sure that each of the prmises should give any response
Promise.all(urls4.map( url =>
    fetch(url).then(resp => resp.json())
)).then(array =>{
    console.log('users', array[0])
    console.log('posts', array[0])
    console.log('albums', array[0])
}).catch('oops');  //this will print each of the request's response in the cosole

//Async way, To do a promise.all like way
//this below line of code is from es6, It is called destructuring

const data = async function(){
    //here each of the array elements(users, posts, and albums will receive the response from their respictive fetch call)
const [users, posts, albums] = await Promise.all(urls4.map( url =>
    fetch(url).then(resp => resp.json())
))
console.log('users', users)
console.log('posts', posts)
console.log('albums', albums)
}
data() //exact same result as promise way
//In promise way we can catch of there are any errors

const urls5 = [
    'https://jsonplaceholde.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//Async way, To do a promise.all like way
//this below line of code is from es6, It is called destructuring
//In JS there this try catch method, where we need to place our code 
const data2 = async function(){
    //whenever we place some code inside try block, it will run automaatically
    try {
        const [users, posts, albums] = await Promise.all(urls5.map( url =>
            fetch(url).then(resp => resp.json())
        ))
        //try block comes with catch block, if error comes while executing our try block, it will automatically catch the error
        //catch block receives error as a parameter
    } catch (error) {
        console.log('oops', error)
    }

console.log('users', users)
console.log('posts', posts)
console.log('albums', albums)
}
data2() 
 //output:
 // oops TypeError: Failed to fetch
// at <anonymous>:14:13
// at Array.map (<anonymous>)
// at data2 (<anonymous>:13:64) 
// at <anonymous>:26:1