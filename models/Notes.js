var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({
  _articleId: {
    type: Schema.Types.ObjectId,
    ref: "Article"

  },
  date: {
    type: Date,
    default: Date.now

  },
  noteText: String
  
});

var Notes = mongoose.model("Notes", noteSchema);

module.exports = Notes;
