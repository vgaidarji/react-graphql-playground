import gql from "graphql-tag";

// https://dashboard.stepzen.com/explorer?endpoint=https://countries.trevorblades.com/graphql&query=query%20%7B%20countries%20%7B%20name%20%7D%20%7D
export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
      emoji
      capital
    }
  }
`;
