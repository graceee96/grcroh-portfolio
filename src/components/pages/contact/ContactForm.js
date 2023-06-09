import React, { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';
import './ContactForm.css';
import { render } from '@testing-library/react';

const styles = {
    successMessage: {
        textAlign: 'center',
        fontSize: '1.25vw',
        fontWeight: 500
    }
}

export default function ContactForm() {
    const [error, setError] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);
    
    //state variable for name, email, message
    const [senderName, setSenderName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //state variable - error type
    const [errorNameType, setErrorNameType] = useState('');
    const [errorEmailType, setErrorEmailType] = useState('');
    const [errorMessageType, setErrorMessageType] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setError(false);
        if (name === 'senderName') {
            return setSenderName(value)
        } else if (name === 'senderEmail') {
            return setEmail(value)
        } else if (name === 'message') {
            return setMessage(value)
        }
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(senderName);
        console.log(email);
        console.log(message);
        
        setErrorNameType('');
        setErrorEmailType('');
        setErrorMessageType('');
        
        // if value is empty set error type state variable to empty
        // if input type is an email and value is not a correct email then set error type state variable to invalid email
        if (!senderName) {
            setErrorNameType('noName');
            setError(true);
        }
        if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) || !email) {
            setErrorEmailType('invalidEmail');
            setError(true);
        }
        if (!message) {
            setErrorMessageType('noMessage');
            setError(true);
        }
        if (senderName && email && message && /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)) {
            setSendSuccess(true);
            setError(false);
            setErrorNameType('');
            setErrorEmailType('');
            setErrorMessageType('');
        }
    }

    
    return (
        <div id="contact" className="h-100">
            <h2 className="section-title mb-4">Contact.</h2>

            <form>
                <div>
                    <div className="d-flex justify-content-between align-items-end">
                        <label htmlFor="sender-name" className="d-block contact-label">name</label>
                        {/* error message goes here */}
                        {error && errorNameType === 'noName' ? <ErrorMessage message={'name is required!'} /> : null }

                    </div>
                    <input
                        type="text"
                        onChange={handleInputChange}
                        id="sender-name"
                        className="contact-input w-100 p-3"
                        value={senderName}
                        name="senderName"
                    />
                </div>

                <div className="mt-2">
                    <div className="d-flex justify-content-between align-items-end">
                        <label htmlFor="sender-email" className="d-block contact-label">email</label>
                        {/* error message goes here */}
                        {error && errorEmailType === 'invalidEmail' ? <ErrorMessage message={'invalid email!'} /> : null}
                    </div>
                    <input
                        type="email"
                        id="sender-email"
                        onChange={handleInputChange}
                        className="contact-input w-100 p-3"
                        value={email}
                        name="senderEmail"
                    />
                </div>

                <div className="mt-2">
                    <div className="d-flex justify-content-between align-items-end">
                        <label htmlFor="message" className="d-block contact-label">message</label>
                        {/* error message goes here */}
                        {error && errorMessageType === 'noMessage' ? <ErrorMessage message={'this field cannot be empty!'} /> : null}

                    </div>
                    <textarea name="message" id="message" rows="5" className="contact-input w-100 p-3" value={message} onChange={handleInputChange}></textarea>
                </div>

                <div className="mt-4 py-4">
                    {/* message successfully sent message here */}
                    {!error && sendSuccess ? <p style={styles.successMessage} className="mb-3">message sent successfully!</p> : null}
                    <button className="submit-btn" onClick={handleFormSubmit}>send</button>
                    
                </div>
            </form>
        </div>
    )
}