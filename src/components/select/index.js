import React from 'react';
import PropTypes from 'prop-types';
import InputHandler from "../handler";


class SelectInput extends React.Component {
    renderOptions = (options) => {
        return [
            { value: null, label: null },
            ...options
        ].map((option, i) => {
            const {value, label} = option;
            return <option key={i} value={value}>{label}</option>
        });
    };

    render() {
        const { fieldClass, labelClass, label, options, ...inputProps } = this.props;

        return (
            <section className={fieldClass}>
                {label}
                <select {...inputProps}>{this.renderOptions(options)}</select>
            </section>
        );
    }
}

SelectInput.propTypes = {
    fieldClass: PropTypes.string,
    labelClass: PropTypes.string,
    label: PropTypes.node,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
    })),

    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default InputHandler(SelectInput);