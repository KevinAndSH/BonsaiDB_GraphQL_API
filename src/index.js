const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")
const serverConfig = require("./config")

mongoose.connect(process.env.DB_URI, () => console.log("Connected to the database"))

const server = new ApolloServer(serverConfig)

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => console.log(`Server running at ${url}`))
