import React from 'react';

const styles = {
    card: {
        width: '48%',
        border: '2px solid #575555'
    },
    title: {
        fontWeight: 600,
        fontSize: '2.25vw',
        textAlign: 'center',
    },
    screenshot: {
        width: '97%',
        display: 'block',
        margin: '0 auto',
    },
    info: {
        fontFamily: "'Roboto Mono', monospace",
        fontSize: '1vw',
    },
    links: {
        textDecoration: 'none',
        color: '#59CD90',
        fontWeight: 500,
        fontSize: '1.25vw'
    }
}

export default function ProjectCard({ id, project_title, image, github_url, deployed_url, description }) {
    return (
        <div key={id} className="p-2" style={styles.card}>
            <h5 style={styles.title}>{project_title}</h5>

            <picture style={styles.screenshot}>
                <img src={image} alt={`Screenshot of ${project_title}`} className="img-fluid" />
            </picture>

            <p className="mt-3 px-2" style={styles.info}>{description}</p>

            <div className="d-flex justify-content-between">
                <a href={github_url} target="_blank" style={styles.links}>Link to GitHub</a>
                <a href={deployed_url} target="_blank" style={styles.links}>Link to application</a>
            </div>
        </div>
)
}