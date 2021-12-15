//http moodule
import http from "http";

//create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About us Page");
  } else {
    res.end(`
        <h1>Oops! - 404</h1>
        <p>page not found</p>
        <a href="/">back home</a>
        `);
  }
});

server.listen(5000);

//Node.js Documentation - http://nodejs.org/api/http.html
