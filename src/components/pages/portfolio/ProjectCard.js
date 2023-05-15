import React from 'react';

const styles = {
    card: {
        width: '49%',
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
        fontSize: '1.1vw',
    },
    links: {
        textDecoration: 'none',
        color: '#59CD90',
        fontWeight: 500,
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
                <Link to={github_url} style={styles.links}>Link to GitHub</Link>
                <Link to={deployed_url} style={styles.links}>Link to application</Link>
            </div>
        </div>
)
}