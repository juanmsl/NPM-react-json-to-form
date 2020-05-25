import React from 'react';
import InputHandler from "../../handler";
import { ClassicInput } from "../../input";


const PasswordInput = (props) => {
    const [type, setType] = React.useState('password');

    const toggleType = () => setType(type === 'password' ? 'text' : 'password');

    return (
        <React.Fragment>
            <ClassicInput
                type={type}
                {...props}
            />
            <props.PasswordToggleComponent
                onClick={toggleType}
                showPassword={type === "password"}
            />
        </React.Fragment>
    );
}

export default InputHandler(PasswordInput);