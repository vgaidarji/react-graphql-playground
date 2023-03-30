import gql from "graphql-tag";

// https://dashboard.stepzen.com/explorer?endpoint=https://public2129e7bae524fdad.stepzen.net/api/openweathermap/__graphql
export const GET_WEATHER_FOR_COUNTRY = gql`
  query GetWeatherForCountry($appId: String, $q: String, $units: String) {
    weather: openweathermapQuery(appid: $appId, q: $q, units: $units) {
      base
      clouds {
        all
      }
      cod
      coord {
        lat
        lon
      }
      dt
      id
      main {
        feels_like
        humidity
        pressure
        temp
        temp_max
        temp_min
      }
      name
      sys {
        country
        id
        sunrise
        sunset
        type
      }
      timezone
      visibility
      weather {
        description
        icon
        id
        main
      }
      wind {
        deg
        speed
      }
    }
  }
`;
