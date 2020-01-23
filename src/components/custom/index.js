import React from 'react';

export default function Custom(props) {
    const {children, ...otherProps} = props;

    return (
        <section {...otherProps}>
            {typeof(children) === 'function' ? children() : children}
        </section>
    );
};