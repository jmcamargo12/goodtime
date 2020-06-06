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
};
