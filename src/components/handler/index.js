import React from 'react';


const InputHandler = (InputComponent) => {
    return class InputHandler extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: props.name,
                value: props.value
            };
        }

        static defaultProps = {
            value: ""
        };

        handleChange = (e) => {
            e.preventDefault();
            const {type, checked, value} = e.target;
            const inputValue = type === 'checkbox' ? checked : value;
            const nextState = {...this.state, value: inputValue};
            this.setState(nextState);
            this.props.onChange(e, nextState);
        };

        render() {
            return (
                <InputComponent
                    {...this.props}
                    {...this.state}
                    onChange={this.handleChange}
                />
            );
        }
    }
};

export default InputHandler;