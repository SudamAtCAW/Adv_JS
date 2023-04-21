//Type coercion means the operands , to the left and right of the opearator (==) are different types. One of them will be converted into an equivalent value by the javascript engine. 

//Or in  other words typpe coercion means the language converting a certain type to another type.

1 == '1'

//All languages have type coercion.
//Javascript is Dynamically typed language
//In JS Type coercion happens when we use the double equal. If we have two different types it will coerce one into the same type.

//If we use 3 equals , In Javascript it means compare two values but don't try and correct the Values.
1 === '1'

if(1){
    console.log(5) //5, as in JS 1 is coerced to true and zero to false
}

//It is always advised to not to use double equals as it has more edge cases

-0 === +0 //true
//Object.is works pretty much same as === except in -0 === +0 case
Object.is(-0 === +0)

NaN === NaN //false
Object.is(NaN === NaN) //False
 
