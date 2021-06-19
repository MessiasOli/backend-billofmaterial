module.exports = app => {
  let ctrProces = require("../controllers/process.controller");

  var router = require("express").Router();

  router.post("/", ctrProces.create)
  router.get("/", ctrProces.findAll)
  app.use("/api/process", router);
}