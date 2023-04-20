5
true
'To be or not to be'
undefined
null
Symbol('Just me')
{}

//Primitive Types : It's a data that represents a single value
typeof 5 //number
typeof true //boolean
typeof 'To be or not to be' //string
typeof undefined //undefined , It is the absence of a definition, So it's used as default value when the javascript engine initilizes our variables
typeof null //object  null is the absence of value
typeof Symbol //symbol , Symbols are usually used for object properties so that the object's property is unique

//Non primitive Type : It doesn't contain the actual value directly
typeof {}  //object
typeof [] //arrary
typeof function(){} //function  

//Arrays and functions are objects, 

function a(){
    return 5;
}
//we can add properties of a function
a.hi = 'hihihi'
console.log(a.hi)  //hihihi

const obj = {
    a: 'Tom'
}

//The above object doesn't contain the value of a directly, Instead it has a reference similar to pointer to somewhere in memory that the object is held.

//Javascript builtin Objects: These are the standard buitin objects that comes with javascript

//Wraper Object
true.toString() // 'true'
//Here primitive type true is beahaving like an object by using dot notaion and doing toString
//JS silently creates a wrapper object arround true when we try to access a property on a primitive type

//So behind the scene it's almost like it's wrapping this boolean so it has access to toString and finally retuns true
Boolean(true).toString()
