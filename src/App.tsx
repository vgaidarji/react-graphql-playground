import * as React from "react";
import Routing from "./routing/Routing";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
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
