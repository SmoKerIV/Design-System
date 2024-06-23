import React from 'react'
import DocumentationForm from '../components/docs/documentation'
import Buttons from '../components/buttons/buttons2'
import Homeicon from "../components/buttons/button-assets/home-icon.svg";
import LoadingButton from "../components/buttons/loadingButton";

const Button = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  const HomeIcon = (
    <img src={Homeicon} style={{ width: "10px", height: "10px" }} />
  );
  const btnCode = `
  const handleClick = () => {
      console.log("Button clicked");
    };
  
  return (
  
   <Buttons type="primary" onClick={handleClick}>Primary Button</Buttons>
  
  );
  return (
    <Buttons type="secondary" onClick={handleClick}>Secondary Button</Buttons>
  );
  
  return (
   <Buttons type="link" onClick={handleClick}>Linked Button</Buttons>
  );
  
  return (
   <Buttons type="text" onClick={handleClick}>Text Button</Buttons>
  );
  
  return (
  <Buttons type="dashed" onClick={handleClick}>Dashed Button</Buttons>
  );
  return (
    <Buttons type="disabled" onClick={handleClick}>Disabled Button</Buttons>
  );
  return (
   <Buttons type="primary" onClick={handleClick} icon={HomeIcon}>Icon Button</Buttons>
  );
  return (
     <LoadingButton
       loadingDurationInSeconds={3}  
     >Loading Button</LoadingButton>
  );`;
  return (
    <div style={{gap: "20px", display: "flex", flexDirection: "column"
    }
    }>
                <DocumentationForm
          componentName="Button"
          description="A button component that triggers an action when clicked."
          propsInfo={[
            {
              name: "title",
              type: "string",
              description: "Text to be displayed on the button.",
            },
            {
              name: "onClick",
              type: "function",
              description: "Callback function to handle button click.",
            },
          ]}
          stateInfo={[]}
          codeSnippet={btnCode}
        >
          <Buttons type="primary" onClick={handleClick}>
            Primary Button
          </Buttons>
          <Buttons type="secondary" onClick={handleClick}>
            Secondary Button
          </Buttons>
          <Buttons type="link" onClick={handleClick}>
            Linked Button
          </Buttons>
          <Buttons type="text" onClick={handleClick}>
            Text Button
          </Buttons>
          <Buttons type="disabled" onClick={handleClick}>
            Disabled Button
          </Buttons>
          <Buttons type="dashed" onClick={handleClick}>
            Dashed Button
          </Buttons>
          <Buttons type="primary" onClick={handleClick} icon={HomeIcon}>
            Icon Button
          </Buttons>
          <LoadingButton loadingDurationInSeconds={3}>
            Loading Button
          </LoadingButton>
        </DocumentationForm>
    </div>
  )
}

export default Button