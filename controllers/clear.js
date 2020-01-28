var db = require("../models");

module.exports = {
  clearDB: function(req, res) {
    db.Headline.deletOne({})
      .then(function() {
        return db.Note.deleteOne({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};