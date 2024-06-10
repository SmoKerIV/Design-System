// DocumentationForm.js
import React from "react";
import "./documentation.css";
import { CodeBlock, github } from "react-code-blocks";

const DocumentationForm = ({
  componentName,
  description,
  propsInfo,
  stateInfo,
  codeSnippet,
  children,
}) => {
  return (
    <div className="documentation-container">
      <h2>{componentName} Documentation</h2>
      <p>{description}</p>
      <h3>Props:</h3>
      <ul>
        {propsInfo.map((prop, index) => (
          <li key={index}>
            <strong>{prop.name}</strong>: {prop.type} - {prop.description}
          </li>
        ))}
      </ul>
      <h3>State:</h3>
      <ul>
        {stateInfo.map((state, index) => (
          <li key={index}>
            <strong>{state.name}</strong>: {state.type} - {state.description}
          </li>
        ))}
      </ul>
      <div className="component-preview">{children}</div>
      <CodeBlock
        text={codeSnippet}
        language="jsx"
        showLineNumbers
        theme={github}
      />
    </div>
  );
};

export default DocumentationForm;
