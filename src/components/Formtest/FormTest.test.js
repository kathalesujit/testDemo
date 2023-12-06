import { render, screen } from "@testing-library/react";
import FormTest from "./FormTest";

describe("Application", () => {
    test("render correctly", () => {
        render(<FormTest />);

        const pageHeading = screen.getByRole("heading", {
            name: "Contact Form",
        });
        expect(pageHeading).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {
            name: "First Name",
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("First Name", {
            selector: "input",
        });
        expect(nameElement2).toBeInTheDocument();

        // const nameElement3 = screen.getByPlaceholderText("Fullname");
        // expect(nameElement3).toBeInTheDocument();

        // const nameElement4 = screen.getByDisplayValue("Vishwas");
        // expect(nameElement4).toBeInTheDocument();

        // const closeElement = screen.getByTitle("close");
        // expect(closeElement).toBeInTheDocument();

        // const imageElement = screen.getByAltText("a person with a laptop");
        // expect(imageElement).toBeInTheDocument();

        // const customElement = screen.getByTestId("custom-element");
        // expect(customElement).toBeInTheDocument();

        // const paragraphElement = screen.getByText("All fields are mandatory");
        // expect(paragraphElement).toBeInTheDocument();

        // const bioElement = screen.getByRole("textbox", {
        //     name: "Bio",
        // });
        // expect(bioElement).toBeInTheDocument;

        // const jobLocationElement = screen.getByRole("combobox");
        // expect(jobLocationElement).toBeInTheDocument();

        // const termsElement = screen.getByRole("checkbox");
        // expect(termsElement).toBeInTheDocument();

        // const termsElement2 = screen.getByLabelText(
        //     "I agree to the terms and conditions"
        // );
        // expect(termsElement2).toBeInTheDocument();

        // const submitElement = screen.getByRole("button");
        // expect(submitElement).toBeInTheDocument();
    });
});
