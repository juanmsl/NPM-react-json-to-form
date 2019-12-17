import React from 'react';
import PropTypes from 'prop-types';
import ClassicInput from "./input";
import FormMessage from "./message";
import SelectInput from "./select";
import TextareaInput from "./textarea";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const {data} = this.props;
        const fieldNames = Object.keys(data);
        const state = {};

        fieldNames.forEach((name) => {
            const field = data[name];
            const {value} = field;
            state[name] = value;
        });

        this.setState(state);
    }

    handleInputChange = (e, state) => {
        const {name, value} = state;
        this.setState({[name]: value});
    };

    createField = (name, i, {data, fieldClass, labelClass, inputClass, allFieldsRequired}) => {
        const field = data[name];

        const { autoComplete } = this.props;
        const { type, isVisible, ...messageProps } = field;

        if (isVisible === false) return null;

        const inputProps = {
            id: i,
            onChange: this.handleInputChange,
            name, fieldClass, labelClass, inputClass,
            required: !!allFieldsRequired,
            autoComplete: autoComplete,
            ...field
        };

        if (type === "message") return <FormMessage key={i} {...messageProps} />;
        if (type === "textarea") return <TextareaInput key={i} {...inputProps} />;
        if (type === "select") return <SelectInput key={i} {...inputProps} />;
        return <ClassicInput key={i} {...inputProps} />;
    };

    createFields = (params) => (
        Object.keys(params.data)
            .map((name, i) => (
                this.createField(name, i, params)
            ))
    );

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(e, this.state);
    };

    render() {
        const {
            formTitleClassName, formTitle,
            fieldClass, labelClass, inputClass,
            allFieldsRequired, data,
            ...formProps
        } = this.props;

        const props = {
            data,
            fieldClass,
            labelClass,
            inputClass,
            allFieldsRequired
        };

        return (
            <form {...formProps} onSubmit={this.handleSubmit}>
                {!formTitle ? null : <h1 className={formTitleClassName}>{formTitle}</h1>}
                {this.createFields(props)}
            </form>
        );
    }
};

Form.defaultProps = {
    data: {},
    fieldClass: null,
    labelClass: null,
    inputClass: null,
    allFieldsRequired: false
};

Form.propTypes = {
    isEnable: PropTypes.bool,
    allFieldsRequired: PropTypes.bool,
    fieldClass: PropTypes.string,
    labelClass: PropTypes.string,
    inputClass: PropTypes.string,
    data: PropTypes.shape({}).isRequired
};

export default Form;