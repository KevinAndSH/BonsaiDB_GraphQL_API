const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  isbn: {
    type: String,
    required: true,
    trim: true,
  },
  synopsis: {
    type: String,
    trim: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  publicationYear: {
    type: Number,
  },
  authorIDs: {
    type: [mongoose.Types.ObjectId],
    required: true,
  },
  publisherID: {
    type: mongoose.Types.ObjectId,
    required: true,
  }
})

module.exports = mongoose.model("Book", bookSchema)
