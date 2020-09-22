const express = require("express");
const bodyParser = require("body-parser");
const secreetIDRouter = express.Router();

secreetIDRouter.use(bodyParser.json());

secreetIDRouter
  .route("/:secretID")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("SECRET GET method: " + req.params.secretID + "sended");
  })

  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported /secret/ ${req.params.secretID}`);
  })

  .put((req, res, next) => {
    res.write(`PUT: update secret ${req.params.secretID}`);
    res.end(
      "Update secret" + req.body.name + "with details" + req.body.description
    );
  })

  .delete((req, res, next) => {
    res.end(`DELEting all SECRETS ${req.params.secretID}`);
  });

module.exports = secreetIDRouter;
