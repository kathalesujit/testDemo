import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const increamentElement = screen.getByRole("button", {
      name: "Increament",
    });
    expect(increamentElement).toBeInTheDocument();
  });
  test("render a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });
  test("render count of 1 after clicking the increament button", async () => {
    // const user = userEvent();
    render(<Counter />);
    const increamentElement = screen.getByRole("button", {
      name: "Increament",
    });
    userEvent.click(increamentElement);
    // await user.click(increamentElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
  test("render count of 10 after clicking the set button", async () => {
    // const user = userEvent();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focus in a right order", async () => {
    // const user = userEvent();
    render(<Counter />);
    const increamentElement = screen.getByRole("button", {
      name: "Increament",
    });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    await userEvent.tab();
    expect(increamentElement).toHaveFocus();
    await userEvent.tab();
    expect(amountInput).toHaveFocus();
    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
