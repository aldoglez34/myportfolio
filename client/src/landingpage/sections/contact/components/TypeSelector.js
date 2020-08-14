import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import PropTypes from "prop-types";

const TypeSelector = React.memo(({ value, onChange }) => {
  const [checked, setChecked] = useState();

  return (
    <ButtonGroup toggle className="d-flex flex-row justify-content-center">
      {console.log("value", value)}
      {console.log("onChange", onChange)}
      <ToggleButton
        type="radio"
        variant="outline-light"
        // name="Publicidad"
        value="Publicidad"
        checked={checked === "Publicidad"}
        onChange={(e) => {
          setChecked(e.currentTarget.value);
          onChange(e.currentTarget.value);
        }}
        style={{ cursor: "pointer" }}
      >
        Publicidad
      </ToggleButton>
      <ToggleButton
        type="radio"
        variant="outline-light"
        // name="Tienda en Línea"
        value="Tienda en Línea"
        checked={checked === "Tienda en Línea"}
        onChange={(e) => {
          setChecked(e.currentTarget.value);
          onChange(e.currentTarget.value);
        }}
        style={{ cursor: "pointer" }}
      >
        Tienda en Línea
      </ToggleButton>
      <ToggleButton
        type="radio"
        variant="outline-light"
        // name="Aplicación Web"
        value="Aplicación Web"
        checked={checked === "Aplicación Web"}
        onChange={(e) => {
          setChecked(e.currentTarget.value);
          onChange(e.currentTarget.value);
        }}
        style={{ cursor: "pointer" }}
      >
        Aplicación Web
      </ToggleButton>
    </ButtonGroup>
  );
});

TypeSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TypeSelector;

// <div className="d-flex flex-row mt-2 justify-content-center">
// <Button
//   variant="outline-light"
//   // onClick={() => onChange("Publicidad")}
//   active={value === "Publicidad" ? true : false}
//   className="mx-2"
//   onChange={onChange}
// >
//   Publicidad
// </Button>
// <Button
//   variant="outline-light"
//   // onClick={() => onChange("Tienda en línea")}
//   active={value === "Tienda en línea" ? true : false}
//   className="mx-2"
//   onChange={onChange}
// >
//   Tienda en línea
// </Button>
// <Button
//   variant="outline-light"
//   // onClick={() => onChange("Aplicación Web")}
//   active={value === "Aplicación Web" ? true : false}
//   className="mx-2"
//   onChange={onChange}
// >
//   Aplicación Web
// </Button>
// </div>
