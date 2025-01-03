import { render, screen } from "@testing-library/react";
import IncrementButton, {
  handleDecrement,
  handleIncrement,
} from "./incrementButton";

describe("IncrementButton Component", () => {
  test("IncrementButton renders correctly", () => {
    render(<IncrementButton />);
    const incrementButtonElements = screen.getAllByRole("button");
    incrementButtonElements.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test("handleIncrement function increments correctly", () => {
    expect(handleIncrement(5)).toBe(6);
    expect(handleIncrement(0)).toBe(1);
    expect(handleIncrement(-1)).toBe(0);
  });

  test("handleDecrement function decrements correctly", () => {
    expect(handleDecrement(5)).toBe(4);
    expect(handleDecrement(0)).toBe(0);
  });
});
