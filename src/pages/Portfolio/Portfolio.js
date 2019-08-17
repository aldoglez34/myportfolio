import React from "react";
import Media from "react-bootstrap/Media";

const Portfolio = () => (

    <>

        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

            <header className="masthead text-center">
                <div>
                    <h1 className="masthead-brand text-light">
                        <a href="/">Aldo Solano</a>
                    </h1>
                    <nav className="nav nav-masthead justify-content-center">
                        <a className="nav-link" href="/about">About</a>
                        <a className="nav-link" href="/contact">Contact</a>
                        <a className="nav-link active" href="/portfolio">Portfolio</a>
                    </nav>
                </div>
            </header>

            <main className="cover">

                <hr className="divider" />

                <h2><b className="text-light">My projects,</b></h2>
                <p className="text-justify">Check out my projects. Some of them are Front-End Web Games using jQuery and
                    Firebase with polished UI's with Boostrap and CSS3, some of them are Back-End Apps made with Node.js, and
                    there are also Full Stack Web Apps built with MERN. If you are interested in any project, go to their
                GitHub Repo to check out what specific technologies I used in order to build them.</p>

                <ul className="list-unstyled mt-4">

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/863/863170.svg"
                            alt="giftastic"
                        />
                        <Media.Body>
                            <h5><b>Giftastic<span className="badge badge-pill badge-light ml-2">jQuery</span></b></h5>
                            <p className="mb-0">Gifs about your favorite movies</p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/giftastic"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a className="text-warning" href="https://aldoglez34.github.io/giftastic/"
                                    target="_blank">GitHub Pages</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/1636/1636759.svg"
                            alt="rps"
                        />
                        <Media.Body>
                            <h5><b>Rock-Papers-Scissors<span className="badge badge-pill badge-light ml-2">Firebase</span></b></h5>
                            <p className="mb-0">Online rock-papers-scissors game to play with your friends</p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/rock-paper-scissors"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a className="text-warning" href="https://aldoglez34.github.io/rock-paper-scissors/"
                                    target="_blank">GitHub Pages</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/148/148801.svg"
                            alt="friendfinder"
                        />
                        <Media.Body>
                            <h5><b>Street Watcher
                                <span className="badge badge-pill badge-light ml-2">MySQL</span></b></h5>
                            <p className="mb-0">Web App that helps you report non-emergency traffic violations</p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/third-eye"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a className="text-warning" href="https://btcmp-project-2.herokuapp.com/" target="_blank">Heroku
                                App</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/188/188333.svg"
                            alt="friendfinder"
                        />
                        <Media.Body>
                            <h5><b>Complemento Natural
                                <span className="badge badge-pill badge-light ml-2">React</span></b></h5>
                            <p className="mb-0">E-commerce <small className="text-muted">(under construction)</small></p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/complemento"
                                    target="_blank">GitHub Repo</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/135/135759.svg"
                            alt="beerhunters"
                        />
                        <Media.Body>
                            <h5><b>Beer Hunters<span className="badge badge-pill badge-light ml-2">jQuery</span></b></h5>
                            <p className="mb-0">Find beers around you.</p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/beer_hunters"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a className="text-warning" href="https://aldoglez34.github.io/beer_hunters/"
                                    target="_blank">GitHub Pages</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/1546/1546611.svg"
                            alt="guesstheword"
                        />
                        <Media.Body>
                            <h5><b>Guess the Word<span className="badge badge-pill badge-light ml-2">jQuery</span></b></h5>
                            <p className="mb-0">Challenge your word knowledge with this game</p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/wordguessgame"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a className="text-warning" href="https://aldoglez34.github.io/wordguessgame/"
                                    target="_blank">GitHub Pages</a>
                            </p>
                        </Media.Body>
                    </Media>

                    {/* <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/1281/1281055.svg"
                            alt="starwars"
                        />
                        <Media.Body>
                            <h5><b>Star Wars</b></h5>
                            <p className="mb-0">Star Wars fighting game with turn based gameplay</p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/starwarsgame"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a className="text-warning" href="https://aldoglez34.github.io/starwarsgame/"
                                    target="_blank">GitHub Pages</a>
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
                            <h5><b>Trivia</b></h5>
                            <p className="mb-0">'90s theme trivia with a time limit</p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/triviagame"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a className="text-warning" href="https://aldoglez34.github.io/triviagame/"
                                    target="_blank">GitHub Pages</a>
                            </p>
                        </Media.Body>
                    </Media>





                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/138/138256.svg"
                            alt="bamazon"
                        />
                        <Media.Body>
                            <h5><b>Bamazon</b></h5>
                            <p className="mb-0">Back-End app that simulates an online store like Amazon</p>
                            <p>
                                <a class="text-warning" href="https://github.com/aldoglez34/bamazon" target="_blank">GitHub
                                Repo</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/1006/1006106.svg"
                            alt="friendfinder"
                        />
                        <Media.Body>
                            <h5><b>Friend Finder</b></h5>
                            <p className="mb-0">Find your soulmate based on a few questions</p>
                            <p>
                                <a class="text-warning" href="https://github.com/aldoglez34/friend-finder"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a class="text-warning" href="https://stark-earth-50574.herokuapp.com/"
                                    target="_blank">Heroku App</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/1046/1046784.svg"
                            alt="friendfinder"
                        />
                        <Media.Body>
                            <h5><b>Eat-Da-Burger</b></h5>
                            <p className="mb-0">Make burgers and eat them</p>
                            <p>
                                <a class="text-warning" href="https://github.com/aldoglez34/burger" target="_blank">GitHub
                                Repo</a>
                                <span className="mx-2">/</span>
                                <a class="text-warning" href="https://peaceful-shore-59316.herokuapp.com/"
                                    target="_blank">Heroku App</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/1536/1536577.svg"
                            alt="friendfinder"
                        />
                        <Media.Body>
                            <h5><b>Clicky Game<span className="badge badge-pill badge-light ml-2">React</span></b></h5>
                            <p className="mb-0">Don't click the same image twice</p>
                            <p>
                                <a class="text-warning" href="https://github.com/aldoglez34/clickygame"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a class="text-warning" href="https://vast-castle-92307.herokuapp.com/"
                                    target="_blank">Heroku App</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/1862/1862571.svg"
                            alt="friendfinder"
                        />
                        <Media.Body>
                            <h5><b>All the News That's Fit to Scrape
                                <span className="badge badge-pill badge-light ml-2">MongoDB</span></b></h5>
                            <p className="mb-0">Don't click the same image twice</p>
                            <p>
                                <a class="text-warning" href="https://github.com/aldoglez34/webscraping"
                                    target="_blank">GitHub Repo</a>
                                <span className="mx-2">/</span>
                                <a class="text-warning" href="https://enigmatic-reef-68721.herokuapp.com/"
                                    target="_blank">Heroku App</a>
                            </p>
                        </Media.Body>
                    </Media>

                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://image.flaticon.com/icons/svg/1156/1156419.svg"
                            alt="liribot"
                        />
                        <Media.Body>
                            <h5><b>Liri Bot</b></h5>
                            <p className="mb-0">Node app to find movies, songs and concert dates from your favorite artists.</p>
                            <p>
                                <a className="text-warning" href="https://github.com/aldoglez34/liri-node-app"
                                    target="_blank">GitHub Repo</a>
                            </p>
                        </Media.Body>
                    </Media> */}

                </ul>

                {/* <div className="d-flex justify-content-center">
                    <nav aria-label="...">
                        <ul className="pagination pagination-md">
                            <li className="page-item active" aria-current="page">
                                <span className="page-link bg-light text-dark border border-light">
                                    1
                                <span className="sr-only">(current)</span>
                                </span>
                            </li>
                            <li className="page-item"><a className="page-link bg-dark text-light"
                                href="./portfolio-page2.html">2</a>
                            </li>
                        </ul>
                    </nav>
                </div> */}

            </main>

        </div>

    </>

);

export default Portfolio;
