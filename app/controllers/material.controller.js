const db = require("../models");
const Material = db.material;

exports.create = (req, res) => {
  if(!fullBody(req.body)) {
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }
  const material = new Material({...req.body})
  material.save(material).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      msg: err.message
    })
  })

}
    
exports.findAll = (req, res) => {
  let condition = {};
  Material.find(condition).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({ msg: "Erro ao obter lista de materials\nErro:" + err })
  })
}

let fullBody = (mat) => {
  console.log('mat :>> ', mat);
  if( !mat.idprocess ||
      !mat.description ||
      !mat.price == null ||
      !mat.unitmensurement ||
      !mat.specificvalue == null){
        return false
      }
  return true
}