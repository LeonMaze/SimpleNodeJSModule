const express = require("express");
const bodyParser = require("body-parser");
const secreetRouter = express.Router();

secreetRouter.use(bodyParser.json());

secreetRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("SECRET GET method");
  })

  .post((req, res, next) => {
    res.write(`POST: secret ${req.body}`);
    res.end(`POST the secret: ${req.body.name} with ${req.body.description} `);
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT: operation not supported for /secret`);
  })

  .delete((req, res, next) => {
    res.end(`DELEting all SECRETS`);
  });

module.exports = secreetRouter;
