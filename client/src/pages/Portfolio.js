import React from "react";
import Media from "react-bootstrap/Media";

const Portfolio = (props) => {

    const isEnglish = () => {
        if (props.props.match.params.lang === "eng")
            return true;
        return false
    };

    return (
        <>
            {isEnglish() ? (
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header className="masthead text-center">
                        <div>
                            <h1 className="masthead-brand text-light">
                                <a href="/eng">Aldo Solano</a>
                            </h1>
                            <nav className="nav nav-masthead justify-content-center">
                                <a className="nav-link" href="/about/eng">About</a>
                                <a className="nav-link" href="/contact/eng">Contact</a>
                                <a className="nav-link active" href="/portfolio/eng">Portfolio</a>
                            </nav>
                        </div>
                    </header>
                    <main className="cover">
                        <h2 className="text-light text-center my-4"><b>My projects</b></h2>
                        <hr className="divider" />
                        <ul className="list-unstyled mt-4">
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/188/188333.svg"
                                    alt="friendfinder" />
                                <Media.Body>
                                    <h5><b>
                                        Complemento Natural
                                            <span className="badge badge-pill badge-success ml-2">MERN</span>
                                        <span className="badge badge-pill badge-light ml-2">E-Commerce</span>
                                    </b></h5>
                                    <p className="mb-0">
                                        Online store
                                            <small className="text-muted ml-2"><em>(under development)</em></small>
                                    </p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/complemento"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/148/148963.svg"
                                    alt="aag" />
                                <Media.Body>
                                    <h5><b>
                                        AAG
                                            <span className="badge badge-pill badge-success ml-2">MERN</span>
                                    </b></h5>
                                    <p className="mb-0">
                                        Governmental Audit Assistant
                                            <small className="text-muted ml-2"><em>(under development)</em></small>
                                    </p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/audit"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                        <span className="mx-2">-</span>
                                        <a className="text-warning" href="https://immense-badlands-57890.herokuapp.com/login"
                                            target="_blank" rel="noopener noreferrer">Demo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/863/863170.svg"
                                    alt="giftastic" />
                                <Media.Body>
                                    <h5><b>
                                        Giftastic
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                    </b></h5>
                                    <p className="mb-0">Gifs about your favorite movies</p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/giftastic"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                        <span className="mx-2">-</span>
                                        <a className="text-warning" href="https://aldoglez34.github.io/giftastic/"
                                            target="_blank" rel="noopener noreferrer">Demo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/1636/1636759.svg"
                                    alt="rps" />
                                <Media.Body>
                                    <h5><b>
                                        Rock-Papers-Scissors
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                        <span className="badge badge-pill badge-light ml-2">Firebase</span>
                                    </b></h5>
                                    <p className="mb-0">
                                        Online multiplayer rock-papers-scissors game
                                            <small className="text-muted ml-2"><em>(under development)</em></small>
                                    </p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/rock-paper-scissors"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                        <span className="mx-2">-</span>
                                        <a className="text-warning" href="https://aldoglez34.github.io/rock-paper-scissors/"
                                            target="_blank" rel="noopener noreferrer">Demo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/148/148718.svg"
                                    alt="friendfinder" />
                                <Media.Body>
                                    <h5><b>
                                        Street Watcher
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                        <span className="badge badge-pill badge-light ml-2">MySQL</span>
                                    </b></h5>
                                    <p className="mb-0">Web App that allows you to report non-emergency traffic violations</p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/third-eye"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                        <span className="mx-2">-</span>
                                        <a className="text-warning" href="https://btcmp-project-2.herokuapp.com/"
                                            target="_blank" rel="noopener noreferrer">Demo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/135/135759.svg"
                                    alt="beerhunters" />
                                <Media.Body>
                                    <h5><b>
                                        Beer Hunters
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                    </b></h5>
                                    <p className="mb-0">
                                        Find beers around you
                                            <small className="text-muted ml-2"><em>(under development)</em></small>
                                    </p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/beer_hunters"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                        <span className="mx-2">-</span>
                                        <a className="text-warning" href="https://aldoglez34.github.io/beer_hunters/"
                                            target="_blank" rel="noopener noreferrer">Demo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/1546/1546611.svg"
                                    alt="guesstheword" />
                                <Media.Body>
                                    <h5><b>
                                        Guess the Word
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span></b>
                                    </h5>
                                    <p className="mb-0">Challenge your word knowledge with this game</p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/wordguessgame"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                        <span className="mx-2">-</span>
                                        <a className="text-warning" href="https://aldoglez34.github.io/wordguessgame/"
                                            target="_blank" rel="noopener noreferrer">Demo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/579/579007.svg"
                                    alt="trivia"
                                />
                                <Media.Body>
                                    <h5><b>
                                        Trivia
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                    </b></h5>
                                    <p className="mb-0">'90s theme trivia</p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/triviagame"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                        <span className="mx-2"></span>
                                        <a className="text-warning" href="https://aldoglez34.github.io/triviagame/"
                                            target="_blank" rel="noopener noreferrer">Demo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media as="li">
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://image.flaticon.com/icons/svg/1156/1156419.svg"
                                    alt="liribot" />
                                <Media.Body>
                                    <h5><b>
                                        Liri Bot<span className="badge badge-pill badge-light ml-2">Node App</span>
                                    </b></h5>
                                    <p className="mb-0">Backend app to find movies, songs and concert dates</p>
                                    <p>
                                        <a className="text-warning" href="https://github.com/aldoglez34/liri-node-app"
                                            target="_blank" rel="noopener noreferrer">Repo</a>
                                    </p>
                                </Media.Body>
                            </Media>
                        </ul>
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
                                    <a className="nav-link" href="/contact/spa">Contacto</a>
                                    <a className="nav-link active" href="/portfolio/spa">Portafolio</a>
                                </nav>
                            </div>
                        </header>
                        <main className="cover">
                            <h2 className="text-light text-center my-4"><b>Mis proyectos</b></h2>
                            <hr className="divider" />
                            <ul className="list-unstyled">
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/188/188333.svg"
                                        alt="friendfinder" />
                                    <Media.Body>
                                        <h5><b>
                                            Complemento Natural
                                            <span className="badge badge-pill badge-success ml-2">MERN</span>
                                            <span className="badge badge-pill badge-light ml-2">E-Commerce</span>
                                        </b></h5>
                                        <p className="mb-0">
                                            Tienda en línea de productos naturistas
                                            <small className="text-muted ml-2"><em>(en desarrollo)</em></small>
                                        </p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/complemento"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/148/148963.svg"
                                        alt="aag" />
                                    <Media.Body>
                                        <h5><b>
                                            AAG
                                            <span className="badge badge-pill badge-success ml-2">MERN</span>
                                        </b></h5>
                                        <p className="mb-0">
                                            Aplicación web asistente en el proceso de auditoría gubernamental
                                            <small className="text-muted ml-2"><em>(en desarrollo)</em></small>
                                        </p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/audit"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                            <span className="mx-2">-</span>
                                            <a className="text-warning" href="https://immense-badlands-57890.herokuapp.com/login"
                                                target="_blank" rel="noopener noreferrer">Demo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/863/863170.svg"
                                        alt="giftastic" />
                                    <Media.Body>
                                        <h5><b>
                                            Giftastic
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                        </b></h5>
                                        <p className="mb-0">Buscador de gifs e información general sobre películas</p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/giftastic"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                            <span className="mx-2">-</span>
                                            <a className="text-warning" href="https://aldoglez34.github.io/giftastic/"
                                                target="_blank" rel="noopener noreferrer">Demo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/1636/1636759.svg"
                                        alt="rps" />
                                    <Media.Body>
                                        <h5><b>
                                            Rock-Papers-Scissors
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                            <span className="badge badge-pill badge-light ml-2">Firebase</span>
                                        </b></h5>
                                        <p className="mb-0">
                                            Juego multijugador de piedra, papel o tijeras
                                            <small className="text-muted ml-2"><em>(en desarrollo)</em></small>
                                        </p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/rock-paper-scissors"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                            <span className="mx-2">-</span>
                                            <a className="text-warning" href="https://aldoglez34.github.io/rock-paper-scissors/"
                                                target="_blank" rel="noopener noreferrer">Demo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/148/148718.svg"
                                        alt="friendfinder" />
                                    <Media.Body>
                                        <h5><b>
                                            Street Watcher
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                            <span className="badge badge-pill badge-light ml-2">MySQL</span>
                                        </b></h5>
                                        <p className="mb-0">Aplicación web para reportar violaciones de tránsito</p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/third-eye"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                            <span className="mx-2">-</span>
                                            <a className="text-warning" href="https://btcmp-project-2.herokuapp.com/"
                                                target="_blank" rel="noopener noreferrer">Demo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/135/135759.svg"
                                        alt="beerhunters" />
                                    <Media.Body>
                                        <h5><b>
                                            Beer Hunters
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                        </b></h5>
                                        <p className="mb-0">
                                            Encuentra cervezas cerca de tu locación
                                            <small className="text-muted ml-2"><em>(en desarrollo)</em></small>
                                        </p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/beer_hunters"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                            <span className="mx-2">-</span>
                                            <a className="text-warning" href="https://aldoglez34.github.io/beer_hunters/"
                                                target="_blank" rel="noopener noreferrer">Demo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/1546/1546611.svg"
                                        alt="guesstheword" />
                                    <Media.Body>
                                        <h5><b>
                                            Guess the Word
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span></b>
                                        </h5>
                                        <p className="mb-0">Desafía tus conocimientos de palabras con este juego</p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/wordguessgame"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                            <span className="mx-2">-</span>
                                            <a className="text-warning" href="https://aldoglez34.github.io/wordguessgame/"
                                                target="_blank" rel="noopener noreferrer">Demo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/579/579007.svg"
                                        alt="trivia"
                                    />
                                    <Media.Body>
                                        <h5><b>
                                            Trivia
                                            <span className="badge badge-pill badge-light ml-2">jQuery</span>
                                        </b></h5>
                                        <p className="mb-0">Trivia con tema de los '90s</p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/triviagame"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                            <span className="mx-2"></span>
                                            <a className="text-warning" href="https://aldoglez34.github.io/triviagame/"
                                                target="_blank" rel="noopener noreferrer">Demo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://image.flaticon.com/icons/svg/1156/1156419.svg"
                                        alt="liribot" />
                                    <Media.Body>
                                        <h5><b>
                                            Liri Bot<span className="badge badge-pill badge-light ml-2">Node App</span>
                                        </b></h5>
                                        <p className="mb-0">Aplicación Node para encontrar películas, canciones y conciertos</p>
                                        <p>
                                            <a className="text-warning" href="https://github.com/aldoglez34/liri-node-app"
                                                target="_blank" rel="noopener noreferrer">Repo</a>
                                        </p>
                                    </Media.Body>
                                </Media>
                            </ul>
                        </main>
                    </div>
                )}
        </>
    );

};

export default Portfolio;
