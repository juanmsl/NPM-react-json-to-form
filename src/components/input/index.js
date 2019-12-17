import React from 'react';
import InputHandler from "../handler";


class Input extends React.Component {
    static defaultProps = {
        type: "text"
    };

    render() {
        const {
            name,
            fieldClass,
            inputClass,
            label,
            id,
            labelClass,
            ...otherProps
        } = this.props;

        const inputId = `${name}_${id}`;

        return (
            <section className={fieldClass}>
                {!label ? null : <label htmlFor={inputId} className={labelClass}>{label}</label>}
                <input
                    {...otherProps}
                    name={name}
                    className={inputClass}
                    id={inputId}
                />
            </section>
        );
    }
}

export default InputHandler(Input);