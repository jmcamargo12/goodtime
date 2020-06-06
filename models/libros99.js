const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lir = new Schema({
  title: {
    type: String,
  },

  authors: {
    type: String,
  },

  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});


const documents = mongoose.model("documents", lir);

module.exports = documents;