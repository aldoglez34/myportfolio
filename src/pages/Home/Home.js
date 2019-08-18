import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./home.css";

class Home extends Component {

    state = {
        english: true
    }

    handleLanguage = params => {
        let lang = params;
        switch (lang) {
            case "eng":
                this.setState({ english: true });
                break;
            case "spa":
                this.setState({ english: false });
                break;
            default:
                this.setState({ english: true });
        }
    }

    render() {

        if (this.state.english) {
            return (
                <>

                    <div className="cover-container d-flex flex-column p-3 mx-auto w-100 h-100">

                        <header className="masthead mb-auto text-center">
                            <div>
                                <h1 className="masthead-brand text-light">
                                    <a href="/">Aldo Solano</a>

                                </h1>
                            </div>
                        </header>

                        <div className="cover text-center">
                            <h1 className="welcoming text-light">Welcome to my online portfolio</h1>
                            <p className="text-muted">Transforming your projects from good to great!</p>
                            <div className="button" id="button-index">
                                <div id="circle"></div>
                                <a href="/about/eng">Enter</a>
                            </div>
                        </div>

                        <footer className="mastfoot mt-auto mb-3">
                            <div className="d-flex flex-row justify-content-center">
                                <Button variant="link" className="lang activelang mr-4" onClick={() => this.handleLanguage("eng")}>English</Button>
                                <Button variant="link" className="lang ml-4" name="toSpa" onClick={() => this.handleLanguage("spa")}>Spanish</Button>
                            </div>
                        </footer>
                    </div>

                </>
            )
        }
        else {
            return (
                <>

                    <div className="cover-container d-flex flex-column p-3 mx-auto w-100 h-100">

                        <header className="masthead mb-auto text-center">
                            <div>
                                <h1 className="masthead-brand text-light">
                                    <a href="/">Aldo Solano</a>

                                </h1>
                            </div>
                        </header>

                        <div className="cover text-center">
                            <h1 className="welcoming text-light">Bienvenido a mi portafolio en línea</h1>
                            <p className="text-muted">¡Transformando tus proyectos de buenos a excelentes!</p>
                            <div className="button" id="button-index">
                                <div id="circle"></div>
                                <a href="/about/spa">Entrar</a>
                            </div>
                        </div>

                        <footer className="mastfoot mt-auto mb-3">
                            <div className="d-flex flex-row justify-content-center">
                                <Button variant="link" className="lang mr-4" onClick={() => this.handleLanguage("eng")}>Inglés</Button>
                                <Button variant="link" className="lang activelang ml-4" name="toSpa" onClick={() => this.handleLanguage("spa")}>Español</Button>
                            </div>
                        </footer>
                    </div>

                </>
            )
        }

    }
};

export default Home;
