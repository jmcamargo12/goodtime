const documents = require("../models/libros99");

module.exports = function (app) {
  app.get("/api/libros99/", function (req, res) {
    documents
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/books", function (req, res) {
    documents
      .create({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
