import React from "react";
import DocumentationForm from "../components/docs/documentation";
import Tabs from "../components/navigation/tabs/tabs";
import VerticalTabs from "../components/navigation/tabs/tab2";
import icon from "../components/navigation/tabs/assets/tb.svg";
import aicon from "../components/navigation/tabs/assets/atb.svg";


const Tab = () => {
    const tabs = [
        {
          title: "Tab 1",
          content: <div>Content 1</div>,
          icon: icon,
          aicon: aicon,
        },
        {
          title: "Tab 2",
          content: <div>Content 2</div>,
          icon: icon,
          aicon: aicon,
        },
        {
          title: "Tab 3",
          content: <div>Content 3</div>,
          icon: icon,
          aicon: aicon,
        },
      ];
      const tab = `
      import icon from "./components/navigation/tabs/assets/tb.svg";
      import aicon from "./components/navigation/tabs/assets/atb.svg";
        const tabs = [
          {
            title: "Tab 1",
            content: <div>Content 1</div>,
            icon: icon,
            aicon: aicon,
          },
          {
            title: "Tab 2",
            content: <div>Content 2</div>,
            icon: icon,
            aicon: aicon,
          },
          {
            title: "Tab 3",
            content: <div>Content 3</div>,
            icon: icon,
            aicon: aicon,
          },
        ];
           return (
             <Tabs tabs={tabs} />
      
           )`;
      const tab2 = `
      import icon from "./components/navigation/tabs/assets/tb.svg";
      import aicon from "./components/navigation/tabs/assets/atb.svg";
        const tabs = [
          {
            title: "Tab 1",
            content: <div>Content 1</div>,
            icon: icon,
            aicon: aicon,
          },
          {
            title: "Tab 2",
            content: <div>Content 2</div>,
            icon: icon,
            aicon: aicon,
          },
          {
            title: "Tab 3",
            content: <div>Content 3</div>,
            icon: icon,
            aicon: aicon,
          },
        ];
           return (
             <VerticalTabs tabs={tabs} />
      
           )`;
  return (
    <div>
      <DocumentationForm
        componentName="Tabs"
        description="A tabs component that allows users to switch between different content sections."
        propsInfo={[
          {
            name: "tabs",
            type: "array",
            description:
              "Array of tab objects, each containing a `title` and `content`.",
          },
        ]}
        stateInfo={[]}
        codeSnippet={tab}
      >
        <Tabs tabs={tabs} />
      </DocumentationForm>
      <DocumentationForm
        componentName="Tabs"
        description="A tabs component that allows users to switch between different content sections."
        propsInfo={[
          {
            name: "tabs",
            type: "array",
            description:
              "Array of tab objects, each containing a `title` and `content`.",
          },
        ]}
        stateInfo={[]}
        codeSnippet={tab2}
      >
        <VerticalTabs tabs={tabs} />
      </DocumentationForm>
    </div>
  );
};
export default Tab;
