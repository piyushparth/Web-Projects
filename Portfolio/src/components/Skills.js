import React from 'react';

function Skills() {
  const skills = ['HTML', 'CSS', 'React JS', 'JavaScript', 'Bootstrap', 'Java', 'C++', '.NET', 'ServiceNow'];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
