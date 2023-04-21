//Encapsulation: It is hiding of information that is unnecessary to be seen by outside world or manipulated. 
//This gets into the idea of principle , of least privilige, a big security principle when it comes to programming, where you don't want to give just anybody access to ypur API, to your 
//special functions

//Using closures we were able to ccess timewithoutDestruction that I don't want anybody touching because I just want to set interval to constntly increment that.
//But at the same time we want to people have access to things like pass time, so that passtime function can access the variables that are sacred to me
//This is the main benifits of closures of data encapsulation, And it refers to the idea that some data should just not be directly exposed
// Exercise:
const makeNuclearButton = () => {
    //this will contain the data of time before launch/destruction
    let timeWithoutDestruction = 0;
    //this passtime function will increas the value of timewithoutDestruction when it is executed each time
    const passTime = () => timeWithoutDestruction++;

    //this function will get the increased or total passed time data before destruction
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        //whenever the launch function gets executed , it substract one from the current value of timewithoutdestruction
      timeWithoutDestruction = -1;
      return '💥';
    }
  //this will execute passtime function once with in each one second and return totalpeacetime
    setInterval(passTime, 1000);
    return {totalPeaceTime}  //here launch was removed from return object{launch:launch}
  }
  
  const ww3 = makeNuclearButton();
  ww3.totalPeaceTime()
  ww3.launch() //this line of code will thorough error, because of encapsulation