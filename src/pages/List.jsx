import React from "react";
import ListComponent from "../components/datadisplay/lists/list";
import CircularProgressBar from "../components/feedback/progress/circular";
import DocumentationForm from "../components/docs/documentation";

const List = () => {
  const listCode = `

    return (
         <ListComponent
              initialItems={[
                "[ITEM] Racing car sprays burning fuel into crowd.",
                "[ITEM] Japanese princess to wed commoner.",
                "[ITEM] Australian walks 100km after outback crash.",
                "[ITEM] Man charged over missing wedding girl.",
                "[ITEM] Los Angeles battles huge wildfires.",
                "[ITEM] New item 1.",
                "[ITEM] New item 2.",
                "[ITEM] New item 3.",
                "[ITEM] New item 4.",
              ]}
            />
    );
    `;
  const circularProgCode = `
    
    return (
        <CircularProgressBar value={75} color="pink" size={150}/>
    );
    `;
  return (
    <div>
      <DocumentationForm
        componentName="List"
        description="A list component that displays a list of items."
        propsInfo={[
          {
            name: "initialItems",
            type: "array",
            description: "Array of items to be displayed in the list.",
          },
        ]}
        stateInfo={[]}
        codeSnippet={listCode}
      >
        <ListComponent
          initialItems={[
            "[ITEM] Racing car sprays burning fuel into crowd.",
            "[ITEM] Japanese princess to wed commoner.",
            "[ITEM] Australian walks 100km after outback crash.",
            "[ITEM] Man charged over missing wedding girl.",
            "[ITEM] Los Angeles battles huge wildfires.",
            "[ITEM] New item 1.",
            "[ITEM] New item 2.",
            "[ITEM] New item 3.",
            "[ITEM] New item 4.",
          ]}
        />
      </DocumentationForm>

      <DocumentationForm
        componentName="CircularProgressBar"
        description="A circular progress bar component that displays a percentage value."
        propsInfo={[
          {
            name: "value",
            type: "number",
            description: "Percentage value to be displayed.",
          },
          {
            name: "color",
            type: "string",
            description: "Color of the progress bar.",
          },
        ]}
        stateInfo={[]}
        codeSnippet={circularProgCode}
      >
        <CircularProgressBar value={75} color="pink" size={150} />
      </DocumentationForm>
    </div>
  );
};

export default List;
