import React from 'react';

export default function Resume() {
    return (
        <section id="resume" className="h-100">
            <h2 className="section-title mb-4">Resume.</h2>

            <div className="d-flex justify-content-between">
                <h3><Link id="resume-link" to="https://drive.google.com/file/d/1yX_Mcdt6li2MwKCx4Hd1EAf9AymzYeCQ/view?usp=sharing">View resume here ↗</Link></h3>

                <div id="skill-list">
                    <div className="mb-4">
                        <h4 className="pb-2">front end proficiencies</h4>
                        <p className="pt-2">HTML, CSS, JavaScript, JQUERY, Bootstrap, Bulma, Handlebars.js, React.js</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="pb-2">back end proficiencies</h4>
                        <p className="pt-2">Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, GraphQL</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="pb-2">other skills</h4>
                        <p className="pt-2">Figma, Adobe Creative Suite</p>
                    </div>
                </div>
            </div>
        </section>
    )
}