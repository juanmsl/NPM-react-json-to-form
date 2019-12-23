import React from 'react';
import PropTypes from 'prop-types';
import InputHandler from "../handler";


class TextareaInput extends React.Component {
    render() {
        const { fieldClass, labelClass, label, value, ...inputProps } = this.props;

        return (
            <section className={fieldClass}>
                {label}
                <textarea {...inputProps}>{value}</textarea>
            </section>
        );
    }
}

TextareaInput.propTypes = {
    fieldClass: PropTypes.string,
    labelClass: PropTypes.string,
    label: PropTypes.node,

    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default InputHandler(TextareaInput);