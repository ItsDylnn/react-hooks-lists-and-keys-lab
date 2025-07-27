import React from "react";
import ProjectItem from "./ProjectItem";
import projects from "../data/projects";

function ProjectList() {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;
