import { Country } from "../../types/Country";
import { GET_COUNTRY } from "./countryGqlQuery";
import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "@apollo/client/errors";
import { ApiClientName } from "../api/ApiEndpoint";

export function getCountry(countryCode: string): [boolean, ApolloError | undefined, Country] {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { countryCode: countryCode },
    context: { clientName: ApiClientName.countries }
  });
  return [loading, error, data?.country as Country];
}
