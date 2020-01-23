import React from 'react';
import PropTypes from 'prop-types';
import ClassicInput from "./input";
import Custom from "./custom";
import SelectInput from "./select";
import TextareaInput from "./textarea";
import Label from "./label";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldsGroupClass: props.data.fieldsGroupClass || null,
            fieldClass: props.data.fieldClass || null,
            labelClass: props.data.labelClass || null,
            inputClass: props.data.inputClass || null,
            formData: {}
        };
    }

    componentDidMount() {
        const {data} = this.props;
        const state = {};

        data.fields.forEach((field) => {
            const {type, value, name} = field;
            if(type !== "submit") {
                state[name] = value || "";
            }
        });

        this.setState(state);
    }

    handleInputChange = (e, state) => {
        const {name, value} = state;
        this.setState({formData: {
            ...this.state.formData,
            [name]: value
        }});
    };

    getCommonProps = (field, i) => {
        const { label, required, ...fieldProps } = field;
        const { name } = field;

        const labelProps = {
            id: `${name}_${i}`,
            className: this.state.labelClass,
            ...(label instanceof Object ? label : {})
        };

        const commonProps = {
            fieldClass: this.state.fieldClass,
            className: this.state.inputClass,
            label: !label ? null : <Label {...labelProps} />,
            required: required !== undefined ? required : this.props.data.allFieldsRequired,
            id: `${name}_${i}`,
            autoComplete: "off"
        };

        return [commonProps, fieldProps];
    };

    createClassicInput = (i, commonProps, fieldProps) => {
        const props = {
            ...commonProps,
            onChange: this.handleInputChange,
            ...fieldProps
        };

        return <ClassicInput key={i} {...props} />
    };

    createSelectInput = (i, commonProps, fieldProps) => {
        const { type, ...inputProps } = fieldProps;
        
        const props = {
            ...commonProps,
            onChange: this.handleInputChange,
            ...inputProps
        };

        return <SelectInput key={i} {...props} />
    };
    
    createTextareaInput = (i, commonProps, fieldProps) => {
        const { type, ...inputProps } = fieldProps;

        const props = {
            ...commonProps,
            onChange: this.handleInputChange,
            ...inputProps
        };

        return <TextareaInput key={i} {...props} />
    };

    createCustom = (field, i) => {
        const { content, ...fieldProps } = field;
        return <Custom key={i} {...fieldProps}>{content}</Custom>
    };

    createGroup = (field, i) => {
        const {labelClass, fields, title, type, fieldsGroupClass, ...groupProps} = field;

        return (
            <section key={i} className={this.state.fieldClass} {...groupProps}>
                <span className={labelClass || this.state.labelClass}>{title}</span>
                <section className={fieldsGroupClass || this.state.fieldsGroupClass}>
                    {this.createFields(fields)}
                </section>
            </section>
        );
    }

    createFields = (fields) => (
        fields.map(
            (field, i) => {
                const [commonProps, fieldProps] = this.getCommonProps(field, i);

                switch (field.type) {
                    case 'group': return this.createGroup(field, i);
                    case 'custom': return this.createCustom(field, i);
                    case 'textarea': return this.createTextareaInput(i, commonProps, fieldProps);
                    case 'select': return this.createSelectInput(i, commonProps, fieldProps);
                    default: return this.createClassicInput(i, commonProps, fieldProps);
                }
            }
        )
    );

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(e, this.state.formData);
    };

    render() {
        const {
            data, children, ...formProps
        } = this.props;

        return (
            <form {...formProps} onSubmit={this.handleSubmit}>
                {children}
                {this.createFields(data.fields)}
            </form>
        );
    }
};

Form.defaultProps = {
    data: {}
};

Form.propTypes = {
    data: PropTypes.shape({
        allFieldsRequired: PropTypes.bool,
        fieldsGroupClass: PropTypes.string,
        fieldClass: PropTypes.string,
        labelClass: PropTypes.string,
        inputClass: PropTypes.string,
        fields: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['group', 'text', 'password', 'email', 'number', 'date', 'select', 'url', 'textarea', 'custom', 'radio', 'submit', 'reset']).isRequired,
            name: PropTypes.string,
            value: PropTypes.string,
            required: PropTypes.bool,
            autoComplete: PropTypes.string,
            className: PropTypes.string,
            
            fieldClass: PropTypes.string,
            label: PropTypes.shape({
                value: PropTypes.string.isRequired,
                className: PropTypes.string
            }),
            options: PropTypes.arrayOf(PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired
            }))
        })).isRequired
    }).isRequired
};

export default Form;