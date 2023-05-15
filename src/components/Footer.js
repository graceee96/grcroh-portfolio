import React from 'react';

const styles = {
    links: {
        width: '45%'
    },
    text: {
        color: '#E28B75',
        textDecoration: 'none',
        fontSize: '1.5vw',
        fontWeight: 500,
    }
}

export default function Footer() {
    return (
        <div className="d-flex justify-content-between pt-2">
            <div className="d-flex justify-content-around" style={styles.links}>
                <p><Link to="https://github.com/graceee96" style={styles.text}>GitHub</Link></p>
                <p><Link to="https://www.linkedin.com/in/grcroh/" style={styles.text}>LinkedIn</Link></p>
                <p style={styles.text}>coming soon...</p>
            </div>
            <p class="mx-3" style={styles.text}>© Made with 💛 in 2023</p>
        </div>
    )
}