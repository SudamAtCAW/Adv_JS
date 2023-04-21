//Memory Efficient

function heavyDuty(index){
    const bigArray = new Array(7000).fill('😁')
    console.log('creatd !')
    return bigArray[index]
}
//Every time we run this function, we create this memory and then return it. And as nothing is referencing to it, it gets destroyed. That is not very efficient. 
//Here the array gets created 3 times, each time it gets executed
heavyDuty(543)
heavyDuty(543)
heavyDuty(543)
heavyDuty(543)

//Wouldn't it be great if there was a way for us to create this array and because we know it's going to be used a lot to only create it once and just have it in a memory there so we can just constantly access
//access it, instead of doing all that work, it can be achieveable with closures

//Here we created the memory onlt once as heavyDuty2 function will creat a big array 
//that array is assigned to a bariable which contains the functionality of hevayDuty2()
//As heavyDuty2() returns a function that takes an parameter , we can all the return function by passing a parameter into getHeavyDuty(index)
const getHeavyDuty = heavyDuty2()

getHeavyDuty(890)
getHeavyDuty(893)
getHeavyDuty(690)

function heavyDuty2(){
    const bigArray = new Array(7000).fill('😁')
    console.log('creatd  Agsin!')
    return function(){
        return bigArray[index]
    }
}