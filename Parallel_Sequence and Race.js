//Exercise:
//With promises there are 3 things that are cruical for us to decide. Especially to have multiple promises.
//1- Parallel i.e - To execute all these promises in parallel, all at the same time
//2- Sequence- First one will be executed firrst, then second one and so on if they are dependent on each other
//3- Race- We will make all the calls at the same time, which ever comes back first, just do that ine and ignore rest
const promisify = (item, delay) =>
  new Promise((resolve) =>
  //Here each promise is wrapped with a setTimeOut function which will receive a delayed time as a parameter with the item parameter
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
console.log(a, b, c)

//Output : [Function: a] [Function: b] [Function: c] executed based on the delayed time parameter

//Here we will run all these promises at the same time and have output one,output two ,output three which should be a, b, c
//In this case we will get all the responses at the same time. This piece of code didn't ran in my case
async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}
//Calling the parallel function and logging the output
parallel().then(console.log)



//I this case which ever promise returns first, that will get logged in the console and rest will be ignored
//promise comes with .race method by default
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

race().then(console.log)
//output
//race is done : a

//With this function it will be executed in a defined oreder, until the first promise returns it will wait after it returns it moves to the next promise
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

//Output
//sequence is done a b c
sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)

//When executed all of the above functions
//Race is done a
//parallel is done: a b c
//sequence is done a b c