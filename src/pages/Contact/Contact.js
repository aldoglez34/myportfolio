import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => (

    <>

        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

            <header className="masthead text-center">
                <div>
                    <h1 className="masthead-brand text-light">
                        <a href="/">Aldo Solano</a>
                    </h1>
                    <nav className="nav nav-masthead justify-content-center">
                        <a className="nav-link" href="/about">About</a>
                        <a className="nav-link active" href="/contact">Contact</a>
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </nav>
                </div>
            </header>

            <main className="cover">

                <hr className="divider" />

                <h2><b className="text-light">Let's talk,</b></h2>
                <p className="text-justify">Feel free to get in touch with me. I am always open to discussing new projects,
                creative ideas or opportunities to be part of your visions.</p>

                <Form className="text-left mt-4">
                    <Form.Group controlId="name">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control type="text" placeholder="Full name" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address *</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subject *</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message *</Form.Label>
                        <Form.Control as="textarea" placeholder="Your message" rows="3" />
                    </Form.Group>
                    <Form.Group className="text-right mt-4">
                        <Button variant="light" type="submit" className="btn btn-primary">Send</Button>
                    </Form.Group>
                </Form>

            </main>

        </div>

    </>

);

export default Contact;
