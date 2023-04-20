//Call() apply() bind()

function a(){
    console.log('hi')
}

a() 
a.call() //both lines of code does the same thing , when we execute an method it simply means calling it
a.apply() //also does the same thing

const wizard = {
    name: 'Gandalf',
    health: 100,
    heal(){
        return this.health = 100;
    }
}
//the wizard have a healing methid , if archer can borrow that , it would be nice
const hobbit = {
    name: 'Froddo',
    health: 30
}

console.log('1', hobbit) //health 30
wizard.heal.call(hobbit)
console.log('2', hobbit) //health 100

//the call function can also take parameters

const wizard2 = {
    name: 'Gandalf',
    health: 100,
    heal(num1, num2){
        return this.health = num1 + num2;
    }
}
//the wizard have a healing methid , if archer can borrow that , it would be nice
const hobbit2 = {
    name: 'Froddo',
    health: 30
}

console.log('1', hobbit2) //health 30
wizard2.heal.call(hobbit2, 50 , 30)
console.log('2', hobbit2) //110

//in case of apply it does the sme thing, just it takes an array of parameters, and call just taeks parameters
wizard2.heal.apply(hobbit2,[50, 30])

//Bind  unlike call and apply that immediately runs a function, Bind returns a new function with a context and parameters
//Bind is used when we want a function to be called later on with a certain type of context

const healHobbit = wizard2.heal.bind(hobbit2, 100, 30)  //output //30
console.log(healHobbit) // output 130


//Bind allows us to store the this keyword or this function borrowing for later use

//Bind is like a band aid to fix this idea of dynamically scoped this keyword that ruins our entire lexical scope

//call and apply are useful for borrowing methods from an object
//Bind is useful for us to call functions later on with a certain context or certain this keyword