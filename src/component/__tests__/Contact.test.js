
import { render,screen,cleanup} from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

test("To check the contact",() =>  {
    render(<Contact/>);
    const heading = screen.getAllByRole('heading');
    console.log(heading.length);
    expect(heading).toBeDefined();
    
 
})
test("To check the contact",() =>  {
    render(<Contact/>);
    const heading = screen.getAllByRole('link');
    expect(heading).toBeDefined();
}) 
