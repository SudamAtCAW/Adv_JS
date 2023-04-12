//What happens if we keep calling functions over and over and over
//functions that are nested inside each othe, that will cause the growing of the stack until
//The call stack will get larger and lager until it can't do it anymore
//That is called stack overflow

function inception(){
    inception()  //this is recursion where a function calls itself
}

inception()
//recursion is one of the ways to create stackoverflow
 