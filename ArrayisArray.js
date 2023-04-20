var array = [1, 2, 3]

var array = {
    0: 1,
    1: 2,
    2: 3
}

//Booth of the array is same, That is why TypeOf [] is object

//To check whether one object is array or not
Array.isArray({})  //False
Array.isArray([1, 2, 3])  //true

//It hard to check whether one object is array or not as all arrays in JS are objects