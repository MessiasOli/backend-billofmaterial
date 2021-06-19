module.exports = app => {
  let ctrMatirial = require("../controllers/material.controller");

  var router = require("express").Router();

  router.post("/", ctrMatirial.create)
  router.get("/", ctrMatirial.findAll)
  app.use("/api/material", router);
}