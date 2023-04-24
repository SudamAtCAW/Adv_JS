//Arity
//It simply means the number of arguments a function takes
//If we look at compose function , it has arity 2
const compose = (f, g) => (data) =>f(g(data)) 
//multiplyBy3 has an arity 1,
const multiplyBy3 = (num) => num * 3

//although it is not a solid rule , it is usually a good practice and a good idea that a fewer number of parameters there in the function, the easier it is to use that function

//with less number of parameters we can make different things in our function and make it more flexible, we can use like currying, or we can use functions in something like compose and pipe
//The more parameters a function hs, the harder it is to really compose it with other functions

//when it comes to functions we should stick to one or two parameters, because if you're using FP paradigm, it does help make your functio more reusable 