import "./App.css";
import Menu from "./components/navigation/menus/menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrimaryButton from "./components/buttons/primary-button";
import LinkButton from "./components/buttons/link-button";
import SecondaryButton from "./components/buttons/sec-button";
import TextButton from "./components/buttons/text-button";
import DashedButton from "./components/buttons/dashedbutton";
import Card from "./components/card/card";
import InlineMenu from "./components/navigation/menus/inlinemenu";
import SelectedMenu from "./components/navigation/menus/selected";
import Breadcrumbs from "./components/navigation/breadcrumbs/bread";
import Tabs from "./components/navigation/tabs/tabs";
import VerticalTabs from "./components/navigation/tabs/tab2";
import style from "./components/PureModal/pureModal.module.css";
import { PureModal } from "./components/PureModal/pureModal";
import { useState } from "react";
import { Row } from "./components/layouts/Row";
import Col from "./components/layouts/Column";
import { Divider } from "./components/layouts/Divider";
import Space from "./components/layouts/Space";
import Header from "./components/layouts/Header";
import Layout from "./components/layouts/Layout";
import Content from "./components/layouts/Content";
import Sider from "./components/layouts/Sider";
import Footer from './components/layouts/Footer'
import style2 from './components/layouts/layout.module.css'

function App() {
  const [visible, setVisible] = useState(false);
  const [collapsible, setCollapsible] = useState(true);
  const [collapseStatus, setCollapseStatus] = useState(false);

  const items = [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
    { label: "Option 4" },
  ];
  const tabs = [
    { title: "Tab 1", content: <div>Content for Tab 1</div> },
    { title: "Tab 2", content: <div>Content for Tab 2</div> },
    { title: "Tab 3", content: <div>Content for Tab 3</div> },
  ];
  const menuItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ];
  const breadItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];
  const handleItemClick = (item) => {
    console.log(`Selected item: ${item.label}`);
  };
  const handleSelect = (item) => {
    console.log("Selected item:", item);
  };
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            margin: "0",
          }}
        >
          Menu
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
            height: "100%",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <Router>
            <div>
              <Menu items={menuItems} onItemClick={handleItemClick} />
              <div className="content">
                <Routes>
                  <Route path="/" />
                  <Route path="/about" />
                  <Route path="/services" />
                  <Route path="/contact" />
                </Routes>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
                height: "100%",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <InlineMenu items={menuItems} onSelect={handleItemClick} />
              <div></div>
            </div>
          </Router>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
            height: "100%",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <SelectedMenu items={items} onSelect={handleSelect} />
        </div>
      </div>
      <div>
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          Breadcrumbs
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
            height: "100%",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <Router>
            <div>
              <Breadcrumbs breadcrumbs={breadItems} />
            </div>
          </Router>
        </div>
        <div>
          <h1
            style={{
              textAlign: "center",
              padding: "10px",
              margin: "10px",
            }}
          >
            Tabs Example
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "15px",
              alignItems: "center",
              height: "100%",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <Tabs tabs={tabs} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
            height: "100%",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <div>
            <VerticalTabs tabs={tabs} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            margin: "0",
          }}
        >
          Buttons
        </h1>
        <PrimaryButton title="Primary Button" onClick={onclick}></PrimaryButton>
        <SecondaryButton
          title="Secondary Button"
          onClick={onclick}
        ></SecondaryButton>
        <LinkButton title="Link Button" onClick={onclick}></LinkButton>
        <TextButton title="Text Button" onClick={onclick}></TextButton>
        <DashedButton title="Dashed Button" onClick={onclick}></DashedButton>
        <Card
          imageSrc="https://via.placeholder.com/300"
          title="Card Title 1"
          description="This is a longer description of the card content. Click the button to toggle more or less content."
        />
      </div>


      <div>
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          Modal Components
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "15px",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >

              <div>
                <button
                  className={style.modal_button}
                  onClick={() => setVisible(true)}
                >
                  Open Modal
                </button>
                <PureModal isOpen={visible} onClose={() => setVisible(false)}>
                  <button onClick={() => setVisible(false)}>Close</button>
                  <h1>Hello Modal</h1>
                </PureModal>
              </div>

              <div>
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
                  <Col span={6} >Lorem ipsum dolor sit amet.</Col>
                  <Col span={6}>Lorem ipsum dolor sit amet.</Col>
                  <Col span={6}>Lorem ipsum dolor sit amet.</Col>
                </Row>
              </div>

              <div style={{ width: '100%', height: '100%' }}>
                <Divider orientation='right'>
                  <p>laboriosam.</p>
                </Divider>
              </div>

              <Space size={20} direction='column' align='center' wrap='wrap'>
                <button>submit</button>
                <button>reload</button>
                <button>close</button>
              </Space>

              <Layout>
                <Header>Header</Header>
                <Layout className={style2.layout2} hasSider={true}>
                  <Sider collapsed={collapseStatus} collapsible={collapsible}>
                    <p>Lorem</p>
                    <button onClick={() => setCollapseStatus(!collapseStatus)}>open/close</button>
                  </Sider>
                  <Content>lorem</Content>
                </Layout>
                <Footer>Footer</Footer>
              </Layout>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
