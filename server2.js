const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Profile = require('./schema/mongooseschema');
const express = require('express');
const { graphqlExpress } = require('apollo-server-express');

const { makeExecutableSchema } = require('graphql-tools');

const myGraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 5000;

const app = express();

// bodyParser is needed just for POST.
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.listen(PORT);
