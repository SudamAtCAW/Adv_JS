let array = []
for(let i = 5; i > 1; i++){
    array.push(i-1)
}

//as i is always greater than 1 and the loop keeps on executing  for which 
//the garbage collector can not removed the unused data

//Memomry leaks are pieces of memory that application have use dthe past but 
//it is not needed any longer, and has not returned back to us
//to the pool of free memory

//There are three common memory leaks

//Global Variable
var a = 1;
var b = 2;


//Event listeners
var element = document.getElementById('button')
element.addEventListener('click', onclick)

//if we don't remove event listeners and the user goes back and forth agaiin and agains
//the memory keeps increasing more and more

//setInterval

setInterval( ()=>{
    
})

//Call stack and memory heap are the two places that javascript remembers or stores memory and we have limited use of them
