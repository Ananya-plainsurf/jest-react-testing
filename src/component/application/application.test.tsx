import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application Component", () => {
  test("Application component renders correctly", () => {
    render(<Application />);
    const textBoxElement = screen.getByRole("textbox", { name: /name/i });
    expect(textBoxElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: /bio/i });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();

    const headingElement2 = screen.getByRole("heading", {
      level: 5
    });
    expect(headingElement2).toBeInTheDocument();
  });
});
