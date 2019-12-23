import React from 'react';
import PropTypes from 'prop-types';
import InputHandler from "../handler";


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type
        };
    }

    toggleType = () => {
        this.setState({
            type: this.state.type === "password" ? "text" : "password"
        });
    };

    render() {
        const { fieldClass, labelClass, label, invert, ...inputProps} = this.props;
        const {type} = this.props;

        return (
            <section className={fieldClass}>
                {type !== "radio" ? label : null}
                <input {...inputProps} {...this.state} />
                {type === "radio" ? label : null}
                {type === "password" ? <h6 onClick={this.toggleType}>Show password</h6> : null }
            </section>
        );
    }
}

Input.propTypes = {
    fieldClass: PropTypes.string,
    labelClass: PropTypes.string,
    label: PropTypes.node,

    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date', 'select', 'radio', 'submit', 'reset']).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default InputHandler(Input);