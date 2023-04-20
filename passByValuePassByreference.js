//Primitive types are imutable, It means we can't really change them inorder to change them we need to completely remove the primitive type

//Pass by Value
var a;
var b;
a = 5;
//Some where in memory var a is going to contain a reference to value 5
b = 10; //Same thing will happen 

//Both a and 5 don't really know eachother's existense

var a = 5 ; // now a has an address of where this primitive value five sits in memory and same happens with b
var b = 10;

var b = a;

b++;
console.log(a) //5
console.log(b)  //6
//The above happend due to pass by Value, Here all we did was copy the Value

//Even though we did b = a , we simply copied the Vlaue and put it into a memory space in

//Pass by value means we copy the value and create that value somewhere else in memory

let obj1 = { name : 'Yao', password: '123'}
let obj2 = obj1;
obj2.password = 'superSecret'

console.log(obj1) // { name: 'yao', password : 'Supersecret}
console.log(obj2) // { name: 'yao', password : 'Supersecret}

//The above is happend due to pass by reference

//Objects in Javascript are stored in Memory and are passed by reference , Which menas that we don't copy the values that we did in primitive types

//We simply when we assigned object one to object two, which simply said this is the where the object is in memory

//Obj1 and obj2 are both pointing somewhere in memory, which contains the properties of the object

obj2  =  'address of obj1' //same as = obj1
//When we changed object password , we are also saying well change the password on this object in memory that obj1 is pointing to, that where passby Reference comes from

//Having pass by reference is a good thing where we can use only one object for everyone
//but this is also a bad thing because we might have this issue where by mistake somebody else changes  a propert reference on that object

var c = [1, 2, 3, 4, 5]
var d = c;
d.push(123)
console.log(d) //[1, 2, 3, 4, 5, 123]
console.log(c) //[1, 2, 3, 4, 5, 123]

//here we might have the issue , if array c is massive data

//in that case we can use
var d = [].concat(c) //by doing this no changes on array won't happen


//Objects are a different thing, to have the same object in a different memory location we can clone the object
let obj = {a : 'a', b: 'b', c: 'c'}

//the first parameter is the location where the object need to copied to, the second parameter is the source (obj)

let clone = Object.assign({}, obj)
//now any cahnges done on clone won't affect obj, also any change on obj won't affect clone too

//another way of doing this is

let clone2 = { ...obj}

//In case if we have nested objects
let obj2 = {a : 'a', b: 'b', c:{
    deep: 'try and copy me'
}}

//if we do
let clone3 =  {...obj2}
//this will not clone and if any changes done on the obj the cloned object will also change
obj.c.deep = 'hahaha'// this change will also be visible in cloned obj clone3, it will overreide the cloned object, this is called sahallow clone 
//it just cloned the first level

//Deep cloning'

let superclone = JSON.parse(JSON.stringify(obj))
//with the above piece of code we can over come shallow cloning

