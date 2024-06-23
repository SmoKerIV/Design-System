import React from "react";
import DocumentationForm from "../components/docs/documentation";
import InputField from "../components/Forms/Input/input";
import Inputmail from "../components/Forms/Input/inputmail";
import SearchInput from "../components/Forms/Input/searchinput";

const Input = () => {
  const inputCode = ` 
    const handleInputChange = (value) => {
    console.log(value);
  };
  const handleSearch = (value) => {
    alert(Searching for: {value});
  };
    
    return(       
        <InputField placeholder={"example"} onChange={handleInputChange} />
        <Inputmail
          addonBefore="https://"
          addonAfter=".com"
          onChange={handleInputChange}
          placeholder="example"
        />
        <SearchInput
          placeholder={"example"}
          onChange={handleInputChange}
          onSearch={handleSearch}
        />
     )`;
  const handleInputChange = (value) => {
    console.log(value);
  };
  const handleSearch = (value) => {
    alert(`Searching for: ${value}`);
  };

  return (
    <div>
      <DocumentationForm
        componentName="Input"
        description="A basic input field component."
        propsInfo={[
          {
            name: "placeholder",
            type: "string",
            description: "Placeholder text for the input field.",
          },
        ]}
        stateInfo={[
          {
            name: "onChange",
            type: "function",
            description: "Callback function to handle input changes.",
          },
          {
            name: "onSearch",
            type: "function",
            description: "Callback function to handle search input.",
          },
        ]}
        codeSnippet={inputCode}
      >
        <InputField placeholder={"example"} onChange={handleInputChange} />
        <Inputmail
          addonBefore="https://"
          addonAfter=".com"
          onChange={handleInputChange}
          placeholder="example"
        />
        <SearchInput
          placeholder={"example"}
          onChange={handleInputChange}
          onSearch={handleSearch}
        />
      </DocumentationForm>
    </div>
  );
};

export default Input;
