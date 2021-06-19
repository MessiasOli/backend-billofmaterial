module.exports = app => {
  let ctrProces = require("../controllers/process.controller");

  var router = require("express").Router();

  router.post("/", ctrProces.create)
  router.get("/", ctrProces.findAll)
  router.get("/:id", ctrProces.findById)
  router.put("/", ctrProces.update)
  router.delete("/:id", ctrProces.delete)
  app.use("/api/process", router);
}