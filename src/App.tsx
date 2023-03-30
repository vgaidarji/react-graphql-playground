import * as React from "react";
import Routing from "./routing/Routing";

import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
import { ApiEndpoint, ApiClientName } from "./components/api/ApiEndpoint";

const countriesLink = new HttpLink({ uri: ApiEndpoint.countries });
const openWeatherMapLink = new HttpLink({ uri: ApiEndpoint.openWeatherMap });
const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === ApiClientName.countries,
    countriesLink, // <= first match if clientName matches
    openWeatherMapLink // <= fallback
  ),
  cache: new InMemoryCache()
});

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
