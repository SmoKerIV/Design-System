// import "./syles/variable.css"
import "./App.css";
import Menu from "./components/navigation/menus/menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InlineMenu from "./components/navigation/menus/inlinemenu";
import SelectedMenu from "./components/navigation/menus/selected";
import Breadcrumbs from "./components/navigation/breadcrumbs/bread";
import Tabs from "./components/navigation/tabs/tabs";
import VerticalTabs from "./components/navigation/tabs/tab2";
import style from "./components/PureModal/pureModal.module.css";
import { PureModal } from "./components/PureModal/pureModal";
import { useState } from "react";
import Sider from "./components/layouts/Sider";
import style2 from './components/layouts/layout.module.css'
import { Row } from "./components/layouts/Row";
import Col from "./components/layouts/Column";
import PrimaryButton from "./components/buttons/primary-button";
import LinkButton from "./components/buttons/link-button";
import SecondaryButton from "./components/buttons/sec-button";
import TextButton from "./components/buttons/text-button";
import DashedButton from "./components/buttons/dashedbutton";
import DisabledButton from "./components/buttons/disabledButton";
import IconButton from "./components/buttons/iconButton";
import Badges from "./components/datadisplay/badges/badges";
import LoadingButton from "./components/buttons/loadingButton";
import Card from "./components/datadisplay/card/card";
import ListComponent from "./components/datadisplay/lists/list";
import InfoAlert from "./components/feedback/alerts/infoAlert";
import WarningAlert from "./components/feedback/alerts/warningAlert";
import ErrorAlert from "./components/feedback/alerts/errorAlert";
import SuccessAlert from "./components/feedback/alerts/successAlert";
import Notification from "./components/feedback/Notifications/notification";
import CircularProgressBar from "./components/feedback/progress/circular";
import HomeIcon from "./components/buttons/button-assets/home-icon.svg";
import BellIcon from "./components/datadisplay/badges/assets/bell-icon.svg";
import InputField from "./components/Forms/Input/input";
import Inputmail from "./components/Forms/Input/inputmail";
import SearchInput from "./components/Forms/Input/searchinput";
import Checkbox from "./components/Forms/checkbox/checkbox";
import Radio from "./components/Forms/radio/radio";
import Form from "./components/Forms/form/form";
import TableComponent from "./components/datadisplay/Table/table";
import { Content, Divider, Footer, Header, Layout, Space } from "./components/layouts";
import DocumentationForm from "./components/docs/documentation";

