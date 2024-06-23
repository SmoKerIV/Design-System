// LayoutComponent.js
import React from 'react';
import { Layout, Header, Sider, Content, Footer } from '../components/layouts';
import DocumentationForm from '../components/docs/documentation';
const LayoutCode = `
return (
 <Layout>
    <Header>Header</Header>
    <Layout hasSider={true}>
      <Sider reverseArrow={true} collapsible={collapsible}>
        <div
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "14px",
            fontWeight: "300",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <li>Home</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
      </Sider>
      <Content style={{ padding: '2rem', background: '#fff' }}>
        lorem
      </Content>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>Footer</Footer>
  </Layout>
  )
}`;


const LayoutPage = ({ collapsible }) => (
  
  <DocumentationForm
  componentName="Layout"
  description="A layout component that provides a basic structure for the page."
  propsInfo={[
    {
      name: "hasSider",
      type: "boolean",
      description: "Indicates whether the layout has a sidebar.",
    },
  ]}
  stateInfo={[]}
  codeSnippet={LayoutCode}
>

  <Layout>
    <Header>Header</Header>
    <Layout hasSider={true}>
      <Sider reverseArrow={true} collapsible={collapsible}>
        <div
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "14px",
            fontWeight: "300",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <li>Home</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
      </Sider>
      <Content style={{ padding: '2rem', background: '#fff' }}>
        lorem
      </Content>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>Footer</Footer>
  </Layout>
            </DocumentationForm>
);

export default LayoutPage;
