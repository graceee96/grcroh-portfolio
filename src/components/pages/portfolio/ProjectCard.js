import React from 'react';

export default function ProjectCard({ id, project_title, image, github_url, deployed_url, description }) {
    return (
        <div key={id} className="project-card p-2">
            <h5 className="project-title">{project_title}</h5>

            <picture className="project-screenshot">
                <img src={image} alt={`Screenshot of ${project_title}`} className="img-fluid" />
            </picture>

            <p className="project-description mt-3 px-2">{description}</p>

            <div className="project-links d-flex justify-content-between">
                <Link to={github_url}>Link to GitHub</Link>
                <Link to={deployed_url}>Link to application</Link>
            </div>
        </div>
)
}