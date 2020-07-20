const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers');
const axios = require('axios');

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server start port ${PORT}`));
