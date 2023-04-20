//This is the object that the function is a  property of
this

//when global execution context starts we get this and Global object in this case window is the Global object

function a(){
    console.log(this)
}

a() //output Window,  window as the function a() is the object of window(Global) 
window.a() //is also same

function b(){
    'use strict'
    console.log(this)
}
b()// this will output undefined as 'use strict' helps us in avoiding the mistakes

const obj = {
    name: 'Billy',
    sing: function(){
        return 'lalal',+ this.name //here  it is pointing to name property of object same as obj.name
    },
    singAgain(){
        // return 'lalala '+ this.name+" !" // here we are just copyinhg and pasting code, the better approach to do this is
        return this.sing()+ '!'; //DRY :Do not repeat yourself
    }
}

obj.sing() //lalala Billy, what ever to the left is the object to which this is pointing

//Methods are functions that are inside an object,


//In the above case this gives access to sing function to use it's properties
//we can execute the same code for multiple objects

function importantPerson(){
    console.log(this.name)
}

const name = 'Sunny'
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}

const obj2 ={
    name : 'jacob',
    importantPerson: importantPerson
}

importantPerson() // here this is refering to window or Global object output will be Sunny as name is the propert of window object

//the method importantPerson() method refers to this.name, by this we can execute the same importantPerson function for both obj1 and obj2

obj1.importantPerson() //Cassy
obj2.importantPerson() //Jacob

//we can refer this as who called me
