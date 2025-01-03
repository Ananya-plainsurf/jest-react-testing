import React from 'react';

interface SkillsProps {
    skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div>
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;