import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ProjectType = React.memo(({ types, value, handleChange }) => {
  return (
    <Form.Row>
      <Form.Group as={Col}>
        <Form.Label>Tipo de proyecto</Form.Label>
        <div className="d-flex flex-row mt-2 justify-content-center">
          {types.map((t) => {
            return (
              <Button
                key={t}
                variant="outline-light"
                onClick={() => handleChange(t)}
                active={t === value ? true : false}
                className="mx-2"
              >
                {t}
              </Button>
            );
          })}
        </div>
      </Form.Group>
    </Form.Row>
  );
});

ProjectType.propTypes = {
  types: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProjectType;
