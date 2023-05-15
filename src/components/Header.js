import React from 'react';
import Navigation from './Navigation'

const styles = {
    h1: {
        fontWeight: 600,
        fontSize: '4vw',
        marginBottom: '-0.5vw',
    }
}

export default function Header() {
    return (
        <div className="navbar d-flex align-items-end">
            <h1 className="mx-3" style={styles.h1}>Grace Roh.</h1>
            <Navigation />
        </div>
    )
}