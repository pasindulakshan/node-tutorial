// GLOBALS  - NO WINDOW OBJECT !!!!
/* ------------------------------------------------------------ 
Node.js global objects are global in nature and they are available in all modules. 
We do not need to include these objects in our application, rather we can use them directly. 
These objects are modules, functions, strings and object itself as explained below. 

Go to https://nodejs.org/api/globals.html for more info.
------------------------------------------------------------ */

/* ------------------------------------------------------------
 Global Objects
------------------------------------------------------------ */
// process    - info about env where the program is being executed.Provides multiple events related to process activities.
// console    - standard output stream

/* ------------------------------------------------------------
 Global Functions 
------------------------------------------------------------ */
// setTimeout(cb, ms) - call cb after ms milliseconds
// clearTimeout(t) - stop the timer
// setInterval(cb, ms) - call cb every ms milliseconds

/* ------------------------------------------------------------
The following variables may appear to be global but are not. 
They exist only in the scope of modules
------------------------------------------------------------ */
// __dirname  - path to current directory
// __filename - file name
// require()    - Used to import modules, JSON, and local files. (CommonJS)
// module     - info about current module (file)

/* Testing */
function printHello() {
  console.log("Hello, World!");
}
var t = setTimeout(printHello, 2000); // prints "Hello, World!" after 2 seconds
clearTimeout(t); // stop the timer. no output

setInterval(printHello, 2000); // prints "Hello, World!" every 2 seconds

console.log(__dirname); // prints the path to the current directory
console.log(__filename); // prints the file name
