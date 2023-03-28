import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render App root component", async () => {
    const { container } = render(<App />);

    expect(container.getElementsByClassName("App").length).toBe(1);
    expect(await screen.findByText(/load countries/i)).toBeInTheDocument();
  });
});
