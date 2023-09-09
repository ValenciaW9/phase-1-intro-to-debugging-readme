// The console object's log() method logs general information to the console. It can take any number of arguments. If more than one argument is provided, the arguments will be printed out on the same line with a space in between:



console.log("Hello,", "world!");
// LOG: Hello, world!

///Importantly, you can log not only simple things like Strings or Numbers but also objects, and use disclosure triangles to "expand out" the contained values.

//Typographical Note: When we use console.log() in code snippets, we'll preface the output statements with LOG:, such as in the above example. This is to differentiate messages logged out to the console from values returned by an expression, which are represented with =>, e.g.:
function logReturner() {
    console.log(false);
  
    return true;
  }
  
  logReturner();
  // LOG: false
  // => true

  //As an example, here's some code. Where might we want to log information to debug this simple app?
  const number = 10;

function addTwoNumbers(a, b) {
  a + b;
}

function multiplyByTwo(n) {
  number * 2;
}

//Copy the code above into your console then run the following:
console.log(multiplyByTwo(addTwoNumbers(1, 3))); //=> undefined(?!)


///Some questions to consider in debugging the code:

//Is what we passed in what the function got?
//Is the thing the function did what we expected it to do?
//Does the operator work like we thought it did?
//Try adding some console.log()s to the code to answer these questions and figure out what the issue is.

///To start, console.log() will be our main console debugging method. However, you'll also probably encounter the following two console methods, error() and warn().

///Demonstrate console.error()
///The console object's error() method is for printing out an error to the console, and it can also take multiple arguments. Most browsers will style the error message differently from a regular message output with log():


//You might ask why we'd ever need to use this — isn't the goal of writing good code to avoid errors? Well, sure, but sometimes errors are out of our control: the network could go down, data could change, or a user could enter something invalid. In these cases, it's helpful to use the specialized console.error() method. That way, you're letting future engineers (including yourself) know that this message is more important than the average logged message.

//TYPOGRAPHICAL NOTE: When we use console.error() in code snippets, we'll preface the output statements with ERROR: to differentiate them from other logged messages:
console.error("Uh oh, you done goofed.");
// ERROR: Uh oh, you done goofed.


//Demonstrate console.warn()
//A step down in severity from console.error() is console.warn(). It provides a step between a regular log() message and a more dire error() message.

//Demonstrate console.table()
//A very handy method to help work with Objects and Arrays is console.table(). Given the following object:
const family = {
    mother: {
      firstName: "Susan",
      lastName: "Doyle",
      age: 32,
    },
    father: {
      firstName: "John",
      lastName: "Doyle",
      age: 33,
    },
    daughter: {
      firstName: "Lily",
      lastName: "Doyle",
      age: 5,
    },
    son: {
      firstName: "Mike",
      lastName: "Doyle",
      age: 8,
    },
  };

  //If you call console.table(family), it prints a tables of entries:



