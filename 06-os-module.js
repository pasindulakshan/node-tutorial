//OS module provides a few basic operating-system related utility functions.
import os from "os";

//User Info
console.log(os.userInfo().username);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// return the cpu architecture
console.log("CPU architecture: " + os.arch());

// It returns the amount of free system memory in bytes
console.log("Free memory: " + os.freemem());

// It return total amount of system memory in bytes
console.log("Total memory: " + os.totalmem());

// It returns the list of network interfaces
console.log("List of network Interfaces: " + os.networkInterfaces());

// It returns the operating systems default directory for temp files.
console.log("OS default directory for temp files : " + os.tmpdir());

// return the endianness of system
console.log("Endianness of system: " + os.endianness());

// It returns hostname of system
console.log("Hostname: " + os.hostname());

// It return operating system name
console.log("Operating system name: " + os.type());

// It returns the platform of os
console.log("operating system platform: " + os.platform());

// It returns the operating systems release.
console.log("OS release : " + os.release());

// Node.js Documentation - https://nodejs.org/api/os.html
