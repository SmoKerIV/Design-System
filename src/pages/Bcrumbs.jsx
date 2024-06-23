import React from "react";
import DocumentationForm from "../components/docs/documentation";
import Breadcrumbs from "../components/navigation/breadcrumbs/bread";

const Bcrumbs = () => {
  const bread = `
    const breadItems = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ];
    return (
      <Breadcrumbs breadcrumbs={breadItems} />
    )
  `;
  const breadItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <DocumentationForm
        componentName="Breadcrumbs"
        description="A breadcrumb navigation component that shows the current page's location within the hierarchical structure of the website."
        propsInfo={[
          {
            name: "breadcrumbs",
            type: "array",
            description:
              "Array of breadcrumb objects, each containing a `path` and `label`.",
          },
        ]}
        stateInfo={[]}
        codeSnippet={bread}
      >
        <Breadcrumbs breadcrumbs={breadItems} />
      </DocumentationForm>
    </div>
  );
};
export default Bcrumbs;
