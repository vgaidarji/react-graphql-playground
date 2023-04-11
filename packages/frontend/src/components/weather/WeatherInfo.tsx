import { getWeatherForCountry } from "./getWeatherForCountryGqlRequest";

const WeatherInfo: React.FC<{ countryCapital: string }> = ({ countryCapital }) => {
  const [loading, error, weather] = getWeatherForCountry(countryCapital);

  if (loading) return <>loading weather...</>;
  if (error)
    return (
      <>
        <i>no weather info.</i>
      </>
    );

  return (
    <>
      {weather.main.temp} ({weather.weather[0].main}){" "}
    </>
  );
};

export default WeatherInfo;
