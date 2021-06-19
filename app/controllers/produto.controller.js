const db = require("../models");
const Produto = db.produto;

exports.create = (req, res) => {
  if(!req.body.titulo || !req.body.descricao || !req.body.preco) {
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }
  const produto = new Produto({...req.body})
  produto.save(produto).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      msg: err.message
    })
  })

}
    
exports.findAll = (req, res) => {
  let condition = {};
  Produto.find(condition).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({ msg: "Erro ao obter lista de produtos\nErro:" + err })
  })
}