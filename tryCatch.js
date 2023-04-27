//There are 2 ways by which we can catch an eror in JS one is the try catch block, which 
try{} catch{}
//the second one is the catch method
//catch()

//Try catch example

function fail(){
    try{
//what ever code inside this block , will be checked for errors
console.log('this works')
    } catch(error) {

   //if any errors found, the catch block will be executed or handle them here
  console.log('we have made an error', error)
  //the error parameter will have the value of whatever error gets thrown from the try block
    }
}

fail() //this works , as everything worked catch block never called

//in this example the consol syntax is incorrect

function fail2(){
    try{
//what ever code inside this block , will be checked for errors
consol.log('this works')
    } catch(error) {

   //if any errors found, the catch block will be executed or handle them here
  console.log('we have made an error', error)
  //the error parameter will have the value of whatever error gets thrown from the try block
    }
}

fail2()  //output: we have made an error, it will show us the stack trace

//now we will throw an error of our own

function fail3(){
    try{

consol.log('this works')
throw new Error('Warning !!!')
    } catch(error) {
  console.log('we have made an error', error)
    }
}
fail3() //that Error will be handles by the catch block

//interestingly we can get the name, messsage and stack trace of the error by doing this

function fail4(){
    try{

consol.log('this works')
throw new Error('Warning !!!')
    } catch(error) {
  console.log('we have made an error', error.stack) //we can also know the name and message by logging error.name and error.message
    }
}
fail4()

//in try block If we declare our code after throwing the error, that will be never executed 
//because as soon as we get an error, JS will stop everything and look for catch block

function fail5(){
    try{


throw new Error('Warning !!!')
consol.log('this works') //this piece of code will never be executed
    } catch(error) {
  console.log('we have made an error', error.stack) //we can also know the name and message by logging error.name and error.message
    }
}
fail5()

//try block won't let us do anything with out the catch or finally block
// try{


//     throw new Error('Warning !!!')
//     consol.log('this works') //this piece of code will never be executed
//         }    it throws syntax error


//Finally block always gets executed, it is not dependent on whether there is any error in our try block or not
//After the try catch block is done , it will get executed


function fail6(){
    try{

        consol.log('this works')
throw new Error('Warning !!!')

} catch(error) {
  console.log('we have made an error', error)

    } finally{
        console.log('stiil good')
        return 'returning fail'
    }
    
}
//by this way our program will always return something in the end, even it get's any error
//codes outside try, catch and finally block will never be executed
//This try catch block can be used to handle any type of synchronous errors
//we can have nested try blocks

try{
    //this try block will try the code of bothe nested try catch block
     try{
        //this part of code will cause the error
        something();
        //this catch block will throw the error
     } catch(e){
        throw new Error(e)
     }
     //the error it got from the outer try block , will be catched by the outer catch block
} catch (e){
    console.log('got it', e)
}

//try catch block workis with synchronous code, if we have asynchronous code like setTimeOut() and had a function that doesn't do anything

try{
    setTimeout(function (){
        //this fakevariable should throw reference error
        fakeVariable;
    },1000)
} catch(err){
    console.log('got it', err)
}
//when run this piece of code we won't get any error
//Because the above code is asynchronous and the setTimeOut() goes to the webAPIs,call back queue, event loop and pops to the call back after the 
//the whole piece of synchronous code is already done executing

