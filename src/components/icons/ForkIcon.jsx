// src/components/icons/ForkIcon.js

import React from 'react';
import PropTypes from 'prop-types';

function ForkIcon({
    className
}) {
    return (
        <svg
            className={className}
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M5 3.25a2.25 2.25 0 112.125 2.242v2.47a2.25 2.25 0 11-1.5 0v-2.47A2.25 2.25 0 015 3.25zM4.5 3.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM7 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM11 3.25a2.25 2.25 0 112.125 2.242v4.258a2.25 2.25 0 11-1.5 0V5.492A2.25 2.25 0 0111 3.25zm-.5 0a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM12.625 12a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"
            />
        </svg>
    );
}

ForkIcon.propTypes = {
    className: PropTypes.string,
};

export default ForkIcon;
