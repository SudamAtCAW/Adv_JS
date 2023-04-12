//Java script is a garbage collected language
//That means when java scrpt allocates memory, let say with in a function
//we created an object and that object gets stored in our memory heap
//automatically when we finish calling the function and that object is no lonhger in use
//javascript freeze the memory that we no longer use and collects garbage
//Only the data that is useful to us remains , this way we make sure we doesn't use all the space in memory heap
//In languages like C we have to manage the Garbage collection, by which we can make it really optimized

//How Garbage collection works in Javascript
//It uses Mark and sweep algorithm, 
//where mark what data we need and swwep the data that is not needed any more