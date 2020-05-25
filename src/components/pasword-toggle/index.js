import React from 'react';

const PasswordToggle = ({showPassword, onClick}) => (
    <h6 onClick={onClick} style={{cursor: 'pointer'}}>
        {showPassword ? 'Show' : 'Hide'} password
    </h6>
);

export default PasswordToggle;