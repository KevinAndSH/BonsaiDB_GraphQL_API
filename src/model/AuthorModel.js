const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  bookIDs: {
    type: [mongoose.Types.ObjectId],
    required: true,
  },
})

module.exports = mongoose.model("Author", authorSchema)
