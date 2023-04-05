import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

describe("Home page", () => {
  it("should render load countries button", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(await screen.findByText(/load countries/i)).toBeInTheDocument();
  });

  it("should navigate to countries component on load button click", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const loadCountriesButton = screen.getByText(/load countries/i);
    fireEvent.click(loadCountriesButton);

    expect(mockNavigate).toHaveBeenCalledWith("/countries");
  });
});
