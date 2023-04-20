const a = function (){
    console.log('a', this)
    const b = function(){
        console.log('b', this)
        const c = {
            hi: function(){
                console.log('c', this)
            }
        }
        c.hi()
    }
    b()
}
a()

// this will output

//a window :as inside a this is pointing to Window
//b Window :as we are calling the b inside from  window.a(b()) as to the left of the dot it is still window, that is why this inside b is pointing to window
//c {hi " f"} // as the function is inside hi object and object this will pont to obj hi

const obj = {
    name: 'Billy',
    sing(){
        console.log('a', this);
        var anotherFunction = function(){
            console.log('b', this)
        }

        anotherFunction()
    }
}

obj.sing() 

//output

//a{ name: 'Billy', sing: f}
//b window the this inside b is refering to window object because this keyword is not lexically scoped, i.e it doesn't matter where it is written , it matters how the function was called

//this keyword is dynamically scoped, it doesn't matter how the function is written, it mattters how the function was called

//To overcome from this pitfall, we can use arrow functions which was introduced with es6

const obj2 = {
    name: 'Billy',
    sing(){
        console.log('a', this);
        var anotherFunction = () => {
            console.log('b', this)
        }

        anotherFunction()
    }
}

obj2.sing() 

//output
//a{ name: 'Billy', sing: f}
//b{ name: 'Billy', sing: f}

//before arrow functions we had to return the function and bind it to this


const obj3 = {
    name: 'Billy',
    sing(){
        console.log('a', this);
        var anotherFunction = () => {
            console.log('b', this)
        }

        return anotherFunction().bind(this)
    }
}

obj3.sing() ()

//output
//a{ name: 'Billy', sing: f}
//b{ name: 'Billy', sing: f}


