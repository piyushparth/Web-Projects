import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'To-Do List',
      description: 'A responsive task management app built with React and CSS. Features task addition, deletion, and filtering.',
      tech: 'React JS, JavaScript, CSS, HTML'
    },
    {
      name: 'Student Data Collection Web App',
      description: 'A full-stack app to collect and manage student data using React and Django Rest Framework.',
      tech: 'React JS, Django, PostgreSQL/SQLite'
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio built with React to showcase projects and skills.',
      tech: 'React JS, JavaScript, CSS, HTML'
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small>{project.tech}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
