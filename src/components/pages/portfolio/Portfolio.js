import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './utils/projects';

export default function Portfolio() {
    return (
        projects.map((project) => (
            <ProjectCard key={project.id} project_title={project.project_title} image={project.image} github_url={project.github_url} deployed_url={project.deployed_url} description={project.description} />
        ))
    )
}