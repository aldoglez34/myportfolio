import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = (props) => {

    const isEnglish = () => {
        if (props.props.match.params.lang === "eng")
            return true;
        return false
    }

    return (
        <>

            {isEnglish() ? (

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" >
                    <header className="masthead text-center">
                        <div>
                            <h1 className="masthead-brand text-light">
                                <a href="/eng">Aldo Solano</a>
                            </h1>
                            <nav className="nav nav-masthead justify-content-center">
                                <a className="nav-link" href="/about/eng">About</a>
                                <a className="nav-link active" href="/contact/eng">Contact</a>
                                <a className="nav-link" href="/portfolio/eng">Portfolio</a>
                            </nav>
                        </div>
                    </header>
                    <main className="cover">
                        <hr className="divider" />
                        <h2><b className="text-light">Let's talk,</b></h2>
                        <p className="text-justify">Feel free to get in touch with me. I am always open to discussing new projects,
creative ideas or opportunities to be part of your visions.</p>
                        <Form className="text-left mt-4" method="POST" action="https://formspree.io/aldoglez34@gmail.com">
                            <Form.Group>
                                <Form.Label>Name *</Form.Label>
                                <Form.Control type="text" placeholder="Full name" name="name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email address *</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Subject *</Form.Label>
                                <Form.Control type="text" placeholder="Subject" name="subject" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Message *</Form.Label>
                                <Form.Control as="textarea" placeholder="Your message" rows="3" name="message" />
                            </Form.Group>
                            <Form.Group className="text-right mt-4">
                                <Button variant="light" type="submit" className="btn btn-primary" value="Send">Send</Button>
                            </Form.Group>
                        </Form>
                    </main>
                </div>

            ) : (

                    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                        <header className="masthead text-center">
                            <div>
                                <h1 className="masthead-brand text-light">
                                    <a href="/spa">Aldo Solano</a>
                                </h1>
                                <nav className="nav nav-masthead justify-content-center">
                                    <a className="nav-link" href="/about/spa">Acerca</a>
                                    <a className="nav-link active" href="/contact/spa">Contacto</a>
                                    <a className="nav-link" href="/portfolio/spa">Portafolio</a>
                                </nav>
                            </div >
                        </header >
                        <main className="cover">
                            <hr className="divider" />
                            <h2><b className="text-light">Vamos a hablar,</b></h2>
                            <p className="text-justify">Eres libre de ponerte en contacto conmigo. Siempre estoy disponible para discutir nuevos proyectos, ideas creativas y oportunidades de trabajo para ser parte de tus visiones.</p>
                            <Form className="text-left mt-4" method="POST" action="https://formspree.io/aldoglez34@gmail.com">
                                <Form.Group>
                                    <Form.Label>Nombre *</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre completo" name="name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Dirección de correo *</Form.Label>
                                    <Form.Control type="email" placeholder="nombre@ejemplo.com" name="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Tema *</Form.Label>
                                    <Form.Control type="text" placeholder="Tema" name="subject" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Mensaje *</Form.Label>
                                    <Form.Control as="textarea" placeholder="Tu mensaje" rows="3" name="message" />
                                </Form.Group>
                                <Form.Group className="text-right mt-4">
                                    <Button variant="light" type="submit" className="btn btn-primary" value="Send">Enviar</Button>
                                </Form.Group>
                            </Form>
                        </main>
                    </div>

                )}
        </>
    );

}

export default Contact;
