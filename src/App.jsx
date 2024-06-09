import "./App.css";
import DeleteModal from "./components/Modal/DeleteModal";
import Info from "./components/Modal/Info";
import ModalLayout from "./components/Modal/ModalLayout";
import Warning from "./components/Modal/Warning";
import Success from "./components/Modal/Success";
import ErrorModal from "./components/Modal/ErrorMondal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/navigation/menus/menus";
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

function App() {
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
            margin: "20px",
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
                margin: "20px",
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
            margin: "20px",
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
            margin: "20px",
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
              margin: "20px",
            }}
          >
            <Tabs tabs={tabs} />
          </div>
        </div>
        <div style={
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
            height: "100%",
            width: "100%",
            margin: "20px",
          }
        
        }>
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
          margin: "20px",
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
            margin: "10px",
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
          <ModalLayout open={true} />
          <Info />
          <Success title="Some task has completed!" />
          <Warning title="This is a warning message" open={true} />
          <DeleteModal title="Are you sure delete this task?" open={true} />
          <ErrorModal title="This is an error message" open={true} />
        </div>
      </div>
    </>
  );
}

export default App;
