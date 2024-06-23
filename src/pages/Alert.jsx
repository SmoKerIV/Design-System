import React from 'react'
import Badges from "../components/datadisplay/badges/badges";
import Notification from "../components/feedback/Notifications/notification";
import BellIcon from "../components/datadisplay/badges/assets/bell-icon.svg";
import Alert from "../components/feedback/alerts/alert2";
import DocumentationForm from "../components/docs/documentation";


const Alerts = () => {

    const successAlertCode = `

    return (
        <Alert type="Success" description="Detailed description and advice about successful copywriting." />
    );
    return (
        <Alert type="Warning" description="This is a warning notice about copywriting."/>
    
    );
    return (
        <Alert type="Info" description="Additional description and information about copywriting."/>
    );
    return (
        <Alert type="Error" description="This is a warning notice about copywriting."/>
    
    );
    return (
    <Notification
        title="Notification Title"
        message="Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible."/>
    );
    `;
    const badgesCode = `

    const handleNotificationsClick = () => {
        console.log("Notifications clicked");
      };
    
    return (
       <Badges
              title=""
              notificationCount={5}
              onClick={handleNotificationsClick}
              icon={Bellicon}
            />
    );
    `;
    const Bellicon = (
        <img
          src={BellIcon}
          alt="Bell icon"
          className="Bell-icon"
          style={{
            height: "20px",
            width: "25px",
            cursor: "pointer",
            display: "block",
            marginLeft: "3px",
          }}
        />
      );
    
    
    
      const handleNotificationsClick = () => {
        console.log("Notifications clicked");
      };
  return (
    <div>
                <DocumentationForm
          componentName="Alert"
          description="An alert component that displays a message."
          propsInfo={[
            {
              name: "title",
              type: "string",
              description: "Title text for the alert.",
            },
            {
              name: "description",
              type: "string",
              description: "Description text for the alert.",
            },
          ]}
          stateInfo={[]}
          codeSnippet={successAlertCode}
        >
          <Alert
            type="Success"
            description="Detailed description and advice about successful copywriting."
          />
          <Alert
            type="Warning"
            description="This is a warning notice about copywriting."
          />
          <Alert
            type="Info"
            description="Additional description and information about copywriting."
          />
          <Alert
            type="Error"
            description="This is a warning notice about copywriting."
          />
          <Notification
            title="Notification Title"
            message="Proactively incubate innovative processes for high-payoff architectures. Globally benchmark flexible."
          />
        </DocumentationForm>
        <DocumentationForm
          componentName="Badges"
          description="A badge component that displays a notification count."
          propsInfo={[
            {
              name: "title",
              type: "string",
              description: "Title text for the badge.",
            },
            {
              name: "notificationCount",
              type: "number",
              description: "Number of notifications to be displayed.",
            },
            {
              name: "onClick",
              type: "function",
              description: "Callback function to handle badge click.",
            },
            {
              name: "icon",
              type: "element",
              description: "Icon element to be displayed in the badge.",
            },
          ]}
          stateInfo={[]}
          codeSnippet={badgesCode}
        >
          <Badges
            title=""
            notificationCount={5}
            onClick={handleNotificationsClick}
            icon={Bellicon}
          />
        </DocumentationForm>

    </div>
  )
}

export default Alerts