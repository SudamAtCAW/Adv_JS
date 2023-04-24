//Exercide:
// Amazon shopping
const user2 = {
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

  //Let's list out the futures which we will be needing
  //this purchaseItem will do all of the things for us
  function purchasesItem(){}
  //Add items to cart
  function itemToCart(){}
//Apply tax to items
function applyTaxToItems(){}
//to purchase an Item
function buyItem(){}
//to empty the cart once they are bought
function emptyCart (){}

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  //this will store the state of the user with each event link add item to  cart, apply tax, purchase
  const history1 = [];
//In the   previous chapter we saw an example in which there were 2 functions, through which we wanted to go through
//But in this case we have more than two functions that we want to go through,(This is part of reason that we should use a library like Ramda or lowdash to use compose, we don't need to 
//implement it our selves) By using the library version, Usually it hides a lot of complexity
//As in this case we have way more arguments. so are going to use the spread operator to get all of the arguments, inside we will cal f over g (f(g)) and inside just spred the arfuments
// f(g(...args)), so we have compose now.
  const compose = (f, g) => (...args) => f(g(...args))
  const pipe = (f, g) => (...args) => g(f(...args))
    //This purchase item is going to receive a bunch of functions, and we don't necesserily know how many.So we will just spread these functions, and these spread functions are going to 
  //return => we want to use these functions and we should be able to compose them. => so in call back functions we will get all of the functions as a form of array.(args array)
  //the .reduce method accepts upto four arguments. The reduce method calls the call back function one time for each elemet in the array(aargs array)
  //The reduce function takes a previous value and the current value or an accumulator and the next value
//So if we pass compose here , the reduce function which is in itself is higher order function, is going to run this for us. Which is going to take f and g (previous value and current value)
//but it is also going to iterate through iterate through each of the functions that we passed using the spread function operator
//And actually return one by one and run these functions
//Here we built our own compose function that allows us to enter any number of parameters that we want into the purchase item, so that we can compose those functions and act over the data
//that we receive
//if you see we are not passing any parameter while declaring this compose function , as the call back functions will be needing the paramaters we just need to save the 
//partially executed function in a variable and when we call that variable at that time we can give all the needed functions and data
  const purchaseItem  = (...fns) => fns.reduce(compose);
  const purchaseItem2  = (...fns) => fns.reduce(pipe);

//   purchaseItem2(  /The order of execution of these functions will be from left to right
//     addItemToCart,   // addItemToCart --> applyTaxToItems --> buyItem --> emptyUserCart
//     applyTaxToItems,
//     buyItem,
//     emptyUserCart,
//   )(user, {name: 'laptop', price: 60})
//here  purchaseitem has saved the state of partially executed compose function, now it will need the functions and data for the functions to operate on
  purchaseItem(  //The order of execution of these functions will be from right to left 
    emptyUserCart,  //   addItemToCart --> applyTaxToItems --> buyItem --> emptyUserCart
    buyItem,
    applyTaxToItems,
    addItemToCart
  )(user, {name: 'laptop', price: 50})

  //This additemTocart will receive two parameters, the user data and the item which will be added into cart(the cart of the user is empty ), the item will have a name and price
  function addItemToCart(user, item) {
    //here we are pushing the state of the user before this additemTocart function, which in future will help us to travel back in time
    history1.push(user)
    //Here we will crate updated cart and add that cart to the users cart, but we don't know what the user had previously in his cart
    //We should make sure that we don't mutate any of the previous arrays, so we should return what we currently have
    //Here we are crating a new array, which will add a new array that is completely different and copied from the previous array or the original array. 
    //And in that newly created array we will pass the item which the user will be byuing
    const updatedCart = user.cart.concat(item)
    //Here we are returning a new object once again, which will be 
    //first empty object{} is the target object which is empty, second object (user) is the target object from which all the properties and values will be copied into the empty object
    //and the third object is, if we want to make any updates on the copied object, which in this case is the cart of the user
    //So we are adding the value of updatedcart in the property if cart in the user object.
    //By returning copied objects with upadted values we are making sure that we are not changing the state of the global object, so that others can also use the global object
    //As we are returning user from the addItemToCart function(the function which will be executed first), object user will be passed from one function to another, and eacch function 
    //will retrun an updated copied user object after processing the data. just like a factory
    return Object.assign({}, user, {cart: updatedCart});
  }
  
  //the applyt
  function applyTaxToItems(user) {
    //Pushed 1 row into the history array to store the state of the user from applyTaxToItems function
    history1.push(user)
    //This line will automatically copy the cart from the user object, we don't have to to const cart= user.cart again 
    const {cart} = user;
    //we have set the tax rate as 30% here,
    const taxRate = 1.3;
    //this updated cart will be a newly crated array, which will store the upadted price of each item
    //the cart.map function will iterate through each of the item in cart array and return the price of each item by multiplying the each item price to 130%, and the item name 
    const updatedCart = cart.map(item => {
      return {
        name: item.name,
        price: item.price*taxRate
      }
    })
     //By returning copied objects with upadted values we are making sure that we are not changing the state of the global object, so that others can also use the global object
     //Here the  cart will have the updated price of each item after applying the tax
    return Object.assign({}, user, { cart: updatedCart });
  }
  
  //
  function buyItem(user) {
     //Pushed 1 row into the history array to store the state of the user from buyItem function
    history1.push(user)
    //So by buying any item, what happens is the item moves from cart to purchases array
    //So here we will add all the items that are in the cart to the purchases array
    //the purchases array is empty for the global user 
    //Creating an array which will store all of the items that are in cart
    const itemsInCart = user.cart;
    //then returning the updated copied object by adding the items that are in cart to prrchases array
    return Object.assign({}, user, { purchases: itemsInCart });
  }

  //after buying the object, we should empty the cart
  function emptyUserCart(user) {
    
     //Pushed 1 row into the history array to store the state of the user from emptyCart function
    history1.push(user)
    //here we just need to retrun the object with an empty cart
    return Object.assign({}, user, { cart: [] });
  }