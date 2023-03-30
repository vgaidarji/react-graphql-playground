export enum ApiEndpoint {
  countries = "https://countries.trevorblades.com/graphql",
  openWeatherMap = "https://public2129e7bae524fdad.stepzen.net/api/openweathermap/__graphql"
}

/**
 * Used to choose from list of APIs API client needed to perform given operations.
 * Apollo API client doesn't support multiple endpoints by default,
 * so this achieved via supply of different HttpLink's based on clientName passed
 * through useQuery apollo react hook context parameter.
 */
export enum ApiClientName {
  countries = "countries-api",
  openWeatherMap = "openweathermap-api"
}
