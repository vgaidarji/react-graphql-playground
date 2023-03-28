import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  it("should render load countries button", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(await screen.findByText("Load countries")).toBeInTheDocument();
  });
});
