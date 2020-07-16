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
import { Route } from 'react-router-dom';
import { ShowItems } from 'components/ShowItems';
import { LaunchButton } from 'components/LaunchButton';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Route exact path="/" component={ShowItems} />
      <Route
        exact
        path="/LaunchButton/:id"
        render={(props) => <LaunchButton {...props} />}
      />
    </ApolloProvider>
  );
}

export default App;

// <Route exact path="/LaunchButton/:aek" component={LaunchButtonByID} />
// <Route exact path="/LaunchButton/:aek" render={(props) => <LaunchButtonByID {...props}/>} />

// <Link to="/LauchButton/pang"></Link>

// props.aek -> pang

// /pang?id=1&name=pang