function App() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(true);
  const [indeterminate, setIndeterminate] = useState(true);
  const [disabledChecked, setDisabledChecked] = useState(true);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [collapsible, setCollapsible] = useState(true);
  const [collapseStatus, setCollapseStatus] = useState(false);
  const [fields, setFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Name",
      type: "text",
      value: "",
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      value: "",
      required: false,
    },
  ]);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields(updatedFields);
  };

  const validate = () => {
    let validationErrors = {};
    fields.forEach((field) => {
      if (field.required && !formValues[field.name]) {
        validationErrors[field.name] = `${field.label} is required`;
      }
    });
    return validationErrors;
  };

  const menuCode = `
    const menuItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ];

    const handleItemClick = (item) => {
    console.log(Selected item: (item.label);
    return(
      <Menu items={menuItems} onItemClick={handleItemClick} />
    )
  };`;
  const inlineMenu = `
  import React, { useState } from 'react';
  import InlineMenu from './InlineMenu';
  
  function App() {
      const items = [
          { label: 'Navigation One' },
          { label: 'Navigation Two' },
          { label: 'Navigation Three' },
      ];
  
      const handleSelect = (item) => {
          console.log('Selected item:', item);
      };
  
      return (
          <div className="App">
              <InlineMenu items={items} onSelect={handleSelect} />
          </div>
      );
  }
  
  export default App;`;

  const modalCode = `
  import style from "./pureModal.module.css";


export const PureModal = ({ isOpen = false, onClose = () => { }, children }) => {

  const [visible, setVisible] = useState(false);

    if (!isOpen) return;

    return <div className={style.pureModal}>
        <div className={style.backdrop} onClick={onClose}></div>
        <div className={style.contnet}>
            {children}
        </div>
    </div>
}`;

  const RowCode = `
import style from './layout.module.css'

export const Row = ({ gutter, children }) => {

    return (
        <div className={style.grid} style={{ rowGap: gutter[0], columnGap: gutter[1] }}>
            {children}
        </div>
    )
}`;


  const dividerCode = `
  import style from './layout.module.css'

export const Divider = ({ orientation, orientationMargin, type, children }) => {
    let st = {}

    if (orientation === 'left') {
        st = {
            top: '50%',
            left: '0%',
            transform: 'transform: translate(0%, -50%)'
        }
    } else if (orientation === 'right') {
        st = {
            top: '50%',
            right: '0%',
            transform: 'translate(0%, -50%)'
        }
    } else {
        st = {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }


    return (
        <div className={style.Divider}>
            <p className={style.p} style={st}>
                {children}
            </p>
        </div>
    );
}`;


  const spaceCode = `
import style from './layout.module.css';


const Space = ({ children, align, size, direction, wrap }) => {
    return (
        <div className={style.space} style={{ alignItems: align || 'flex-start', flexDirection: direction || 'row', flexWrap: wrap || 'nowrap', gap: size || '0' }}>
            {children}
        </div>
    )
}

export default Space`;

  const LayoutCode = `
import style from './layout.module.css'

const Layout = ({ children, hasSider }) => {

    let st = {}

    if (hasSider) {
        st = {
            display: 'flex',
        }
    }

    return (
        <div className={style.layout} style={st}>{children}</div>
    )
}

export default Layout
`;

  const headerCode = ``;

  const siderCode = ``;

  const footerCode = ``;

  const initialRows = Array.from({ length: 10 }, () => ({
    columns: Array(8).fill("text"),
    tag1: "green",
    tag2: "geekblue",
  }));
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formValues);
    } else {
      setErrors(validationErrors);
    }
  };
  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleNotificationsClick = () => {
    console.log("Notifications clicked");
  };
  const handleItemClick = (item) => {
    console.log(`Selected item: ${item.label}`);
  };
  const handleSelect = (item) => {
    console.log("Selected item:", item);
  };
  const handleInputChange = (value) => {
    console.log(value);
  };
  const handleSearch = (value) => {
    alert(`Searching for: ${value}`);
  };

  return (
    <>
      <div>
        <h1>Menu</h1>
        <div className="container">
          <Router>
            <div>
              <DocumentationForm
                componentName="Menu"
                description="A dynamic menu to navigate from one page to another."
                propsInfo={[
                  { name: 'items', type: 'array', description: 'objects of each path and its label' },

                ]}
                stateInfo={[
                  { name: 'onClick', type: 'function', description: ' handles when the item is clicked' },
                ]}
                codeSnippet={menuCode}


              >
                <Menu items={menuItems} onItemClick={handleItemClick} />
              </DocumentationForm>
            </div>
            <div className="container">
              <DocumentationForm
                componentName="InlineMenu"
                description="An inline menu component that displays a dropdown menu. It allows users to select an item from the list."
                propsInfo={[
                  { name: 'items', type: 'array', description: 'Array of menu items to be displayed in the dropdown. Each item should have a `label` property.' },

                ]}
                stateInfo={[{ name: 'onSelect', type: 'function', description: 'Callback function to handle item selection. It receives the selected item as an argument.' }]}
                codeSnippet={inlineMenu}
              >
                <InlineMenu items={menuItems} onSelect={handleSelect} />
              </DocumentationForm>
              <div></div>
            </div>
          </Router>
        </div>
        <div className="container">
          <SelectedMenu items={items} onSelect={handleSelect} />
        </div>
      </div>
      <div>
        <h1>Breadcrumbs</h1>
        <div className="container">
          <Router>
            <div>
              <Breadcrumbs breadcrumbs={breadItems} />
            </div>
          </Router>
        </div>
        <div>
          <h1>Tabs Example</h1>
          <div className="container">
            <Tabs tabs={tabs} />
          </div>
        </div>
        <div className="container">
          <div>
            <VerticalTabs tabs={tabs} />
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Input</h1>
        <div>
          <InputField placeholder={"example"} onChange={handleInputChange} />
          <Inputmail placeholder={"example"} onChange={handleInputChange} />
          <SearchInput
            placeholder={"example"}
            onChange={handleInputChange}
            onSearch={handleSearch}
          />
        </div>
      </div>
      <div>
        <h1>Checkboxes</h1>
        <div className="container">
          <div>
            <Checkbox
              label="Label"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <Checkbox
              label="Label"
              indeterminate={indeterminate}
              checked={false}
              onChange={() => setIndeterminate(!indeterminate)}
            />
            <Checkbox
              label="Label"
              disabled
              checked={disabledChecked}
              onChange={() => setDisabledChecked(!disabledChecked)}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Radio Buttons</h1>
        <div className="radio-group">
          <div className="radio-row">
            <Radio label="Normal" name="example" value="normal" />
            <Radio label="Normal" name="example" value="normal" />
            <Radio label="Disabled" name="example" value="disabled" disabled />
          </div>
        </div>
      </div>
      <div>
        <h1>Form</h1>
        <div className="container">
          <Form
            fields={fields}
            formValues={formValues}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="container">
        <h1>Buttons</h1>
        <PrimaryButton
          title="Primary Button"
          onClick={handleClick}
        ></PrimaryButton>
        <SecondaryButton
          title="Secondary Button"
          onClick={handleClick}
        ></SecondaryButton>
        <LinkButton title="Link Button" onClick={handleClick}></LinkButton>
        <TextButton title="Text Button" onClick={handleClick}></TextButton>
        <DashedButton
          title="Dashed Button"
          onClick={handleClick}
        ></DashedButton>
        <Card
          imageSrc="https://via.placeholder.com/300"
          title="Card Title 1"
          description="This is a longer description of the card content. Click the button to toggle more or less content."
        />
        <DisabledButton title="Disabled Button"></DisabledButton>
        <IconButton
          title="Icon Button"
          onClick={handleClick}
          icon={
            <img
              src={HomeIcon}
              alt="Bell icon"
              className="Bell-icon"
              style={{ height: "20px", width: "25px" }}
            />
          }
        />
        <LoadingButton
          title="Loading Button"
          onClick={async () => {
            return new Promise((resolve) => setTimeout(resolve, 3000));
          }}
        />
        <Badges
          title=""
          notificationCount={5}
          onClick={handleNotificationsClick}
          icon={
            <img
              src={BellIcon}
              alt="Bell icon"
              className="Bell-icon"
              style={{ height: "20px", width: "25px", cursor: "pointer" }}
            />
          }
        />
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
        <SuccessAlert
          title="Success Tips"
          description="Detailed description and advice about successful copywriting."
        />
        <InfoAlert
          title="Informational Notes"
          description="Additional description and information about copywriting."
        />
        <WarningAlert
          title="Warning"
          description="This is a warning notice about copywriting."
        />
        <ErrorAlert
          title="Error"
          description="This is a warning notice about copywriting."
        />
        <Notification
          title="Notification Title"
          message="Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible."
        />
        <CircularProgressBar value={75} color="pink" />
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
        }}
      >
        <TableComponent
          initialRows={[
            {
              columns: ["Text1", "Text2"],
              tag1: "Tag 1",
              tag2: "Tag 2",
            },
            {
              columns: ["Text1", "Text2"],
              tag1: "Tag 1",
              tag2: "Tag 2",
            },
            {
              columns: ["Text1", "Text2"],
              tag1: "Tag 1",
              tag2: "Tag 2",
            },
          ]}
          name={"john Doe"}
          columnTitles={[
            "Title",
            "Title",
            "Title",
            "Title",
            "Title",
            "Title",
            "Title",
          ]}
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
        <div className="container">
          <div className="modal-container">
            <div className="modal-content">


              <div >
                <button
                  className={style.modal_button}
                  onClick={() => setVisible(true)}
                >
                  Open Modal
                </button>

                <div className="container">
                  <DocumentationForm
                    componentName="Modal"
                    description="An inline menu component that displays a dropdown menu. It allows users to select an item from the list."
                    propsInfo={[
                      { name: 'items', type: 'array', description: 'Array of menu items to be displayed in the dropdown. Each item should have a `label` property.' },

                    ]}
                    stateInfo={[{ name: 'onSelect', type: 'function', description: 'Callback function to handle item selection. It receives the selected item as an argument.' }]}
                    codeSnippet={modalCode}
                  >
                    <PureModal isOpen={visible} onClose={() => setVisible(false)}>
                      <button onClick={() => setVisible(false)}>Close</button>
                      <h1>Hello Modal</h1>
                    </PureModal>
                  </DocumentationForm>
                </div>

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
                  <Col span={6}>Lorem ipsum dolor sit amet.</Col>
                  <Col span={6}>Lorem ipsum dolor sit amet.</Col>
                  <Col span={6}>Lorem ipsum dolor sit amet.</Col>
                </Row>
              </div>

              <div style={{ width: "100%", height: "100%" }}>
                <Divider orientation="right">
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
