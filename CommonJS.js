//After the IIFE and module two solutions came out. Something called
//Common JS and AMD(Asynchronous Module Definition)
//These solved the problem of designing a module in a way that we won't have the interference of global global scope where we can overwrite certain variables

//CommoJS example

//we can import different modules or files by using require
var module1 = require('module1') //fight
var module2 = require('module2') //importFunc2

function fight(){

}

//this exports fight function
module.exports = {
    fight: fight
}

//CommonJS was created mainly for the server with node JS in mind to use for servers and desktop application

//This commonJS export module systems that came before we even had browser made code very easy to share for programmers

//NPM is just a way for people to share their modules, people using common JS were able to share their code to other programmers

//With common JS modules are meant to be load with synchronously
//JS has only one call stack. So if a module takes a really really long time to load, we're just waiting there for until it gets loaded, and the next one loaded
//And that's not ideal for browsers where users are doing multiple action. Synchronous code is dangerous for browsers, That's why common JS used in servers
//To solve this, 2 things came out for Commin JS

//1.Browserify
//It let's us require modules in the browser by building up all of your dependencies
//If in our sommandline if we do browserify script.js to bundle JS, and what it will do is it will read our script.JS and understand this require syntax, understand the module.exports syntax
//and output it all into a bundle.JS
//Now this bundle.js will be a bundle of all the scripts in our project
//So we can add all our script.js files irregardless of the order
//It will create the dependencies between the modules and add it all to one single file called bundle.js

//By this way we're able to use some commonJS even though it's synchronous, because when we actually deploy this to the browser, it's one giant JS file 
//with everything already in it, This is called module bundler and things like webpack can also do this,
//CommonJS was exteremely popular because things like webpack and browserify simply traverse the dependency tree of our code and bundle them in a single file

//We finally have benifit of no global namespace pollution and order doesn't matter anymore

//AMD(Asynchronous module definition)
//It was specificaly designed for browser, That means it loads modules asynchronously and that's crucial for browsers
define(['module1', 'module2'], 
function(module1Import, module2import){
    var module1 = module1Import 
    var module2 = module2import

    function dance(){

    }

    return{
        dance: dance
    }
})


//AMD uses the word require.js but it's not commonJS

var fightModule = (function(){
    var harry = 'potter'
    var voldemort = 'He who must not be named'
    
    function fight(char1, char2){
        //This will create a random number by multiplying the character length to math.random function and the math.floor will return a whole number/ an integer
        var attack1 = Math.floor(Math.random()* char1.length)
        var attack2 = Math.floor(Math.random()* char2.length)
        return attack1 > attack2 ? `${char1} wins `: `${char2} wins`
    }
    
    console.log(fight(harry, voldemort))
})()



const harry = 'potter'
const voldemort = 'He who must not be named'
//If we deos not export any function, no body will be able to access it
function jump(){

}

//by expoering fight function we will have access to it
export function fight(char1, char2){
    const attack1 = Math.floor(Math.random()* char1.length)
    const attack2 = Math.floor(Math.random()* char2.length)
    return attack1 > attack2 ? `${char1} wins `: `${char2} wins`
}

//with modules as we aren't polluting the global space, we won't be able to access any 
//global variables, we have to explicitly tell which of the variables that we want to export