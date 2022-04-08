const { BookModel } = require("../model")

const AuthorResolvers = {
  id: author => author._id,
  fullName: author => [author.firstName, author.lastName].join(" ").trim(),
  //books: async author => BookModel.where("_id").in([...author.bookIDs]),
  books: async author => BookModel.find({ authorIDs: author._id }),
}

module.exports = AuthorResolvers
