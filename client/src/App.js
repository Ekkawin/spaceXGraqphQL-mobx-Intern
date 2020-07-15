import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './styles/style.css';
import './styles/tailwind.css';
import 'antd/dist/antd.css';
import { SpaceXBody } from './components/SpaceXBody';

const LAUNCHES_QUERY = gql`
  query LaunchesQurey($limit: Int) {
    launches(limit: $limit) {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
const ShowItem = ({ numberOfFetchData, setNumberOfFetchData }) => {
  console.log('numberoffectchdata', numberOfFetchData);
  const { loading, error, data } = useQuery(LAUNCHES_QUERY, {
    variables: { limit: numberOfFetchData },
  });
  if (loading && data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <SpaceXBody
      data={data.launches}
      setNumberOfFetchData={setNumberOfFetchData}
      numberOfFetchData={numberOfFetchData}
    />
  );
};

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  const [numberOfFetchData, setNumberOfFetchData] = useState(5);
  return (
    <ApolloProvider client={client}>
      <ShowItem
        numberOfFetchData={numberOfFetchData}
        setNumberOfFetchData={setNumberOfFetchData}
      />
    </ApolloProvider>
  );
}

export default App;
