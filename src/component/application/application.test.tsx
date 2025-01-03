import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application Component", () => {
  test("Application component renders correctly", () => {
    render(<Application />);
    const textBoxElement = screen.getByRole("textbox", { name: /name/i });
    expect(textBoxElement).toBeInTheDocument();

    const textboxElement2 = screen.getByPlaceholderText("name");
    expect(textboxElement2).toBeInTheDocument();

    const nameElement = screen.getByDisplayValue("Ananya");
    expect(nameElement).toBeInTheDocument();

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
      level: 5,
    });
    expect(headingElement2).toBeInTheDocument();

    const headingElement3 = screen.getByLabelText(
      "Name:"
      //     ,{
      //     selector:'input'
      // }
    );
    expect(headingElement3).toBeInTheDocument();

    const termsElementLabel = screen.getByLabelText(
      "I accept the terms and conditions"
    );
    expect(termsElementLabel).toBeInTheDocument();
  });
});

/* 
1. getByAltText -> used in image
2. getByTitle  -> used to get the title
3. getByDataTestId -> used to get the data-testid
4. getByRole -> used to get the role
5. getByLabelText -> used to get the label text
6. getByPlaceholderText -> used to get the placeholder text
7. getByDisplayValue -> used to get the display value
8. getByText -> used to get the text
9. getByTestId -> used to get the test id
10. getBySelectText -> used to get the select text
11. getByDisplayValue -> used to get the display value
*/