//fs Module - Synchronous
//Synchronous is a blocking call, where the thread is blocked until that call is over.

import { readFileSync, writeFileSync, appendFileSync } from "fs";
import { myDetails } from "./05-localdata.js";

console.log("Start First Task");
//Write data to a file - this will overwrite the file
writeFileSync("./content/test.txt", "Hello ");

//writeFileSync with a flag - this will append the data to the file
writeFileSync("./content/test.txt", "World\n", { flag: "a" });

//append data to a file
appendFileSync(
  "./content/test.txt",
  myDetails.firstName + " " + myDetails.lastName
);

//read data from a file
const read = readFileSync("./content/test.txt");
console.log(read.toString());

console.log("Done with first task");
console.log("Start second Task");

//Node.js Documentation - https://nodejs.org/api/fs.html
