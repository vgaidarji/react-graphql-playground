import { Countries } from "../../types/Countries";
import { GET_COUNTRIES } from "./countriesGqlQuery";
import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "@apollo/client/errors";

export function getCountriesList(): [boolean, ApolloError | undefined, Countries] {
  const { loading, error, data } = useQuery<Countries>(GET_COUNTRIES);
  return [loading, error, data as Countries];
}
