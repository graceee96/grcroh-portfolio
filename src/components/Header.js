import React from 'react';
import Navigation from './Navigation'

export default function Header() {
    return (
        <div className="navbar d-flex align-items-end">
            <h1 className="mx-3">Grace Roh.</h1>
            <Navigation />
        </div>
    )
}