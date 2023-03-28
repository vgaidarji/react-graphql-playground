import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import CountriesList from "./CountriesList";
import { getCountries } from "./getCountries";
import { Countries } from "../../types/Countries";
import { ApolloError } from "@apollo/client/errors";

jest.mock("../Countries/getCountries");
const mockedGetCountries = getCountries as jest.MockedFunction<typeof getCountries>;

describe("CountriesList", () => {
  it("should render loading state", async () => {
    const isLoading = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedGetCountries.mockReturnValueOnce([isLoading, null as any, {} as Countries]);

    render(
      <MemoryRouter>
        <MockedProvider addTypename={false}>
          <CountriesList />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("should render error state", async () => {
    mockedGetCountries.mockReturnValueOnce([
      false,
      new ApolloError({ errorMessage: "" }),
      {} as Countries
    ]);

    render(
      <MemoryRouter>
        <MockedProvider addTypename={false}>
          <CountriesList />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(await screen.findByText("Something went wrong!")).toBeInTheDocument();
  });

  it("should render countries", async () => {
    const testCountries = {
      countries: [
        {
          name: "Monaco",
          code: "MC",
          emoji: "🇲🇨",
          capital: "Monaco"
        },
        {
          name: "Moldova",
          code: "MD",
          emoji: "🇲🇩",
          capital: "Chișinău"
        },
        {
          name: "Montenegro",
          code: "ME",
          emoji: "🇲🇪",
          capital: "Podgorica"
        }
      ]
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedGetCountries.mockReturnValueOnce([false, null as any, testCountries]);

    render(
      <MemoryRouter>
        <MockedProvider addTypename={false}>
          <CountriesList />
        </MockedProvider>
      </MemoryRouter>
    );

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4); // +1 for header row
    expect(rows[1].textContent).toContain("Monaco");
    expect(rows[2].textContent).toContain("Moldova");
    expect(rows[3].textContent).toContain("Montenegro");
  });
});
