import { useState } from "react";
import style from "../components/PureModal/pureModal.module.css";
import { PureModal } from "../components/PureModal/pureModal";
import DocumentationForm from "../components/docs/documentation";

const Modal = () => {
  const [visible, setVisible] = useState(false);
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
  return (
    <div>
      <div className="container">
        <div className="container">
          <DocumentationForm
            componentName="Modal"
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
            codeSnippet={modalCode}
          >
            <button
              className={style.modal_button}
              onClick={() => setVisible(true)}
            >
              Open Modal
            </button>
            <PureModal
              title="Title here"
              closeIcon={true}
              isOpen={visible}
              onClose={() => setVisible(false)}
              onOk={() => console.log("OK button pressed")}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                fugiat!
              </p>
            </PureModal>
          </DocumentationForm>
        </div>
      </div>
    </div>
  );
};

export default Modal;
