// const express = require('express');
// const { graphqlHTTP } = require('express-graphql');
// const cors = require('cors');
// const schema = require('./schema');

// const app = express();
// app.use(cors());
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`server start port ${PORT}`));

// const typeDefs = gql`
//   type Query {
//     launches: [Launches]
//     launch(flight_number: Int): [Launch]
//     rockets: [Rockets]
//     rocket: [Rocket]
//   }
//   type Launches {
//     flight_number: Int
//     mission_name: String
//     launch_year: String
//     launch_date_local: String
//     launch_success: Boolean
//     rocket: [Rocket]
//   }
//   type Launch {
//     flight_number: Int
//   }

//   type Rockets {
//     rocket_id: String
//     rocket_name: String
//     rocket_type: String
//   }
//   type Rocket {
//     rocket_id: String
//   }
// `;
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const axios = require('axios');

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server start port ${PORT}`));
