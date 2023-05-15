import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export default function ContactForm() {
    //state variable for name, email, message
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //state variable - error
    const [error, setError] = useState(false);

    //state variable - error type
    const [errorType, setErrorType] = useState('');

    //state variable - error message
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'senderName') {
            return setName(value)
        } else if (name === 'senderEmail') {
            return setEmail(value)
        } else {
            return setMessage(value)
        }
    }

    const validateEmail = (email) => {
        const emailAddress = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        
        return emailAddress.test(email);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // if value is empty set error type state variable to empty
        // if input type is an email and value is not a correct email then set error type state variable to invalid email

        if (!name || !email || !message) {
            setError(true)
            return [
                setErrorType('empty'),
                setErrorMessage('this field is required!')
            ]
        } else if (!validateEmail) {
            setError(true)
            return [
                setErrorType('invalidEmail'),
                setErrorMessage('invalid email!')
            ]
        } else {
            setError(false);
            return [
                setErrorType(''),
                setErrorMessage('')
            ]
        }
    }
    
    return (
        <div id="contact" className="h-100">
            <h2 className="section-title mb-4">Contact.</h2>

            <form>
                <div>
                    <div className="d-flex justify-content-between align-items-end">
                        <label for="sender-name" className="d-block contact-label">name</label>
                        {/* error message goes here */}
                        {error ? <ErrorMessage message={errorMessage} /> : null}
                    </div>
                    <input
                        type="text"
                        onChange={handleInputChange}
                        id="sender-name"
                        className="contact-input w-100 p-3"
                        value={name}
                        name="senderName"
                    />
                </div>

                <div className="mt-2">
                    <div className="d-flex justify-content-between align-items-end">
                        <label for="sender-email" className="d-block contact-label">email</label>
                        {/* error message goes here */}
                        {error ? <ErrorMessage message={errorMessage} /> : null}
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
                        <label for="message" className="d-block contact-label">message</label>
                        {/* error message goes here */}
                        {error ? <ErrorMessage message={errorMessage} /> : null}
                    </div>
                    <textarea name="message" id="message" rows="5" className="contact-input w-100 p-3" value={message} onChange={handleInputChange}></textarea>
                </div>

                <div className="mt-4 py-4">
                    <button className="submit-btn">send</button>
                </div>
            </form>
        </div>
    )
}