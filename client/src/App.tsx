import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './styles/style.css';
import './styles/tailwind.css';
import 'antd/dist/antd.css';
import { Route } from 'react-router-dom';
import { Home } from './components/Home';
import { LaunchButton } from './components/LaunchButton';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/LaunchButton/:id"
        render={(props) => <LaunchButton {...props} />}
      />
    </ApolloProvider>
  );
}

export default App;
