import React from 'react';


const Label = (props) => (
    <label
        htmlFor={props.id}
        className={props.className}
    >
        {props.value}
    </label>
);

export default Label;