//FP is all about separation of concerns, which OOP programming does as well.
//It's all about packaging our code into separate chunks so that everything's well organized.
//In OOP we had classes to devide up properties and methods of two different objects



//FP has this idea as well of separating concerns, but they also separate data and function
//Functions operate on well defined data structures like arrays and objects. Rather than belonging to that data structure like an object.
//The goal of FP is same as OOP
//1.Clear + Understandable
//2.Easy to Extend
//3.Easy to Maintain
//4.Memory efficient
//5.DRY

//In OOP we had 4 pillars like encapsulation, abstraction, polymorphism, and inheritance

//In FP if we break things down in FP, It all comes down to the concept of
//Pure Functions:
//The idea here is that, there is a separation between data of a program and the behaviour of a program.
//All objects created in functional programming are immutable,

//Exercide:
// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  
  
  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart
  
  //Bonus:
  // accept refunds.
  // Track user history.