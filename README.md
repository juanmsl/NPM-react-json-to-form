# React Json To Form

Work with forms in React as jsons, control the fields and how your form render itself.

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
data|Object|{}|Data attributes specified below|Json data to transform to a form component
onSubmit|function| |`(e, formData) => {}`|Function to handle data when the form is submitted
children|Element or element's array| | |Childrens to render at the beginning of the form

> Any other prop is passed directly as props to form DOM element
  Example:
  className, autoComplete, etc

### Data props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------
allFieldsRequired|bool|`false`|`true` `false`|Set all fields as required or not
fieldsGroupClass|string|`null`| |Default Group of fields className
fieldClass|string|`null`| |Default field className
labelClass|string|`null`| |Default label className
inputClass|string|`null`| |Default input className
fields|array| |Fields attributes specified below|List of fields to render in the form

### Fields props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------
type|string| |`group` `text` `password` `email` `number` `date` `select` `textarea` `custom` `radio` `submit` `reset`|
name|string| | |
value|string| | |
required|bool| |`true` `false`|
autoComplete|string| | |
className|string| | |
fieldClass|string| | |
label|object| |Label attributes specified below|
options|array| |Options attributes specified below|

### Label props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------
value|string| | |
className|string| | |

### Options props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------
value|string| | |
label|string| | |
