import React from 'react';
import InputHandler from "../handler";


class TextareaInput extends React.Component {
    render() {
        const {
            name, value,
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
                <textarea
                    {...otherProps}
                    name={name}
                    className={inputClass}
                    id={inputId}
                >
                    {value}
                </textarea>
            </section>
        );
    }
}

export default InputHandler(TextareaInput);