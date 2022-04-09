const { gql } = require("apollo-server")
const jwt = require("jsonwebtoken")
const isISBN = require("is-isbn")
const createDataLoaders = require("./dataloaders")

const schema = require("./schema")
const typeDefs = gql(schema)
const resolvers = require("./resolvers")
const context = async ({ req }) => {
  const getUserDataFromReq = () => {
    const authHeader = req.headers?.authorization
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) throw new Error("Login required")
    const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    return userData
  }

  const createToken = userData => jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET)

  const validateISBN = isbn => isISBN.validate(isbn.replace("-", ""))

  const loaders = createDataLoaders()

  return { createToken, getUserDataFromReq, validateISBN, loaders }
}

module.exports = { typeDefs, resolvers, context }
