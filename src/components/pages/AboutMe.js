import React from 'react';
import profilePhoto from '../../assets/images/profilephoto.jpg'

export default function AboutMe() {
    return (
        <section id="about-me" className="h-100">
            <h2 className="section-title mb-4">About me.</h2>

            <div className="d-flex justify-content-between">
                <picture id="profile-pic">
                    <img src={profilePhoto} alt="Grace Roh" className="img-fluid" />
                </picture>
                
                <div id="bio">
                    <p>I am a front-end developer located in Los Angeles, California. I graduated from the Bachelor of Fine Arts Program (BFA) in the School of the Art Institute of Chicago (SAIC) in 2018 and am currently working on getting my certificate from the UCLA Full Stack Web Development Boot Camp.</p>

                    <p>I am a developer who thinks like a designer and am passionate about creating well-designed, user-friendly applications.</p>

                    <p>In my spare time, I like to crochet, go on walks and watch Golden Girls.</p>
                </div>
            </div>
        </section>
    )
}