const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const omdbSchema = require("./schema/schema");

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: omdbSchema,
  graphiql: true,
}));

const port = 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);