import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import TypeSelector from "./components/TypeSelector";
import Fade from "react-reveal/Fade";
import Subtitle from "../../../components/subtitle/Subtitle";
import API from "../../../utils/API";

const Contact = () => {
  const yupschema = yup.object({
    name: yup
      .string()
      .matches(
        /^[a-zA-Z-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ ]+$/,
        "Sólo letras"
      )
      .required("Requerido"),
    email: yup
      .string()
      .email("Formato de email incorrecto")
      .required("Requerido"),
    type: yup.string().required("Requerido"),
    description: yup.string().required("Requerido"),
  });

  return (
    <Fade>
      <Subtitle text="Contacto" />
      <p className="lead text-center mb-3">
        Describe brevemente tu proyecto y contáctame usando el siguiente
        formulario.
      </p>
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              description: "",
              type: "",
            }}
            validationSchema={yupschema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              // console.log("values", values);
              API.sendEmail(values)
                .then((res) => {
                  // console.log(res);
                  alert(res.data);
                  setSubmitting(false);
                })
                .catch((err) => {
                  console.log(err);
                  alert(
                    "Ocurrió un error al enviar tu mensaje, por favor inténtalo más tarde."
                  );
                  setSubmitting(false);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                {/* name */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      maxLength="80"
                      type="text"
                      placeholder="Tu nombre completo"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.name && !errors.name}
                      isInvalid={touched.name && !!errors.name}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="name"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* email */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      maxLength="80"
                      placeholder="ejemplo@correo.com"
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="email"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* type */}
                <Field name="type" id="type" type="string">
                  {({ field: { value }, form: { setFieldValue } }) => (
                    <div className="mb-3">
                      <label htmlFor="type">Tipo</label>
                      <TypeSelector
                        selected={value}
                        handleClick={(str) => setFieldValue("type", str)}
                      />
                    </div>
                  )}
                </Field>
                <ErrorMessage
                  className="text-danger"
                  name="type"
                  component="div"
                />
                {/* description */}
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      maxLength="250"
                      as="textarea"
                      rows="3"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.description && !errors.description}
                      isInvalid={touched.description && !!errors.description}
                    />
                    <ErrorMessage
                      className="text-danger"
                      name="description"
                      component="div"
                    />
                  </Form.Group>
                </Form.Row>
                {/* buttons */}
                <Form.Group>
                  <Button
                    className="mt-2"
                    variant="light"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div
                        style={{ paddingLeft: "13px", paddingRight: "13px" }}
                      >
                        <Spinner size="sm" animation="border" />
                      </div>
                    ) : (
                      "Enviar"
                    )}
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
      <p className="lead text-center mb-0 mt-3">
        También puedes comunicarte conmigo al siguiente número
      </p>
      <p className="lead text-center mb-4">
        <i className="fab fa-whatsapp mr-1" style={{ color: "goldenrod" }} />
        228 111 20 31
      </p>
    </Fade>
  );
};

export default Contact;
