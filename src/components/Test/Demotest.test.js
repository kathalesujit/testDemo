import { render, screen } from "@testing-library/react"
import Demotest from "./Demotest"

test("Demotest render correctly", () => {
    render(<Demotest />)
    const testElement = screen.getByText(/demotest/i);
    expect(testElement).toBeInTheDocument();
});

test("Demotest with props data (TDD approach)", () => {
    render(<Demotest name="Test Driven Development" />)
    const testElement2 = screen.getByText("Demotest Test Driven Development");
    expect(testElement2).toBeInTheDocument();
})