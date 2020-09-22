# Express 
Create file 
```javascript
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const morgan = require("morgan");

const hostname = "localhost";
const port = 7000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.all("/secret", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.get("/secret", (req, res, next) => {
  res.end("SECRET GET method");
});

app.post("/secret", (req, res, next) => {
  res.write(`POST: secret ${req.body}`);
  res.end(`POST the secret: ${req.body.name} with ${req.body.description} `);
});

app.put("/secret", (req, res, next) => {
  res.statusCode = 403;
  res.end(`PUT: operation not supported for /secret`);
});

app.delete("/secret", (req, res, next) => {
  res.end(`DELEting all SECRETS`);
});

app.get("/secret/:secretID", (req, res, next) => {
  res.end("SECRET GET method: " + req.params.secretID + "sended");
});

app.post("/secret/:secretID", (req, res, next) => {
  res.statusCode = 403;
  res.end(`POST operation not supported /secret/ ${req.params.secretID}`);
});

app.put("/secret/:secretID", (req, res, next) => {
  res.write(`PUT: update secret ${req.params.secretID}`);
  res.end(
    "Update secret" + req.body.name + "with details" + req.body.description
  );
});

app.delete("/secret/:secretID", (req, res, next) => {
  res.end(`DELEting all SECRETS ${req.params.secretID}`);
});

app.use(express.static(__dirname + "/public"));
app.use((request, response, next) => {
  //console.log(request.headers);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<html><h1>Express Server, Hi</h1></html>");
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server RUNNING at http://${hostname}:${port}`);
});
```


Test POST command in the Command Line with code
```ruby
curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"name":"test", "description": "te
st POS"}' http://127.0.0.1:7000/secret
```
