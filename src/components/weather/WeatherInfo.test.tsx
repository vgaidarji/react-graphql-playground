import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ApolloError } from "@apollo/client";
import { getWeatherForCountry } from "./getWeatherForCountryGqlRequest";
import { Weather } from "../../types/Weather";
import WeatherInfo from "./WeatherInfo";

jest.mock("./getWeatherForCountryGqlRequest");
const mockedGetWeatherForCountry = getWeatherForCountry as jest.MockedFunction<
  typeof getWeatherForCountry
>;

describe("WeatherInfo component", () => {
  it("should render loading state", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedGetWeatherForCountry.mockReturnValueOnce([true, null as any, {} as Weather]);

    render(
      <MemoryRouter>
        <WeatherInfo countryCapital={""} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/loading weather.../i)).toBeInTheDocument();
  });

  it("should render error state", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedGetWeatherForCountry.mockReturnValueOnce([
      false,
      new ApolloError({ errorMessage: "" }),
      {} as Weather
    ]);

    render(
      <MemoryRouter>
        <WeatherInfo countryCapital={""} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/no weather info./i)).toBeInTheDocument();
  });

  it("should render weather info", async () => {
    const weather: Weather = {
      wind: {
        speed: 0,
        deg: 0
      },
      name: "",
      main: {
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        temp: 33,
        temp_max: 0,
        temp_min: 0
      },
      weather: [
        {
          main: "clear sky",
          description: "",
          icon: ""
        }
      ]
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedGetWeatherForCountry.mockReturnValueOnce([false, null as any, weather]);

    render(
      <MemoryRouter>
        <WeatherInfo countryCapital={"MD"} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/33/i)).toBeInTheDocument();
    expect(await screen.findByText(/clear sky/i)).toBeInTheDocument();
  });
});
