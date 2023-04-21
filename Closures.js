//Clouser: Closure is simply that a combination of function and the lexical environment from which it was declareed
//Clousers allow a function to access variables from an enclosing scope or environment, even after it leaves the scope in which it was declared.

function a(){
    let grandpa = 'grnadpaa'
    return function b(){
        let father = 'father'
        return function c(){
            let son = 'son'
            return  `${grandpa}  >  ${father}  >  ${son}`
        }
    }
}

a() // function b
a()() //function c
a()()() //grandpa > father > son

//As the above function is a higher order function, it returns another function. So when a gets execute it gets popped of the stack and the variables declared in it, same happens for function
//b and when function gets executed it can access those variables declared inside the functions that were popped off.
//c was able to access those variables because of closures

//In higher order functions if a functions gets executed the variables inside the lexical scope of that function stays in closuers (something like memory heap) as the reurning functions might referring those variables

//So when c gets executed it will look for those variables inside the variable env then it will look into the closures. and finds the variables that were collected from the executed functions

//The javascript engine will make sure that the function has access to all of the variables outside of the function, with this closure

//Because function c is inside function a and b , the JS engine will create a closure for c

//Those variables which aren't referenced by child function and is declared outside of child function, those variables will get garbage collected

//Closure also means Lexical scoping (Scoping is to what variables we have access to)

//By the above definition that means the JS engine before we run our code, before we get to line 12 or 13, it already knows which function has access to which variables because JS is lexically scoped

const boo = (string) => (name) => (name2) => console.log(`${string}  ${name}  ${name2}`)

boo('hi') //function
boo('hi')('tim') //function
boo ('hi')('tim')('david') //hi tim david

//Parameters are also treatd as local variables that gets stored in variable envs.

const boostring = boo('hi')

//5 years

const booStringName = boostring() //as we assigned the functionality of boo('hi), JS engine will remember the hi even after 5 years

//Exercide:

//As soon as JS engine sees the setTimeOut keyword, it will send that to the web apis and after 4 secs it will add the function inside call back que when the call back que is empty

//Beacuse of closures the function inside setTimeOut was able to access callme variable

function callMeMayBe (){
    const callme = 'Hi ! I am now here'
    setTimeout(function(){
        console.log(callme)
    },4000)
}


//It doesn't matter where we declare our variables, or it is getting hoisted or not, when the setTimeOut gets back from web API and put back to call back que by that time we already ran the 
//  const callme = 'Hi ! I am now here' line of code, and call me has already been created and assigned. and because it sees that there's an enclosing function that is using it, it is going to create a closure

function callMeMayBe (){
    
    setTimeout(function(){
        console.log(callme)
    },4000)
    const callme = 'Hi ! I am now here'
}