import React from 'react';
import Form from 'components';
import ReactJson from 'react-json-view';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: {}
    };
  }

  handleSubmit = (e, data) => {
    this.setState({inputData: data});
  };

  getFormData = () => {
    return {
      allFieldsRequired: false,
      fieldsGroupClass: "form_fields_group",
      fieldClass: "form_field",
      labelClass: "form_label",
      inputClass: "form_input",
      fields: [
        {
          name: "name",
          type: "text",
          label: {
            value: "Full name"
          }
        },
        {
          name: "Language",
          type: "select",
          label: {
            value: "Language"
          },
          options: [
            { value: "es", label: "Español" },
            { value: "en", label: "English" }
          ]
        },
        {
          type: 'group',
          label: {
            value: 'Gender'
          },
          className: "form_group",
          fieldsGroupClass: "form_fields_group--radio",
          fields: [
            {
              name: "gender",
              type: "radio",
              value: "m",
              id: '_m',
              label: {
                value: "Male"
              },
              fieldClass: "form_field--radio"
            },
            {
              name: "gender",
              type: "radio",
              value: "f",
              id: '_f',
              label: {
                value: "Female"
              },
              fieldClass: "form_field--radio"
            }
          ]
        },
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
          autoComplete: 'off',
          label: {
            value: "Password"
          }
        },
        {
          name: "password",
          type: "password",
          autoComplete: 'off',
          id: '_2',
          label: {
            value: "Password"
          }
        },
        {
          type: "custom",
          content: () => (
            <section className="form_message info">
              Fill the form and submit it, and see the data
            </section>
          )
        },
        {
          name: "submit",
          type: "submit",
          value: "Send",
          fieldClass: "form_button_field"
        }
      ]
    };
  };

  render() {
    const {inputData} = this.state;
    const formData = this.getFormData();
    const reactJsonOptions = {
      iconStyle: "triangle",
      indentWidth: 4,
      collapsed: false,
      displayObjectSize: false,
      displayDataTypes: false,
      enableClipboard: false,
      name: false
    };

    return (
      <main className="app">
        <section>
          <ReactJson
            src={formData}
            {...reactJsonOptions}
          />
        </section>
        <Form
          data={formData}
          className="form"
          onSubmit={this.handleSubmit}
          >
          <h1 className="form-title">React json to form</h1>
        </Form>
        <section>
          <ReactJson
            src={inputData}
            {...reactJsonOptions}
          />
        </section>
      </main>
    );
  }
}

export default App;