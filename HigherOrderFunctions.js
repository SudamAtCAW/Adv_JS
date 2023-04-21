//Higher Order Functions are simply a function that can take a function as an argument or a function that returns another function

//Functions: A function with n paramaters
//We are creating a function for our company to let our employeess log in
function letAdamLogIn(){
    let arraay = []
    for  (let i=0; i<1000000; i++){
        arraay.push(i)
    }
    return 'Access Granted to Adam'
}

letAdamLogIn() 
//The problem with this function is there is a pause while executing, the executing time increases if an extra zero is added to i<10000000

function letEvamLogIn(){
    let arraay = []
    for  (let i=0; i<1000000; i++){
        arraay.push(i)
    }
    return 'Access Granted to Eva'
}

letEvamLogIn() 

//The problem with above code is that we repeated the same code twice

//function(a,b): A function with parameters
function letUserLogIn(user){
    let arraay = []
    for  (let i=0; i<1000000; i++){
        arraay.push(i)
    }
    return 'Access granted to '+ user
}

letUserLogIn('Jacob')  //Access granted to Jacob

const giveAccessTo = (name) => 'Access Granted to  '+ name

function letUserLogIn(user){ //++We now tell the function what data to use when we call t
    let arraay = []
    for  (let i=0; i<1000000; i++){
        arraay.push(i)
    }
    return giveAccessTo(user)
}

letUserLogIn('Joshua')

//We had a function and that function when we actually called it, it decided what to do with that data

//Instead now we have a more generic function that says, hey, I am going to give you later on some generic piece of data, I don't know why yet, but when I pass you, the user do some sort of
//Functionality to it and so that instead of defining adam or eva inside of the function, we can just define that later on   when we actually invoke the function

//Now we have the ability, when we call the function to define the data

//So essentially we have a bit more flexibility instead of when we define the function, telling it exactly what needs to be done we can delay that until execution time and this gives us 
//flexibility, we kept our code DRY

function letAdminLogIn(admin){ //++We now tell the function what data to use when we call t
    let arraay = []
    for  (let i=0; i<5000000; i++){
        arraay.push(i)
    }
    return giveAccessTo(admin)
}

letAdminLogIn('Joshua')

//The problem with above approach
//If we have an admin instead of just a user, somebody with a lot privilige, They have to go through a different set of authentication
//It takes a little bit more time for them to get authenticated, So the function has changed little bit, we will have a different loop here an different permission process
//there are also multiple roles in a company like managers, secretaries etc

//This is where Higher Functions come into play

//With functions we tell the function what to do , with function(a, b) we tell the functions what to do and what data to use, we're able to define the function waht it does, but later on 
//we'll tell you what data we need


//With a higher order function we get to do both of these things when we actually call the function that is, we can give the data and also tell the function what to do or some extra abilities 
//when we actually invoke it

//Let's create an authenication function which will take which type of verification process required fro the user, In this case it will be number
function aunthenticate(verify){
    let arraay = []
    for  (let i=0; i<verify; i++){  //Just moved the authentication code inside the function, changed the number(1<500000) will just be parameter verify, Now it is more dynamic, we can change it according to the user
        arraay.push(i)
    }
    return giveAccessTo(person.name)
}

function sing(person){
    return 'la la la  my name is '+ person.name
}

//Instead of creating letUserLogin and letAdminLogIn jsut create a function letPersonLogIn which will take two parameters.
//First parameter is the person and second parameter is a function
//A higher order function is a function that returns another function or a function that accepts a function as a parameter.
function letPersonLogIn(person, fn){  //++ tell it what data to use, + what actions to take on which data
    if(person.level === 'admin'){
        //if the person is an admin in verify parameter it will pass 50000
       return  fn(50000)
    } else if(person.level === 'user'){
        //if the person is an user in verify parameter it will pass 1000
      return   fn(10000)
    }
  
}

//Here we gave two parameters. one is an object which contains the level and name of the user and the second parameter is the
//aunthenticate function which will take the verify parameter described in the if else block of letPerson log in
letPersonLogIn({level: 'user', name: 'Tim'}, aunthenticate)  // access granted to tim
letPersonLogIn({level: 'Admin', name: 'Natasha'}, aunthenticate)  //access granted to natasha
//we can pass any function as a parameter, 
letPersonLogIn({level: 'Admin', name: 'Kishore'}, sing)  //la la la my name is Kishore

//Exercise:Create a function that can multiply any two given numbers

//This function will return another function

const multiplyBy = function(num1){
    return function (numm2){
        return num1*numm2 
    }
}




//Now we assigned a variable which will have the functionality to multyply any given number by two.
const multiplyByTwo = multiplyBy(2)
//It will return the multiplication of the passed number as parameter with two
multiplyByTwo(4) //8

//We can also reuse this functionality
const multiplyByThree= multiplyBy(3)
multiplyByThree(10) //30

//we can also write the function in this manner also
const multiplyby = (num1) = (num2)= num1*num2 //same as above

//and can call this by 
multiplyby(12)(5) //60