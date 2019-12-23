import React from 'react';

class Label extends React.Component {
  render() {
    const {id, value, ...labelProps} = this.props;
    
    return (
      <label htmlFor={id} {...labelProps}>{value}</label>
    );
  }
}

export default Label;