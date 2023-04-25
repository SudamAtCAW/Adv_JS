//Callback Queue - Task Queue 
setTimeout( () =>{console.log('1', 'is the loneliest number')},0)

setTimeout(() => {console.log('2', 'can be as bad as one')}, 100);

Promise.resolve('hi').then((data) =>console.log('2', data))

console.log('3', 'is a crowd')


//output

//3 is crowd
//2 hi  --> as this is a promise, JS will wait until it gets resolved
//1 is the loneliest number
//2 can be as bad as one


//Another queue for promises was needed for Promises named Job Queue or Microtask Queue
//The micro task queue has higher priority than the call back queue

//Which means the event loop will check job queue first then call back queue 