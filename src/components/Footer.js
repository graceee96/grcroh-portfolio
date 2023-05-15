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
            <div className="d-flex justify-content-around"  style={styles.links}>
                <p><a href="https://github.com/graceee96" target="_blank" style={styles.text}>GitHub</a></p>
                <p><a href="https://www.linkedin.com/in/grcroh/" target="_blank" style={styles.text}>LinkedIn</a></p>
                <p style={styles.text}>coming soon...</p>
            </div>
            <p class="mx-3" >© Made with 💛 in 2023</p>
        </div>
    )
}