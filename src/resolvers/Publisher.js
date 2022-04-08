const { BookModel } = require("../model")

const PublisherResolvers = {
  id: publisher => publisher._id,
  //books: async publisher => BookModel.where("_id").in([...publisher.bookIDs])
  books: async publisher => BookModel.where("publisherID").eq(publisher._id)
}

module.exports = PublisherResolvers
