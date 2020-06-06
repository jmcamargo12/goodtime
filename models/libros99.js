const mongoose = require("mongoose");
const Schema = mong9.Schema;

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