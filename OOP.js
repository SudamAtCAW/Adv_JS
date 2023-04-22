//In OOP an object is a box containing information and operations that are supposed to refer same concept, it's like we are modeling real world objects. 

//An object is a realworld entity, that has a state and behaviour. state refers to data and behaviour refers to  methods.


//When it comes to OOP there are two types of programming, 
//Class based programming
//Prototype based programming

//OOP is alll about modeling real world objects and relationships.

const elf = {
    name: 'marylin',
    weapon: 'knife',
    attack(){
        return 'attack with  '+ elf.weapon
    }
}

const elf2 = {
    name: 'anna',
    weapon: 'sword',
    attack(){
        return 'attack with  '+ elf2.weapon
    }
}

//if you see we have done encapsulation here , where we bind the functions(methods) and data together. we have data(state) like name and weapon and method  like attack to act upon state


//The problem with the above approach is when we have a ton of elfs we have to copy and paste the code, like attack method is ame for all elfs still we have to copy and paste for each elf.

//Factory Functions: They create objects for us.

//Lets create a function which will create an object with our given data,
function createElf(name, weapon){
 return{                              
    name: name,
    weapon: weapon,
    attack(){
        'attack with '+ weapon
    }
 }
}

function createElf2(name, weapon){
    return{                              //with ES6 , if we have same property and data we only need to mention it once , and it will work same as the previous
       name,
       weapon,
       attack(){
           'attack with '+ weapon
       }
    }
   }

//now we will create an elf by giving the required parameters and assign it to a variable
const jack = createElf('jack', 'comedy')
jack.attack() //attack with comedy
const sam = createElf('sam', 'water')

//The problem with factory functions is , what if we have 1000 elfs  and 100o elfs require space in our memory to store the same data. name and weapon will be different for each elf, so 
//we nned to store the data in memory for each elf.
//When it comes to method attack that will same for each elf and they are generic. That is going to be copied onto memory in a different location for each of those elfs.
//With protypal ingeritance this can be resolved.

//Let's solve the method issue first.
//We will create an object which will have all those functios which can be accessed by the elfs

const elfFunctions= {
    attack(){
    //here this will whoever is calling the elfFunction
    return 'attack with '+ this.weapon
    }
}

//and as now attack now is accessible by all elfs we can remove this from our obj

function createElf3(name, weapon){
    return{                              
       name,
       weapon
    }
   }


const robbin = createElf3('robbin', 'medicine')
robbin.attack =elfFunctions.attack;

//The problem with the above approach is we have to we have to manually attch these methods onto each elf

//Instead of manually attaching these methods onto each elf, 
//we can use Object.create to create that link that prototype chain between the elffunction and createElf parts.

//this create elf function will take name and weapon as parameter and will create the prototype chain to elf function, so that we don't have to manually attach elfFunctions onto each elf
//Object.create : it creates a link between the elfFunctions and newElf
function createElf4(name, weapon){
   let newElf = Object.create(elfFunctions)  //by doing newElf.__proto__ we can see the inherited methods by newElf
   newElf.name = name,
   newElf.weapon = weapon
   return newElf

   }

   const jeremy = createElf4('jeremy', 'bow')
   jeremy.attack()  //attack with bow

