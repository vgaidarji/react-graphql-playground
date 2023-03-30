import { Countries } from "../../types/Countries";
import { GET_COUNTRIES } from "./countriesGqlQuery";
import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "@apollo/client/errors";
import { ApiClientName } from "../api/ApiEndpoint";

export function getCountries(): [boolean, ApolloError | undefined, Countries] {
  const { loading, error, data } = useQuery<Countries>(GET_COUNTRIES, {
    context: { clientName: ApiClientName.countries }
  });
  return [loading, error, data as Countries];
}
