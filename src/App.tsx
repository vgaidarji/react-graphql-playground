import * as React from "react";

import CountriesList from './components/Countries/CountriesList';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <CountriesList />
      </ApolloProvider>
    </div>
  );
}

export default App;
