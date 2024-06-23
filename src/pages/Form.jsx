import React from "react";
import DocumentationForm from "../components/docs/documentation";
import FormComponent from "../components/Forms/form/form";


const Form = () => {
  const fields = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      required: true,
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: "password",
      required: true,
    },
  ];
  const handleSubmit = (formValues) => {
    console.log("Success:", formValues);
  };
  const formCode = `
    const fields = [
      {
        id: 1,
        name: "username",
        label: "Username",
        type: "text",
        required: true,
      },
      {
        id: 2,
        name: "password",
        label: "Password",
        type: "password",
        required: true,
      },
    ];
        const handleSubmit = (formValues) => {
          console.log('Success:', formValues);
      };
    return (
                <Form fields={fields} handleSubmit={handleSubmit} />
    )`;
  return (
    <div>
      <DocumentationForm
        componentName="Form"
        description="A form component that allows users to input data."
        propsInfo={[
          {
            name: "fields",
            type: "array",
            description:
              "Array of form fields to be displayed. Each field should have an `id`, `name`, `label`, `type`, `value`, and `required` property.",
          },
          {
            name: "formValues",
            type: "object",
            description: "Object containing the form field values.",
          },
          {
            name: "errors",
            type: "object",
            description: "Object containing form field validation errors.",
          },
        ]}
        stateInfo={[
          {
            name: "handleChange",
            type: "function",
            description: "Callback function to handle form field changes.",
          },
          {
            name: "handleSubmit",
            type: "function",
            description: "Callback function to handle form submission.",
          },
        ]}
        codeSnippet={formCode}
      >
        <FormComponent fields={fields} handleSubmit={handleSubmit} />
      </DocumentationForm>
    </div>
  );
};

export default Form;
