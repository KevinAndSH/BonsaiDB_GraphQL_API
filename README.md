# Bonsai Library - GraphQL API

(Upgraded TypeScript version [here](https://github.com/KevinAndSH/Bonsai_Library-GraphQL_API_TS)!)

GraphQL server made with [Apollo Server](https://www.apollographql.com/docs/apollo-server/), connected to a remote MongoDB database.

Allows for retrieving data for books, authors and publishing houses, as well as user registration and login, using [`bcryptjs`](https://github.com/dcodeIO/bcrypt.js) for encryption, and authentication with [JSON Web Token](https://github.com/auth0/node-jsonwebtoken), required to query authors' data, as well as for registering and updating books.

GraphQL schemas were made using the Schema Definition Language (SDL), and joined with their respective resolvers using the built-in GraphQL tools provided by Apollo Server, and [`dataloaders`](https://github.com/graphql/dataloader) were used to batch and cache queries in order to avoid the N + 1 queries issue GraphQL tends to bring.

Database was filled with fake data generated in the website [Mockaroo](https://www.mockaroo.com) with the help of the library [`fakerjs`](https://fakerjs.dev)

[Mongoose](https://mongoosejs.com) was used to create the data model to be used for our database, and to manage queries.

Files in `src/resolvers/` and `src/model/` are automatically imported to their respective `index.js` files, and their respective `module.exports` are saved in an object where the keys are the names of the files (removing the `.js` part, that is). This is especially important to keep in mind for `src/resolvers/`, where files have to be named exactly like the types defined in the GraphQL schema, otherwise they won't work.
