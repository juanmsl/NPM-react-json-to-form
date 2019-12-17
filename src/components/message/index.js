import React from 'react';

export default function FormMessage(props) {
    const {text, ...otherProps} = props;

    return (
        <section {...otherProps}>
            {text}
        </section>
    );
};