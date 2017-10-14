var db = require("../models");

module.exports = {
  findOne: function(req, res) {
    db.Notes
      .findOne(req.query).then(function(dbNotes) {
        res.json(dbNotes);

    });
  },

  create: function(req, res) {
    db.Notes
      .create(req.body).then(function(dbNotes) {
        res.json(dbNotes);
    });
  }
};
