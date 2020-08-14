import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import PropTypes from "prop-types";

const TypeSelector = React.memo(({ selected, handleClick }) => {
  return (
    <ButtonGroup toggle className="d-flex flex-row justify-content-center">
      <ToggleButton
        type="radio"
        variant="outline-light"
        value="Publicidad"
        checked={selected === "Publicidad"}
        onChange={(e) => handleClick(e.currentTarget.value)}
        style={{ cursor: "pointer" }}
        className="d-flex justify-content-center"
      >
        <span className="d-flex align-items-center">Publicidad</span>
      </ToggleButton>
      <ToggleButton
        type="radio"
        variant="outline-light"
        value="Tienda en Línea"
        checked={selected === "Tienda en Línea"}
        onChange={(e) => handleClick(e.currentTarget.value)}
        style={{ cursor: "pointer" }}
        className="d-flex justify-content-center"
      >
        <span className="d-flex align-items-center">Tienda en Línea</span>
      </ToggleButton>
      <ToggleButton
        type="radio"
        variant="outline-light"
        value="Aplicación Web"
        checked={selected === "Aplicación Web"}
        onChange={(e) => handleClick(e.currentTarget.value)}
        style={{ cursor: "pointer" }}
        className="d-flex justify-content-center"
      >
        <span className="d-flex align-items-center">Aplicación Web</span>
      </ToggleButton>
    </ButtonGroup>
  );
});

TypeSelector.propTypes = {
  selected: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default TypeSelector;
