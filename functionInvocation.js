//function expression
var canada = function(){
    console.log('cold')
}

//function dclaration

function india(){
    console.log('warm')
}

//in global execution context we get this 

//in function invocation we get arguments

function marry(person1, person2){
    console.log(`arguments `, arguments) // this will return an object arguments  [Arguments] { '0': 'Tim', '1': 'Tina' }
    return `${person1} is now married to ${person2}`
}

console.log(marry('Tim', 'Tina'))

arguments //this will through error as arguments is not part of the global execution context