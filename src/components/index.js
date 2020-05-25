import React from 'react';
import PropTypes from 'prop-types';
import Custom from "./custom";
import Label from "./label";
import PasswordToggle from "./pasword-toggle";
import Field from "components/field";
import {
    PasswordInput, ClassicInput,
    TextareaInput, SelectInput
} from "components/input";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordToggleComponent: props.data.passwordToggleComponent || PasswordToggle,
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

    getFieldId = (field) => (
        `${field.name}${field.id || ''}`
    );

    getRequired = (field) => (
        field.required === undefined ?
            this.state.allFieldsRequired
            : field.required
    );

    getPasswordToggleComponent = (field) => (
        field.passwordToggleComponent || this.state.passwordToggleComponent
    );

    getFieldClass = (field) => (
        field.fieldClass || this.state.fieldClass
    );

    getLabelClass = (field, label) => (
        label ? label.className || field.labelClass || this.state.labelClass : field.labelClass || this.state.labelClass
    );

    getInputClass = (field) => (
        field.inputClass || this.state.inputClass
    );

    getFieldsGroupClass = (field) => (
        field.fieldsGroupClass || this.state.fieldsGroupClass
    );

    getFieldLabel = (field) => (
        field.label ?
            <Label
                id={this.getFieldId(field)}
                className={this.getLabelClass(field)}
                {...field.label}
            />
            : null
    );

    getInputProps = (field) => ({
        id: this.getFieldId(field),
        name: field.name,
        value: field.value,
        required: this.getRequired(field),
        autoComplete: field.autoComplete || null,
        className: this.getInputClass(field),
        onChange: this.handleInputChange,
    });

    createClassicField = (field, key) => (
        <Field className={this.getFieldClass(field)} key={key}>
            {this.getFieldLabel(field)}
            <ClassicInput
                {...this.getInputProps(field)}
                type={field.type}
            />
        </Field>
    );

    createPasswordField = (field, key) => (
        <Field className={this.getFieldClass(field)} key={key}>
            {this.getFieldLabel(field)}
            <PasswordInput
                {...this.getInputProps(field)}
                PasswordToggleComponent={this.getPasswordToggleComponent(field)}
            />
        </Field>
    );

    createTextareaField = (field, key) => (
        <Field className={this.getFieldClass(field)} key={key}>
            {this.getFieldLabel(field)}
            <TextareaInput
                {...this.getInputProps(field)}
            />
        </Field>
    );

    createSelectField = (field, key) => (
        <Field className={this.getFieldClass(field)} key={key}>
            {this.getFieldLabel(field)}
            <SelectInput
                {...this.getInputProps(field)}
                options={field.options}
            />
        </Field>
    );

    createGroupField = (field, key) => (
        <Field className={this.getFieldClass(field)} key={key}>
            {this.getFieldLabel(field)}
            <section className={this.getFieldsGroupClass(field)}>
                {this.createFields(field.fields)}
            </section>
        </Field>
    );

    createCustomField = (field, key) => {
        const { content } = field;
        return <Custom key={key}>{content}</Custom>
    };

    createCustomInput = (field, key) => (
        <Field className={this.getFieldClass(field)} key={key}>
            {this.getFieldLabel(field)}
            <field.component
                {...this.getInputProps(field)}
            />
        </Field>
    );

    createFields = (fields) => (
        fields.map((field, i) => {
            switch (field.type) {
                case 'password': return this.createPasswordField(field, i);
                case 'textarea': return this.createTextareaField(field, i);
                case 'select': return this.createSelectField(field, i);
                case 'group': return this.createGroupField(field, i);
                case 'custom': return this.createCustomField(field, i);
                case 'customInput': return this.createCustomInput(field, i);
                default: return this.createClassicField(field, i);
            }
        })
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
}

Form.defaultProps = {
    data: {}
};

Form.propTypes = {
    data: PropTypes.shape({
        passwordToggleComponent: PropTypes.element,
        allFieldsRequired: PropTypes.bool,
        fieldsGroupClass: PropTypes.string,
        fieldClass: PropTypes.string,
        labelClass: PropTypes.string,
        inputClass: PropTypes.string,
        fields: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['group', 'text', 'password', 'email', 'number', 'date', 'select', 'url', 'textarea', 'custom', 'customInput', 'radio', 'submit', 'reset']).isRequired,
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