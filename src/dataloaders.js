const DataLoader = require("dataloader")
const { BookModel, AuthorModel, PublisherModel } = require("./model")

const mapResultsByIDs = (results, ids, fieldName = "entry") => ids.map(id => (
  results.find(result => result._id + "" === id + "") ?? new Error(`No ${fieldName} with id ${id} was found`)
))

const getBooksByIDs = async bookIDs => {
  const books = await BookModel.where("_id").in([...bookIDs])
  return mapResultsByIDs(books, bookIDs, "book")
}

const getAuthorsByIDs = async authorIDs => {
  const authors = await AuthorModel.where("_id").in([...authorIDs])
  return mapResultsByIDs(authors, authorIDs, "author")
}

const getPublishersByIDs = async publisherIDs => {
  const publishers = await PublisherModel.where("_id").in([...publisherIDs])
  return mapResultsByIDs(publishers, publisherIDs, "publisher")
}

const createDataLoaders = () => ({
  bookLoader: new DataLoader(getBooksByIDs),
  authorLoader: new DataLoader(getAuthorsByIDs),
  publisherLoader: new DataLoader(getPublishersByIDs)
})

module.exports = createDataLoaders
