import React from 'react';

export default function ErrorMessage({ message }) {
    return (
        <div className="error-msg d-flex justify-content-center align-items-center px-4 mb-2">{message}</div>
    )
}