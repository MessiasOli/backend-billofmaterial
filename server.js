const express = require("express")
const cors = require("cors");

const app = express();
var corsOptions = {
  origin : "*",
  optionsSuccessStatus: 200
}

// Ativa a configuração CORS
app.use(cors(corsOptions));

// Parseia requisições do tipo Json
app.use(express.json());

// Parseia também requisições do tipo HTML
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({server: `Servidor Rodando!`})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}.`));

const db = require("./app/models/index");
db.mongoose.connect( db.url, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(()=>{
  console.log("Banco de dados conectado!");
}).catch(err => {
  console.log("Não foi possível conectar ao banco de dados", err)
  process.exit();
})

require("./app/routes/process.routes")(app)
require("./app/routes/material.routes")(app)
require("./app/routes/default.routes")(app)