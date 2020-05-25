import React from 'react';
import PropTypes from 'prop-types';
import InputHandler from "components/handler";


const TextareaInput = (props) => (
    <textarea
        id={props.id}
        name={props.name}
        value={props.value}
        required={props.required}
        autoComplete={props.autoComplete}
        className={props.className}
        onChange={props.onChange}
    />
);

TextareaInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default InputHandler(TextareaInput);