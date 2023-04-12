//We have to careful while using below functions in Javascript, If not used correctly they can make our code less optimized
//eval()
//arguments
//for in : Looping over objects
//with
//delete

//Hidden classes
//Inline caching

//Inline caching:

function finduser(user){
    return `found ${user.firstName} ${user.lastName}`
}

const userData = { 
  firstName:"Johnson" ,
  lastName: 'Junior'
}

console.log(finduser(userData))
//When a function is called over and over again the 
//Instead of looking at the object every time, finding the Key, it will inline cache the line
//return `found ${user.firstName} ${user.lastName}`
//It will not search firstName and lastName each time , it will just replace the line of code 
//with found Johnson Junior

//Hidden Classes
function Animal(x,y){
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2)
const obj2 = new Animal(5,7)

obj1.a = 30;
onj1.b = 45;
obj1.b =30;
obj2.a = 45;
//^^^
//this above lines of code will make the compiler slower because of hidden classes
//we should instanciate  our object propertiees  or in the same order as in it's class

//The key take away from this is we should write predictable code which should
//be understandable by human as well as machines

//Why not just use machine code from the beginning?
//If javascript were to be compiled, then either compilation has to be super fast  as javasript gets sent from the server to the browser
//So the compilation has to happen on the browser or the competing browsers
//like Chrome , Edge, Firefox has to agree upon some binary executable formats or standard that can understand the code.

//WebAssembly:
//It has the standard binary executable format , we wont be needing the compilers and interpreters in the future.
