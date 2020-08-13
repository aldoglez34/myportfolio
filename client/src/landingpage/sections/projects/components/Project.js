import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Project = React.memo(({ img, link, title, description }) => {
  return (
    <Card bg="transparent" border="dark" className="shadow">
      <Card.Img variant="top" src={img} height="150" />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h5">{title}</Card.Title>
        <Card.Text style={{ color: "gainsboro" }}>{description}</Card.Text>
        <Button
          variant="light"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto"
        >
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
});

Project.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
