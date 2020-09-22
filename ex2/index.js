const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const morgan = require("morgan");

const secreetRouter = require("./routes/secretRouter");
const secreetIDRouter = require("./routes/secretIDRouter");
const hostname = "localhost";
const port = 7000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/secret", secreetRouter);
app.use("/secret/", secreetIDRouter);

/*
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
*/
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
