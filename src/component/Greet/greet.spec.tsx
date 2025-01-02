import Greet from "./Greet"
import {render,screen}  from "@testing-library/react"
// test("Greet component renders correctly",()=>{
//     render(<Greet />);
//     const greetComponent = screen.getByText(/Hello World/i);
//     expect(greetComponent).toBeInTheDocument()
// })


/* 
Greet should render the text hello and if a name is 
passed into the component it should render hello 
followed by the name passed in
TDD ( Test Driven Development)
*/

describe("Greet Component",()=>{
 test('Greet Component renders correctly',()=>{
        render(<Greet />);
        const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
})

test("Greet component renders the name correctly",()=>{
    render(<Greet name ='Ananya'/>);
    const textElement = screen.getByText(/Hello Ananya/i);
    expect(textElement).toBeInTheDocument();
})
})