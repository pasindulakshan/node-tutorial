// GLOBALS  - NO WINDOW OBJECT !!!!
/* ------------------------------------------------------------ 
Node.js global objects are global in nature and they are available in all modules. 
We do not need to include these objects in our application, rather we can use them directly. 
These objects are modules, functions, strings and object itself as explained below. 
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
function printHello() {
  console.log("Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);

// clearTimeout(t) - stop the timer
var t = setTimeout(printHello, 2000);
clearTimeout(t);

// setInterval(cb, ms) - call cb every ms milliseconds
setInterval(printHello, 2000);

/* ------------------------------------------------------------
The following variables may appear to be global but are not. 
They exist only in the scope of modules
------------------------------------------------------------ */
// __dirname  - path to current directory
console.log(__dirname);

// __filename - file name
console.log(__filename);

// require()    - Used to import modules, JSON, and local files. (CommonJS)
// module     - info about current module (file)

/* ------------------------------------------------------------
There are many more globals. 
See https://nodejs.org/api/globals.html for more info.
------------------------------------------------------------ */
