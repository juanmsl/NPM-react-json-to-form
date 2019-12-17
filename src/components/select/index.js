import React from 'react';
import InputHandler from "../handler";


class SelectInput extends React.Component {
    renderOptions = (options) => {
        return options.map((option, i) => {
            const {value, label} = option;
            return <option key={i} value={value}>{label}</option>
        });
    };

    render() {
        const {
            name,
            fieldClass,
            inputClass,
            label,
            id,
            labelClass,
            options,
            ...otherProps
        } = this.props;

        const inputId = `${name}_${id}`;

        return (
            <section className={fieldClass}>
                {!label ? null : <label htmlFor={inputId} className={labelClass}>{label}</label>}
                <select
                    {...otherProps}
                    name={name}
                    className={inputClass}
                    id={inputId}
                >
                    {this.renderOptions(options)}
                </select>
            </section>
        );
    }
}

export default InputHandler(SelectInput);