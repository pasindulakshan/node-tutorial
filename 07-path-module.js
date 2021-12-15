//path module is used for handling and transforming file paths.
import path from "path";

//The platform-specific file separator
console.log(path.sep);

//The platform-specific path delimiter
console.log(path.delimiter);

// Join
console.log("joint path : " + path.join("/test", "test1", "test.txt"));

// Resolve
console.log("resolve : " + path.resolve("app.js"));

// extName
console.log("ext name : " + path.extname("app.js"));

// Node.js Documentation - https://nodejs.org/api/path.html
