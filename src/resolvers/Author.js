const AuthorResolvers = {
  id: author => author._id,
  fullName: author => [author.firstName, author.lastName].join(" ").trim(),
  books: async (author, _, { loaders }) => loaders.bookLoader.loadMany([...author.bookIDs]),
}

module.exports = AuthorResolvers
