import React from 'react';
import PropTypes from 'prop-types';
import InputHandler from "../../handler";


const SelectInput = (props) => {

    const renderOptions = (options) => [
        { value: null, label: null },
        ...options
    ].map((option, key) => (
        <option
            key={key}
            value={option.value}
        >
            {option.label}
        </option>
    ));

    return (
        <select
            id={props.id}
            name={props.name}
            value={props.value}
            required={props.required}
            autoComplete={props.autoComplete}
            className={props.className}
            onChange={props.onChange}
        >
            {renderOptions(props.options)}
        </select>
    );
};

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
    }))
};

export default InputHandler(SelectInput);