import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.detail} target="_blank">
          <BiLinkExternal /> &nbsp; View Details
        </Button> {' '}

        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp; Source Code
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
