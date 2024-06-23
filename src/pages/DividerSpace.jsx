import React from "react";
import { Divider, Space } from "../components/layouts";
import DocumentationForm from "../components/docs/documentation";
const DivideSpace = () => {
  const dividerCode = `
  return (
              <Divider orientation="right">
                <p>laboriosam.</p>
              </Divider>
  );
}`;
const spaceCode = `
return (
          <Space size={20} direction="column" align="center" wrap="wrap">
            <button>submit</button>
            <button>reload</button>
            <button>close</button>
          </Space>
    </div>
)
}
export default Space
`;

  return (
    <div>
      <DocumentationForm
        componentName="Divider"
        description="A divider component that separates content with a horizontal line."
        propsInfo={[
          {
            name: "orientation",
            type: "string",
            description:
              "Position of the divider line. Options: 'left', 'right', 'center'.",
          },
          {
            name: "orientationMargin",
            type: "string",
            description:
              "Margin of the divider line. Options: 'top', 'bottom'.",
          },
          {
            name: "type",
            type: "string",
            description:
              "Type of the divider line. Options: 'horizontal', 'vertical'.",
          },
        ]}
        stateInfo={[]}
        codeSnippet={dividerCode}
      >
        <Divider orientation="right" style={{ margin: "3rem 0" }}>
          <p>laboriosam.</p>
        </Divider>
      </DocumentationForm>
      <DocumentationForm
                componentName="Space"
                description="A space component that provides spacing between elements."
                propsInfo={[
                  {
                    name: "size",
                    type: "number",
                    description: "Spacing size between elements.",
                  },
                  {
                    name: "align",
                    type: "string",
                    description:
                      "Alignment of elements. Options: 'flex-start', 'center', 'flex-end'.",
                  },
                  {
                    name: "direction",
                    type: "string",
                    description:
                      "Direction of elements. Options: 'row', 'column'.",
                  },
                  {
                    name: "wrap",
                    type: "string",
                    description: "Wrap of elements. Options: 'nowrap', 'wrap'.",
                  },
                ]}
                stateInfo={[]}
                codeSnippet={spaceCode}
              >
                <Space size={20} direction="column" align="center" wrap="wrap">
                  <button>submit</button>
                  <button>reload</button>
                  <button>close</button>
                </Space>
              </DocumentationForm>
    </div>
  );
};

export default DivideSpace;
