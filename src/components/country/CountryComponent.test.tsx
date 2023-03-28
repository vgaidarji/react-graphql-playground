import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CountryComponent from "./CountryComponent";
import { getCountry } from "./getCountry";
import { ApolloError } from "@apollo/client";
import { Country } from "../../types/Country";

jest.mock("../Country/GetCountry");
const mockedGetCountry = getCountry as jest.MockedFunction<typeof getCountry>;

describe("country component", () => {
  it("should render loading state", async () => {
    const countryState = { state: { country: {} } };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedGetCountry.mockReturnValueOnce([true, null as any, {} as Country]);

    render(
      <MemoryRouter initialEntries={[countryState]}>
        <CountryComponent />
      </MemoryRouter>
    );

    expect(await screen.findByText("Loading country information...")).toBeInTheDocument();
  });

  it("should render error state", async () => {
    const countryState = { state: { country: {} } };
    mockedGetCountry.mockReturnValueOnce([
      false,
      new ApolloError({ errorMessage: "" }),
      {} as Country
    ]);

    render(
      <MemoryRouter initialEntries={[countryState]}>
        <CountryComponent />
      </MemoryRouter>
    );

    expect(await screen.findByText("Something went wrong!")).toBeInTheDocument();
  });

  it("should render country", async () => {
    const countryState = { state: { country: { code: "MD" } } };
    const country = {
      name: "Moldova",
      code: "MD",
      emoji: "🇲🇩",
      capital: "Chișinău"
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedGetCountry.mockReturnValueOnce([false, null as any, country]);

    render(
      <MemoryRouter initialEntries={[countryState]}>
        <CountryComponent />
      </MemoryRouter>
    );

    expect(await screen.findByText("Moldova")).toBeInTheDocument();
  });
});
