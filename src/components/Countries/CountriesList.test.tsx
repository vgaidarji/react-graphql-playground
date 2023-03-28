import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import CountriesList from "./CountriesList";
import { getCountriesList } from "./getCountriesList";
import { Countries } from "../../types/Countries";
import { ApolloError } from "@apollo/client/errors";

jest.mock("../Countries/GetCountriesList");
const mockedGetCountriesList = getCountriesList as jest.MockedFunction<typeof getCountriesList>;

describe("CountriesList", () => {
  it("renders loading state", async () => {
    const isLoading = true;
    mockedGetCountriesList.mockReturnValueOnce([isLoading, null as any, {} as Countries]);

    render(
      <MemoryRouter>
        <MockedProvider addTypename={false}>
          <CountriesList />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", async () => {
    mockedGetCountriesList.mockReturnValueOnce([
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

  it("renders countries successfully", async () => {
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
    mockedGetCountriesList.mockReturnValueOnce([false, null as any, testCountries]);

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
