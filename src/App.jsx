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
import HomeIcon from "./icons/home-icon.svg";
import BellIcon from "./icons/bell-icon.svg";
import InputField from "./components/Forms/Input/input";
import Inputmail from "./components/Forms/Input/inputmail";
import SearchInput from "./components/Forms/Input/searchinput";
import Checkbox from "./components/Forms/checkbox/checkbox";

function App() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(true);
  const [unchecked, setUnchecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const [disabledChecked, setDisabledChecked] = useState(true);
  const [disabledUnchecked, setDisabledUnchecked] = useState(false);

  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleNotificationsClick = () => {
    console.log("Notifications clicked");
  };
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
          Input
        </h1>
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
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            margin: "0",
          }}
        >
          Checkboxes
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
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}>
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
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                error earum eligtia, perferendis ut? Error esse magnam natus
                placeat iure!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                explicabo facilis cupiditate! Eos quos officiis architecto modi
                ex eum repellendus odit nesciunt assumenda, nihil, voluptatem
              </p>

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
                  <Col span={8}>
                    <div>hello</div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id, nulla!
                    </p>
                  </Col>
                  <Col span={8}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste, sint.
                    </p>
                  </Col>
                  <Col span={8}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam, accusantium.
                  </Col>
                  <Col span={0}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas, reiciendis.
                    </p>
                  </Col>
                  <Col span={24}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
