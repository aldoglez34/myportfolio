import React from "react";
import { Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";

const Project = React.memo(({ img, link, title }) => {
  return (
    <Button variant="outline-light" href={link}>
      <div className="text-center">
        <Image src={img} width="55" height="55" />
        <span style={{ fontSize: "19px" }}>{title}</span>
      </div>
    </Button>
  );
});

Project.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Project;
