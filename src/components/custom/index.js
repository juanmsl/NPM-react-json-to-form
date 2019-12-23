import React from 'react';

export default function Custom(props) {
    const {children, ...otherProps} = props;

    return (
        <section {...otherProps}>
            {children()}
        </section>
    );
};