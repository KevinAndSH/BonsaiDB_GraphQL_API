const PublisherResolvers = {
  id: publisher => publisher._id,
  books: async (publisher, _, { loaders }) => loaders.bookLoader.loadMany([...publisher.bookIDs]),
}

module.exports = PublisherResolvers
