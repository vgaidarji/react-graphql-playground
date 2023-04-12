import * as React from "react";
import Routing from "./routing/Routing";

import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
import { ApiEndpoint, ApiClientName } from "./components/api/ApiEndpoint";

const client = new ApolloClient({
  link: createApolloLink(),
  cache: new InMemoryCache()
});

function createApolloLink() {
  return ApolloLink.split(
    (operation) => operation.getContext().clientName === ApiClientName.countries,
    new HttpLink({ uri: ApiEndpoint.countries }), // <= first match if clientName matches
    new HttpLink({ uri: ApiEndpoint.openWeatherMap }) // <= fallback
  );
}

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Routing />
      </ApolloProvider>
    </div>
  );
}

export default App;
