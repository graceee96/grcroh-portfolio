import React from 'react';

const styles = {
    errorMsg: {
        paddingBottom: '-10px',
        height: '1.75vw',
        border: '1px solid #F5B700',
        backgroundColor: '#F5B700',
        borderRadius: '15px',
        fontSize: '1.25vw',
        color: '#FCFCFC',
    }
}

export default function ErrorMessage({ message }) {
    return (
        <div className="d-flex justify-content-center align-items-center px-4 mb-2" style={styles.errorMsg}>{message}</div>
    )
}