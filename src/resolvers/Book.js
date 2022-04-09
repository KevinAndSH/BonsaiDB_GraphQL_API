const BookResolvers = {
  id: book => book._id,
  publisher: async (book, _, { loaders }) => loaders.publisherLoader.load(book.publisherID),
  authors: async (book, _, { loaders, getUserDataFromReq }) => {
    getUserDataFromReq()
    return loaders.authorLoader.loadMany([...book.authorIDs])
  },
}

module.exports = BookResolvers
