const { AuthorModel, PublisherModel } = require("../model")

const BookResolvers = {
  id: book => book._id,
  publisher: async book => PublisherModel.findById(book.publisherID),
  authors: async book => AuthorModel.where("_id").in([...book.authorIDs]),
}

module.exports = BookResolvers
