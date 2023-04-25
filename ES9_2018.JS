const animals= {
    tiger: 23,
    lion : 19,
    rhino: 45,
    eagle: 5
}
//Here we assigned the rest of the properties of anima
const {tiger, ...rest} = animals
//tiger :23
//rest: lioon: 19, rhino: 45
//ES6

const array = [1, 2, 3, 4, 5]

function sum(a, b, c, d, e){
    return a + b + c + d+ e
}

//or

//Here we were able to spread the arraysover these parameters , so that it was the same thing as doing  sum(1, 2, 3, 4, 5)
sum (...array); //15

//And this feature of object spread operator just means we're able to do with an object as well

function objectSpread(p1, p2, p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

//const {tiger, lion , ...rest} = animals //this line shows error in IDe, runs fine in console
objectSpread(tiger,lion, rest)  
//outpt:
//23
//19
//{rhino: 45, eagle: 5}

//Finally
//As name suggests, it allows us to do something finally after a promise has finished
//And we addi it usually at the end 
//And this finally block will be called regardless of whether .then works for the promise errors and catches into an error
//So no matter what , after everything inside of a promise, finally it would be called whether it resolves or rejects and does something that we tell it to

const urls5 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//now our promise

Promise.all(urls5.map(url =>{
    return fetch(url).then(resp => resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
})
.catch(err => console.log('grhhhh fix this '+ err))
.finally(data => console.log('extra ', data))

//Output:
//grhhhh fix this TypeError: Failed to fetch <---executed error block
//extra  undefined <---- executed finally block , here it says undefined as it didn't receive any parameter
//Finally block always gets execute no matter what happens with resolve and reject. or catch block
//Finally is great for those times that we need to run a piece of code no matter what a promise returns

//for await of
//It allows us to loop through our async, await calls if we have multiple of them
//Just like we were able to using the for of loop
//Similarly now we are able to iterate over the await promises that we're going to have

//for of exapmle
const urls6 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const loopThroughUrls = urls => {
    //here urls6 is the object and url is the index for passing each url for consolelog
    for(url of urls){
        console.log(url)
    }
}

loopThroughUrls()


//get data to

const urls7 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getDataOf =  async function(){
    //an array of promises is iterable and able to be looped by a await keyword, and it will return the fetch URL
    //so here all we are doing is creatting is an array of promises of each one of these requests
    const arrayOfPromises = urls7.map(url => fetch(url))
    //we can use for await of to loop through these promises
    //Here we used for await to loop over arrayOfPromises
    for await(let request of arrayOfPromises){
        //so here arrayOfpromises will have the fetch result of the urls and those results will be passed by request paraeter
        //storing the json value of each request in data
        //below line is also a promise
        const data = await request.json()
        console.log(data)
    }
}

getDataOf()
