import React from 'react';

export default function Eye(props) {
    const { isPasswordVisible, togglePasswordVisibility } = props;

    return (
        <span
            style={props.css}
            onClick={togglePasswordVisibility}
            className="eye material-icons"
        >
            {isPasswordVisible ? 'visibility' : 'visibility_off'}
        </span>
    );
}
