/* ------------------------------------------------------------
In Node.js, Modules are the blocks of encapsulated code that communicates with 
an external application on the basis of their related functionality. 
Modules can be a single file or a collection of multiples files/folders. 
The reason programmers are heavily reliant on modules is because of their re-usability 
as well as the ability to break down a complex piece of code into manageable chunks.

Modules are of three types:
    local Modules
    Core Modules
    Third-party Modules
------------------------------------------------------------ */

// Local Modules - A local module is a module that is defined within a file. every file in node.js is a module.

//import { add } from "./calc.js"; // import single function
import * as calculator from "./04-calc.js"; // import all functions from calc.js

let x = 50,
  y = 10;
console.log("Addition of 50 and 10 is " + calculator.add(x, y));

import * as data from "./05-localdata.js";
console.log(data.persons);
console.log(data.CEO);

/* ------------------------------------------------------------
Core Modules: 
Node.js has many built-in modules that are part of the platform and comes with Node.js installation. 
These modules can be loaded into the program by using the require function.
some examples: 
    fs - used to handle file system.
    http - creates an HTTP server in Node.js.
    assert - set of assertion functions useful for testing.
    path - includes methods to deal with file paths.
    process - provides information and control about the current Node.js process.
    .
    .
    .

Third-party modules: 
Third-party modules are modules that are available online using the Node Package Manager(NPM). 
These modules can be installed in the project folder or globally. 
Some of the popular third-party modules are mongoose, express, angular, and react.

------------------------------------------------------------ */
