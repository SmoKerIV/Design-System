import React from "react";
import { Row } from "../components/layouts/Row";
import Col from "../components/layouts/Column";
import DocumentationForm from "../components/docs/documentation";

const RowCol = () => {
    const rowColCodeSnippet = `
    import React from 'react';
    
    const Example = () => {
        return (
            <Row gutter={[16, 16]}>
                <Col span={4} md={8} sm={4} lg={24}>
                    <div>hello</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, nulla!
                    </p>
                </Col>
                <Col span={8} sm={4} md={8} lg={24}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, sint.
                    </p>
                </Col>
                <Col span={8} sm={4} md={8} lg={24}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam, accusantium.
                </Col>
                <Col span={6} sm={8} md={8} lg={16}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quas, reiciendis.
                    </p>
                </Col>
                <Col span={6} sm={4} md={8} lg={16}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Col>
                <Col span={6}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Col>
                <Col span={6}>Lorem ipsum dolor sit amet.</Col>
                <Col span={6}>Lorem ipsum dolor sit amet.</Col>
                <Col span={6}>Lorem ipsum dolor sit amet.</Col>
            </Row>
        );
    };
    
    export default Example;
    `;
  return (
    <div>
      <DocumentationForm
        componentName="Row and Col"
        description="The Row and Col components from Ant Design provide a responsive grid layout system. It allows for flexible and consistent layout structures."
        propsInfo={[
          {
            name: "gutter",
            type: "array",
            description:
              "Spacing between the grid columns. Accepts an array with horizontal and vertical spacing values.",
          },
          {
            name: "span",
            type: "number",
            description:
              "Number of columns the grid item should span. Total columns in a row is 24.",
          },
          {
            name: "sm",
            type: "number",
            description: "Grid item width at small breakpoint (576px).",
          },
          {
            name: "md",
            type: "number",
            description: "Grid item width at medium breakpoint (768px).",
          },
          {
            name: "lg",
            type: "number",
            description: "Grid item width at large breakpoint (992px).",
          },
        ]}
        stateInfo={[]}
        codeSnippet={rowColCodeSnippet}
      >
        <Row gutter={[16, 16]}>
          <Col span={8} sm={14} md={8} lg={8}>
            <p>Lorem ipsum dolor sit amet.</p>
          </Col>
          <Col span={8} sm={14} md={8} lg={8}>
            <p>Lorem ipsum dolor sit amet.</p>
          </Col>
          <Col span={8} sm={14} md={8} lg={8}>
            Lorem ipsum dolor sit amet.
          </Col>
          <Col span={8} sm={14} md={8} lg={8}>
            <p>Lorem ipsum dolor sit amet.</p>
          </Col>
          <Col span={8} sm={14} md={8} lg={8}>
            <p>Lorem ipsum dolor sit amet.</p>
          </Col>
          <Col span={8} sm={14} md={8} lg={24}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ?
            </p>
          </Col>
          <Col span={8} sm={14} md={8} lg={24}>
            Lorem ipsum dolor sit amet.
          </Col>
          <Col span={8} sm={14} md={8} lg={8}>
            Lorem ipsum dolor sit amet.
          </Col>
          <Col span={8} sm={14} md={8} lg={8}>
            Lorem ipsum dolor sit amet.
          </Col>
        </Row>
      </DocumentationForm>
    </div>
  );
};

export default RowCol;
