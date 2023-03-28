import { Country } from "../../types/Country";
import { GET_COUNTRY } from "./countryGqlQuery";
import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "@apollo/client/errors";

export function getCountry(countryCode: string): [boolean, ApolloError | undefined, Country] {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { countryCode: countryCode }
  });
  return [loading, error, data?.country as Country];
}
