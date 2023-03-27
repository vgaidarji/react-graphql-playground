import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import CountriesList from "./CountriesList";

describe("countries list component", () => {
  it("renders loading state", async () => {
    const loadingState = { state: { loading: true } };

    render(
      <MemoryRouter initialEntries={[loadingState]}>
        <MockedProvider addTypename={false}>
          <CountriesList />
        </MockedProvider>
      </MemoryRouter>
    );
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", async () => {
    const errorState = { state: { loading: false, error: new Error("") } };

    render(
      <MemoryRouter initialEntries={[errorState]}>
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
    const successfulCase = { state: { loading: false, error: null, data: testCountries } };

    render(
      <MemoryRouter initialEntries={[successfulCase]}>
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
