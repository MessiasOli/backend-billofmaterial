module.exports = app => {
  let ctrProduto = require("../controllers/produto.controller");

  var router = require("express").Router();

  router.post("/", ctrProduto.create)
  router.get("/", ctrProduto.findAll)
  app.use("/api/produtos", router);
}