const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  url: dbConfig.url,
  process: require("./process.model.js")(mongoose),
  material: require("./material.model.js")(mongoose)
};

module.exports = db;