const mongoose = require("mongoose")

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  foundationYear: {
    type: Number,
  },
  bookIDs: {
    type: [mongoose.Types.ObjectId],
    required: true,
  },
})

module.exports = mongoose.model("Publisher", publisherSchema)
