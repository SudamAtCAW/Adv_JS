//Arguments looks like an array but it not an array
//With new javascript they introduced few tools that we might use them on arguments

//(...) <- This is a spread operator : The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

function marry(person1, person2){
    console.log(`arguments `, arguments) // this will return an object arguments  [Arguments] { '0': 'Tim', '1': 'Tina' }
    console.log(Array.from(arguments)) //[ 'Tim', 'Tina' ]
    return `${person1} is now married to ${person2}`
}

console.log(marry('Tim', 'Tina'))

function marry2(...args){ //here arguments can not be used as it is a keyword
    console.log(`arguments `, args) //now args is the same as arguments 
    console.log(Array.from(arguments)) 
    return `${args[0]} is now married to ${args[1]}` //now we can access the values from args array by using the index number
}

console.log(marry2('Tim', 'Tina'))

function india(){
  //even if we don't pass any arguments we can still use the arguments object as in execution context we get this and arguments even if we don't pass any paramenters
    console.log(arguments) // This will return {} 
    console.log('warm')
}


//In Modern javascript it is advised not to use arguments

