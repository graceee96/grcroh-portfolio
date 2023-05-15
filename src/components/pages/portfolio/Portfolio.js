import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects'

export default function Portfolio() {
    return (
        <div className="h-100">
            <h2 className="section-title mb-4">Portfolio.</h2>
            <div className="d-flex flex-wrap justify-content-around gap-3 p-2">
                {
                    projects.map((project) => (
                        <ProjectCard key={project.id} project_title={project.project_title} image={project.image} github_url={project.github_url} deployed_url={project.deployed_url} description={project.description} />
                    ))
                }
            </div>
        </div>
        
    )
}

console.log(projects);