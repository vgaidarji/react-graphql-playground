import { Weather } from "../../types/Weather";
import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "@apollo/client/errors";
import { GET_WEATHER_FOR_COUNTRY } from "./weatherForCountryGqlQuery";
import { ApiClientName } from "../api/ApiEndpoint";

export function getWeatherForCountry(
  countryName: string
): [boolean, ApolloError | undefined, Weather] {
  const { loading, error, data } = useQuery(GET_WEATHER_FOR_COUNTRY, {
    variables: {
      // REACT_APP_OPENWEATHERMAP_API_KEY comes from .env
      appId: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
      q: countryName,
      units: "metric"
    },
    context: { clientName: ApiClientName.openWeatherMap }
  });
  return [loading, error, data?.weather as Weather];
}
