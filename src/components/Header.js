import React from 'react';

const styles = {
    h1: {
        fontWeight: 600,
        fontSize: '4vw',
        marginBottom: '-0.5vw',
    }
}

export default function Header(props) {
    return (
        <div className="navbar d-flex align-items-end">
            <h1 className="mx-3" style={styles.h1}>Grace Roh.</h1>
            {props.nav}
        </div>
    )
}