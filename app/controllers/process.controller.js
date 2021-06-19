const db = require("../models");
const Process = db.process;

exports.create = (req, res) => {
  if(!req.body.process || !req.body.value || !req.body.unitmensurement) {
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }
  const process = new Process({...req.body})
  process.save(process).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      msg: err.message
    })
  })

}
    
exports.findAll = (req, res) => {
  let condition = {};
  Process.find(condition).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({ msg: "Erro ao obter lista de processs\nErro:" + err })
  })
}
