import Routing from "./Routing";
import { render, screen } from "@testing-library/react";

/* eslint-disable react/display-name */
jest.mock("../components/countries/CountriesList", () => () => {
  return <>Countries component</>;
});
/* eslint-disable react/display-name */
jest.mock("../components/country/CountryComponent", () => () => {
  return <>Country component</>;
});

describe("Routing", () => {
  it("should render Home component", async () => {
    window.history.pushState({}, "", "/");

    render(<Routing />);

    expect(await screen.findByText(/load countries/i)).toBeInTheDocument();
  });

  it("should render CountriestList component", async () => {
    window.history.pushState({}, "", "/countries");

    render(<Routing />);

    expect(await screen.findByText(/countries component/i)).toBeInTheDocument();
  });

  it("should render CountriestList component", async () => {
    window.history.pushState({}, "", "/countries/MD");

    render(<Routing />);

    expect(await screen.findByText(/country component/i)).toBeInTheDocument();
  });
});
