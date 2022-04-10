# Bonsai Library - GraphQL API

GraphQL server made with [Apollo Server](https://www.apollographql.com/docs/apollo-server/), connected to a remote MongoDB database.

Allows for retrieving data for books, authors and publishing houses, as well as user registration and login, using [`bcryptjs`](https://github.com/dcodeIO/bcrypt.js) for encryption, and authentication with [JSON Web Token](https://github.com/auth0/node-jsonwebtoken), required to query authors' data, as well as for registering and updating books.

GraphQL schemas were made using the Schema Definition Language (SDL), and joined with their respective resolvers using the built-in GraphQL tools provided by Apollo Server, using [`dataloaders`](https://github.com/graphql/dataloader) to batch and cache queries in order to avoid the N + 1 queries issue.

Queries to the database are managed with [Mongoose](https://mongoosejs.com).

Files in `src/resolvers/` and `src/model/` are automatically imported to their respective `index.js` files, and their respective `module.exports` are saved in an object where the keys are the names of the files (removing the `.js` part, that is). This is especially important to keep in mind for `src/resolvers/`, where files have to be named exactly like the types defined in the GraphQL schema, otherwise they won't work.
