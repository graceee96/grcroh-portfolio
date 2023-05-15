import React from 'react';

const styles = {
    link: {
        color: '#EE6352',
        width: '45%',
    },
    skillList: {
        width: '55%'
    },
    listHeader: {
        fontSize: '2.25vw',
        borderBottom: '2px solid #575555'
    },
    skills: {
        fontSize: '1.75vw',
    }
}

export default function Resume() {
    return (
        <section id="resume" className="h-100">
            <h2 className="section-title mb-4">Resume.</h2>

            <div className="d-flex justify-content-between">
                <h3><a href="https://drive.google.com/file/d/1yX_Mcdt6li2MwKCx4Hd1EAf9AymzYeCQ/view?usp=sharing" target="_blank" style={styles.link}>View resume here ↗</a></h3>

                <div style={styles.skillList}>
                    <div className="mb-4">
                        <h4 className="pb-2" style={styles.listHeader}>front end proficiencies</h4>
                        <p className="pt-2" style={styles.skills}>HTML, CSS, JavaScript, JQUERY, Bootstrap, Bulma, Handlebars.js, React.js</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="pb-2" style={styles.listHeader}>back end proficiencies</h4>
                        <p className="pt-2" style={styles.skills}>Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, GraphQL</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="pb-2" style={styles.listHeader}>other skills</h4>
                        <p className="pt-2" style={styles.skills}>Figma, Adobe Creative Suite</p>
                    </div>
                </div>
            </div>
        </section>
    )
}