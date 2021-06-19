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

exports.update = (req, res) => {
  if(!req.body.process || !req.body.value || !req.body.unitmensurement) {
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }
  Process.updateOne({...req.body}).then(data => {
    if(data.n == 1){
      res.send("Processo atualizado com sucesso!");
    }
    else
    {
      res.status(404).send({ msg: "Processo não encontrado!"});
    }
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

exports.findById = (req, res) => {
  if(!req.params.id){
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }

  Process.findById(req.params.id).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({ msg: `Erro ao obter o processo de id: ${req.params.id} Erro: ${err}` })
  });
}

exports.delete = (req, res) => {
  if(!req.params.id){
    res.status(400).send({ msg: "Requisição incompleta: dados ausentes" })
    return;
  }

  let condition = {_id: req.params.id};

  Process.deleteOne(condition).then(data => {
    if(data.n == 1){
      res.send("Processo deletado com sucesso!")
    }
    else
    {
      res.status(404).send({ msg: "Processo não encontrado!"});
    }
  }).catch(err => {
    res.status(500).send({ msg: `Erro ao obter o processo de id: ${req.params.id} Erro: ${err}` })
  });
}


