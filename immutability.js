//immutability
//It means not chainging the data, state. In OOP we had classes , in which we can change name property, weapon property of th characters that we are building
//IN FP the idea is immutability, that us not changing the state but instead making copies of the state and returning a new state every time.

const obj = {name:'John'}
function clone(obj){
    //here we are not changing the global data we are just creating a copy of it, and no matter how many times we clone it it will return the same output
    return {...obj} //this is pure
}


//And if we change the name of the object, we are mutating the state, mutating the data in our program. In FP the idea of immutability is very important
//We can change things inside of our program, but we don't want to affect the outside world in our program
obj.name='jack'

//if we need to change the name of the object, we can have another function which will return only a copy of the object with an updated name
//by doing this we are not changing the name in the global object, the thing outside our world

function updatedname (obj){
    const obj2 = clone(obj);
    obj2.name = 'Jack'
    return obj2
}
//here we have maintained immutability of not changing the state, just returning copies or new things when a change is made
const updatedObj = updatedname(obj)
console.log(obj, updatedObj) //{name:'John'} {name: 'Jack'}

//If we talk about efficiency memory, as we are crating copies of the given data each time we run our function

//Structral Sharing: This is little bit beyond the scope of the course
//The idea behind is that when a new object or a new arry or any sort of structure is created, we don't actually copy everything.
//If it's a massibve object or an array, you can see that being very expensive

//Instead of storing the entire copy, underneath the hood, what happens is that only the changes that were amde to the state were copied
//But things that don't change, is still there in the memory

//In FP whenever we get some data, it says that hey this data is not mine, I will create a copy of this and execute my actions on the copied data and return the copied data
//so that others can use the actual data

