import React from "react";
import DocumentationForm from "../components/docs/documentation";
import Menus from "../components/navigation/menus/menus";
import InlineMenu from "../components/navigation/menus/inlinemenu";
import SelectedMenu from "../components/navigation/menus/selected";

const Menu = () => {
  const menuItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ];
  const handleItemClick = (item) => {
    console.log(`Selected item: ${item.label}`);
  };

  const menuCode = `
    const menuItems = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Contact", url: "/contact" },
    ];
    const handleItemClick = (item) => {
        console.log(Selected item: {item.label});
    };
    return (
        <Menu items={menuItems} onItemClick={handleItemClick} />
    );`;
  const inlineMenu = `
    import InlineMenu from './InlineMenu';
    
    function App() {
        const menuItems = [
            { label: 'Navigation One' },
            { label: 'Navigation Two' },
            { label: 'Navigation Three' },
        ];
    
        const handleItemClick = (item) => {
            console.log('Selected item:', item);
        };
    
        return (
            <div className="App">
                <InlineMenu items={menuItems} onSelect={handleItemClick} />
            </div>
        );
    }
    
    export default App;
    `;
  const SelectedMenuCode = `
        const menuItems = [
            { label: 'Navigation One' },
            { label: 'Navigation Two' },
            { label: 'Navigation Three' },
        ];
    
        const handleItemClick = (item) => {
            console.log('Selected item:', item);
        };
    return (
              <SelectedMenu items={menuItems} onSelect={handleItemClick} />
    )
    `;
  return (
    <div>
      <DocumentationForm
        componentName="Menu"
        description="A dynamic menu to navigate from one page to another."
        propsInfo={[
          {
            name: "items",
            type: "array",
            description: "objects of each path and its label",
          },
        ]}
        stateInfo={[
          {
            name: "onClick",
            type: "function",
            description: " handles when the item is clicked",
          },
        ]}
        codeSnippet={menuCode}
      >
        <Menus items={menuItems} onItemClick={handleItemClick} />
      </DocumentationForm>
      <DocumentationForm
        componentName="InlineMenu"
        description="An inline menu component that displays a dropdown menu. It allows users to select an item from the list."
        propsInfo={[
          {
            name: "items",
            type: "array",
            description:
              "Array of menu items to be displayed in the dropdown. Each item should have a `label` property.",
          },
        ]}
        stateInfo={[
          {
            name: "onSelect",
            type: "function",
            description:
              "Callback function to handle item selection. It receives the selected item as an argument.",
          },
        ]}
        codeSnippet={inlineMenu}
      >
        <InlineMenu items={menuItems} onSelect={handleItemClick} />
      </DocumentationForm>
      <DocumentationForm
        componentName="SelectedMenu"
        description="A menu component that displays a list of items. It allows users to select an item from the list."
        propsInfo={[
          {
            name: "items",
            type: "array",
            description:
              "Array of menu items to be displayed in the dropdown. Each item should have a `label` property.",
          },
        ]}
        stateInfo={[
          {
            name: "onSelect",
            type: "function",
            description:
              "Callback function to handle item selection. It receives the selected item as an argument.",
          },
        ]}
        codeSnippet={SelectedMenuCode}
      >
        <SelectedMenu items={menuItems} onSelect={handleItemClick} />
      </DocumentationForm>
    </div>
  );
};
export default Menu;
