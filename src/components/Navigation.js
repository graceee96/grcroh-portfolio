import React from 'react';

const styles = {
    aboutMe: {
        color: '#5386E4',
        textDecoration: 'none',
        fontSize: '2vw',
    },
    portfolio: {
        color: '#59CD90',
        textDecoration: 'none',
        fontSize: '2vw',
    },
    resume: {
        color: '#EE6352',
        textDecoration: 'none',
        fontSize: '2vw',
    },
    contact: {
        color: '#F5B700',
        textDecoration: 'none',
        fontSize: '2vw',
    }
}

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item mx-3">
                    <a
                        href="#about-me"
                        onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? "nav-link active" : "nav-link"}
                        style={styles.aboutMe}
                    >
                        about me.
                    </a>
                </li>
                <li className="nav-item mx-3">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? "nav-link active" : "nav-link"}
                        style={styles.portfolio}
                    >
                        portfolio.
                    </a>
                </li>
                <li className="nav-item mx-3">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? "nav-link active" : "nav-link"}
                        style={styles.resume}
                    >
                        resume.
                    </a>
                </li>
                <li className="nav-item mx-3">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? "nav-link active" : "nav-link"}
                        style={styles.contact}
                    >
                        contact.
                    </a>
                </li>
            </ul>
        </div>
    )
}