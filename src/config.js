const { gql } = require("apollo-server")
const jwt = require("jsonwebtoken")
const isISBN = require("is-isbn")

const schema = require("./schema")
const typeDefs = gql(schema)
const resolvers = require("./resolvers")
const context = ({ req }) => {
  const getUserDataFromReq = () => {
    const authHeader = req.headers?.authorization
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) throw new Error("Not logged in")
    const userData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    return userData
  }

  const createToken = userData => jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET)

  const validateISBN = isbn => isISBN.validate(isbn.replace("-", ""))

  return { createToken, getUserDataFromReq, validateISBN }
}

module.exports = { typeDefs, resolvers, context }
