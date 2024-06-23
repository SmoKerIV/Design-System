import React,{useState} from "react";
import CheckboxGroup from "../components/Forms/checkbox/checkboxGroup";
import RadioGroup from "../components/Forms/radio/radioGroup";
import Radio from "../components/Forms/radio/radio";
import DocumentationForm from "../components/docs/documentation";


const RadionChecks = () => {
    const [value, setValue] = useState();
    const [checkedValues, setCheckedValues] = useState(["Apple"]);
  
    const onChange = (values) => {
        console.log("checked = ", values);
        setCheckedValues(values);
      };
    
      const options = [
        { label: "Apple", value: "Apple" },
        { label: "Pear", value: "Pear" },
        { label: "Orange", value: "Orange", disabled: true },
      ];
      const onRadioChange = (newValue) => {
        console.log("radio checked", newValue);
        setValue(newValue);
      };
      const checkCode = `
      import CheckboxGroup from './CheckboxGroup';
        const [checkedValues, setCheckedValues] = useState(['Apple']);
      
        const onChange = (values) => {
          console.log('checked = ', values);
          setCheckedValues(values);
        };
          const optionsWithDisabled = [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange', disabled: true }
        ];
      
        return (
          <div className="app">
            <CheckboxGroup options={options} value={checkedValues} onChange={onChange} />
      );
        `;
        const radioCode = `
      import RadioGroup from "./components/Forms/radio/radioGroup";
      import Radio from "./components/Forms/radio/radio";
        const [value, setValue] = useState();
          const onRadioChange = (newValue) => {
          console.log("radio checked", newValue);
          setValue(newValue);
        };
        return (
              <RadioGroup onChange={onRadioChange} value={value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4} disabled>D</Radio>
              </RadioGroup>
        `;    
  return (
    <div>
      <DocumentationForm
        componentName="Checkbox"
        description="A checkbox component that allows users to select multiple options."
        propsInfo={[
          {
            name: "label",
            type: "string",
            description: "Label text for the checkbox.",
          },
          {
            name: "indeterminate",
            type: "boolean",
            description: "Indicates whether the checkbox is indeterminate.",
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Indicates whether the checkbox is disabled.",
          },
          {
            name: "checked",
            type: "boolean",
            description: "Indicates whether the checkbox is checked.",
          },
        ]}
        stateInfo={[
          {
            name: "onChange",
            type: "function",
            description: "Callback function to handle checkbox changes.",
          },
        ]}
        codeSnippet={checkCode}
      >
        <CheckboxGroup
          options={options}
          value={checkedValues}
          onChange={onChange}
        />
      </DocumentationForm>
      <DocumentationForm
        componentName="Radio"
        description="A radio button component that allows users to select one option from a list."
        propsInfo={[
          {
            name: "label",
            type: "string",
            description: "Label text for the radio button.",
          },
          {
            name: "name",
            type: "string",
            description: "Name of the radio button group.",
          },
          {
            name: "value",
            type: "string",
            description: "Value of the radio button.",
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Indicates whether the radio button is disabled.",
          },
        ]}
        stateInfo={[
          {
            name: "onChange",
            type: "function",
            description: "Callback function to handle radio button changes.",
          },
        ]}
        codeSnippet={radioCode}
      >
        <RadioGroup onChange={onRadioChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4} disabled>
            D
          </Radio>
        </RadioGroup>
      </DocumentationForm>
    </div>
  );
};

export default RadionChecks;
