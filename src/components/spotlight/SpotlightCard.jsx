import React from 'react';
import PropTypes from 'prop-types';

const SpotlightCard = ({ children, variant }) => {
    return (
        <article className={`spotlight-card spotlight-card--${variant}`}>
            <div className="spotlight-card__content">
                {children}
            </div>
        </article>
    );
};

SpotlightCard.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['early-trace', 'mandelbrot']).isRequired,
};

export default SpotlightCard;
