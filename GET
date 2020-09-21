#TEst GET Method

```javascript
const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";

const port = 7000;

const server = http.createServer((request, response) => {
  //console.log(requst.headers);
  console.log("Request for " + request.url + " by method " + request.method);

  //response.statusCode = 200;
  //response.setHeader("Content-Type", "text/html");
  //response.setHeader("Content-Type", "application/json");
  //response.end(
  //  "<html><body><h1>Hello, world</h1><h1>First NodeJS Program</h1></body></html>"
  if (request.method == "GET") {
    let fileURL;
    if (request.url == "/") {
      fileURL = "/index.html";
    } else fileURL = request.url;

    let filePath = path.resolve("./public" + fileURL);
    const fileExt = path.extname(filePath);

    if (fileExt == ".html") {
      fs.access(filePath, fs.constants.F_OK | fs.constants.R_OK, (err) => {
        if (err) {
          console.log(
            `${filePath} ${
              err ? "does not exist/readable" : "exists/is readable"
            }`
          );
          response.statusCode = 404;
          response.setHeader("Content-Type", "text/html");
          response.end(
            "<html><body><h1>Error 404: " +
              fileURL +
              "not found  </h1></body></html>"
          );
          return;
        } else {
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html");
          fs.createReadStream(filePath).pipe(response);
          /*response.end(
            "<html><body><h1>File " +
              fileURL +
              " exists and READABLE  </h1></body></html>"
          );*/
        }
      });
    } else {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/html");
      response.end(
        "<html><body><h1>Error 404: " +
          fileURL +
          " not an HTML  </h1></body></html>"
      );
      return;
    }
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.end(
      "<html><body><h1>Error 404: " +
        request.method +
        "not supported </h1></body></html>"
    );
    return;
  }
});

server.listen(port, hostname, () => {
  console.log(`SerVER running at http://${hostname}:${port}`);
});


```

#TEst by 
typing
```ruby
http://localhost:7000
```
You will see index.html

Next
```ruby
http://localhost:7000/index.html
```
You will see index.html

Next
```ruby
http://localhost:7000/info.html
```
You will see info.html

Next
```ruby
http://localhost:7000/index1234.html
```
You will see Error 404: /info1.htmlnot found

Next
```ruby
http://localhost:7000/index.txt
```
You will see Error 404: /info1.txt not an HTML
