# React Json To Form 

In development...

## Demo

See [this demo page](https://juanmsl.github.io/react-json-to-form/) and check it out.

## Installation

npm
```
npm install react-json-to-form
```

yarn
```
yarn add react-json-to-form
```

## usage

```javascript
import React from 'react';
import Form from 'react-json-to-form';


class App extends React.Component {
  getFormData = () => {
    return {
      fields: [
        {
          name: "email",
          type: "email",
          label: {
            value: "Email"
          }
        },
        {
          name: "password",
          type: "password",
          label: {
            value: "Password"
          }
        },
        {
          name: "submit",
          type: "submit",
          value: "Login"
        }
      ]
    };
  };

  handleSubmit = (e, data) => {
    console.log(data);
  };

  render() {
    const formData = this.getFormData();

    return (
      <section>
        <Form
          data={formData}
          onSubmit={this.handleSubmit}
        />
      </section>
    );
  }
}
```

## Props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------