////Partial Application
//It's the process of producing a function with a smaller number of parameters
//It means taking a function, applying some of it's arguments into the functions, so it remembers those paramaters and then it uses closures to later on be called with all the rest of the arguments


//In the currying sections we had a function which took two numbers as parameters, let's think of the same function now with three parameters
const multiply = (a, b, c) => a * b * c
//so we have three numbers now (three argumnts), well partial application says, I want to apply , A portion of the parameters(for ex a) and the next time I call that function, I want to apply 
//the rest of the arguments
//curries Version
const curriedMultiply= (a) => (b) => (c) => a * b * c;
//calling the curried function, here we are giving all of the parameters at once
curriedMultiply(5)(4)(6) 

//partial application way: We should be able to call the function once and then apply the rest of the arguments to it

//here we have used the multiply method to take the parametersa and we used bind as bind will return anothe functio which can be used later with rest of the arguments
//We have passed null as a parameter in this method, the first parameter is to specify where this needs to pointed. As we are not using this, we dont want this to point at any object, that is why we had given null as a parameter here
//Parameter 5 will be remembered by the  partialMultiplyBy5 and we can call it with the rest of the argumants later
const partialMultiplyBy5 = multiply.bind(null, 5)

//this is also a method, but not very efective
const partialMultiplyBy = curriedMultiply(5)
partialMultiplyBy(4)(6)

//Review
//partial application says on the second call I expect all the arguments.
//currying says I expect one argument at a time.