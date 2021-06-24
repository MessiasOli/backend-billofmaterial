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

exports.update = (req, res) => {
  if(!fullBody(req.body)) {
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }
  Material.updateOne({...req.body}).then(data => {
    if(data.n == 1){
      res.send("Material atualizado com sucesso!");
    }
    else
    {
      res.status(404).send({ msg: "Material não encontrado!"});
    }
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

exports.findById = (req, res) => {
  if(!req.params.idprocess && !req.params.idmaterial){
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }

  let condition = { idprocess: req.params.idprocess ,idmaterial: req.params.idprocess }

  Material.find(condition).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({ msg: `Erro ao obter o Material de id: ${req.params.id} Erro: ${err}` })
  });
}

exports.delete = (req, res) => {
  if(!req.params.idprocess && !req.params.idmaterial){
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }

  let condition = { idprocess: req.params.idprocess ,idmaterial: req.params.idprocess }

  Material.deleteOne(condition).then(data => {
    if(data.n == 1){
      res.send("Material deletado com sucesso!")
    }
    else
    {
      res.status(404).send({ msg: "Material não encontrado!"});
    }
  }).catch(err => {
    res.status(500).send({ msg: `Erro ao obter o material de id: ${req.params.id} Erro: ${err}` })
  });
}