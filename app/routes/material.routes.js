module.exports = app => {
  let ctrMatirial = require("../controllers/material.controller");

  var router = require("express").Router();

  router.post("/", ctrMatirial.create)
  router.get("/", ctrMatirial.findAll)
  router.get("/:id", ctrMatirial.findById)
  router.put("/", ctrMatirial.update)
  router.delete("/:id", ctrMatirial.delete)
  app.use("/api/material", router);
}