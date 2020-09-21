## First NodeJS Server

```javascript
const http = require("http");

const hostname = "localhost";

const port = 7000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(
    "<html><body><h1>Hello, world</h1><h1>First NodeJS Program</h1></body></html>"
  );
});

server.listen(port, hostname, () => {
  console.log(`SerVER running at http://${hostname}:${port}`);
});
```
