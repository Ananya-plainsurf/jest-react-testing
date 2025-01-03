import {render,screen} from "@testing-library/react";
import Skills from "./skills";

describe("skills component",()=>{
    const skills = ['React','Node','Express','MongoDB'];

    test("skills renders correctly",()=>{
        render(<Skills skills={skills} />);
        const skillsElement = screen.getByRole('list');
        expect(skillsElement).toBeInTheDocument();
    })

    test("renders list of skills",()=>{
        render(<Skills skills={skills} />);
        const allSkillsElement = screen.getAllByRole('listitem');
        expect(allSkillsElement).toHaveLength(skills.length);
    })
})