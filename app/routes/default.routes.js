module.exports = app => {
  var router = require("express").Router();
  let msg = {
    info: "Rota não econtrada!", 
    process: "https://b-bom-ra-sc3009572.herokuapp.com/api/process",
    material: "https://b-bom-ra-sc3009572.herokuapp.com/api/material"
  }

  router.get("/*", (req, res) =>{
    res.status(404).send({ msg })
    return
  })
  router.post("/*", (req, res) =>{
    res.status(404).send({ msg })
    return
  })
  router.put("/*", (req, res) =>{
    res.status(404).send({ msg })
    return
  })
  router.delete("/*", (req, res) =>{
    res.status(404).send({ msg })
    return
  })
  app.use("/*", router);
}