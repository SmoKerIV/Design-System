import React from "react";
import Card from "../components/card/Cards";
import DocumentationForm from "../components/docs/documentation";

const CardC = () => {
  const cardPropsInfo = [
    { name: "title", type: "string", description: "The title of the card." },
    {
      name: "path",
      type: "string",
      description: "The path to navigate to when the card is clicked.",
    },
    {
      name: "img",
      type: "string",
      description: "The URL of the image to display in the card.",
    },
  ];
  const cardStateInfo = [];

  const cardCodeSnippet = `
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ title, path, img }) => {
  return (
    <div className="card">
      <Link to={path} className="card-link">
        <div className="card-content">
          <div className="title-container">
            <h3 className="title">{title}</h3>
          </div>
          <div className="img-container">
            <img src={img} alt={title} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
`;

  return (
    <div>
      <DocumentationForm
        componentName="Card"
        description="The Card component is used to display a clickable card with an image and a title. It navigates to a specified path when clicked."
        propsInfo={cardPropsInfo}
        stateInfo={cardStateInfo}
        codeSnippet={cardCodeSnippet}
      >
        <Card
          title="Sample Card"
          path="/sample-path"
          img="https://via.placeholder.com/150"
        />
      </DocumentationForm>{" "}
    </div>
  );
};

export default CardC;
