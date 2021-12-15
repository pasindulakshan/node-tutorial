//fs Module - Asynchronous
//Asynchronous is a non-blocking call, where the thread continues to execute the rest

import { readFile, writeFile, appendFile } from "fs";
import { myDetails } from "./05-localdata.js";

//Write data to a file - this will overwrite the file
writeFile("./content/test.txt", "Hello ", (err) => {
  if (err) {
    console.log(err);
  }

  //writeFile with a flag - this will append the data to the file
  writeFile("./content/test.txt", "World\n", { flag: "a" }, (err) => {
    if (err) {
      console.log(err);
    }
    //append data to a file
    appendFile(
      "./content/test.txt",
      myDetails.firstName + " " + myDetails.lastName,
      (err) => {
        if (err) {
          console.log(err);
        }
        //read data from a file -
        readFile("./content/test.txt", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data.toString());
            console.log("Done with this task");
          }
        });
      }
    );
  });
});

console.log("Start Next Task");

//Node.js Documentation - https://nodejs.org/api/fs.html
