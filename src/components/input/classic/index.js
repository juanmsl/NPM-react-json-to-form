import React from 'react';
import PropTypes from 'prop-types';
import InputHandler from "components/handler";


const ClassicInput = (props) => (
    <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        required={props.required}
        autoComplete={props.autoComplete}
        className={props.className}
        onChange={props.onChange}
    />
);

ClassicInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'radio', 'checkbox', 'email', 'number', 'date', 'url', 'submit', 'reset']).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default InputHandler(ClassicInput);