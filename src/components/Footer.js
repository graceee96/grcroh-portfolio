import React from 'react';

export default function Footer() {
    return (
        <div className="d-flex justify-content-between pt-2">
            <div className="d-flex justify-content-around">
                <p><Link to="https://github.com/graceee96">GitHub</Link></p>
                <p><Link to="https://www.linkedin.com/in/grcroh/">LinkedIn</Link></p>
                <p>coming soon...</p>
            </div>
            <p class="mx-3">© Made with 💛 in 2023</p>
        </div>
    )
}