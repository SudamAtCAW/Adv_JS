//Where does the web api have this compute this power to run these thinfgs?
//Tasks in a web browser, i.e even in node, where we use something like fetch or setTimeOut or look into the database or read a file system in Node
//these are still executed in threads and are hidden from us
//they are running on their own separate background threads outside JS

//whenever a new tab is opened, the browser creates one thread per tab, so that we have an enitire JS called stack and memory heap
//as soon as we close the tab, the thread dies.

//web worker is a JS program running on a different thread in parallel to our main thread

//concurrency is something that we can achieve in JS, We're using concurrency to work on our single threaded JS , but in back ground we use node to allow us to do things in the background on 
//different  different threads so thatwe can accomplish things
//But we can olny do those once our main call stack  is done with our work

//parallelism can only happen when we have multicode CPUS

//Node was built for simplicity, if you have four cpu's on your computer or server, then you can ran that node instance on all those 4 cpus
//