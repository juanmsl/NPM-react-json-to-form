import React from 'react';


class Field extends React.Component {
    render() {
        const { className, children } = this.props;

        return (
            <section className={className}>
                {children}
            </section>
        );
    }
}

Field.defaultProps = {
    className: '',
    children: null
};

export default Field;