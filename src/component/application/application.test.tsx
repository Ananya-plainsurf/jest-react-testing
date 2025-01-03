import { render,screen } from "@testing-library/react"
import Application from "./application";


describe("Application Component",()=>{
    test("Application component renders correctly",()=>{
        render(<Application />);
        const textBoxElement =screen.getByRole('textbox');
        expect(textBoxElement).toBeInTheDocument();
        
        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument()
    })

})