import React from "react";
import "./home.css";

const Home = (props) => {
  const isEnglish = () => {
    if (props.props.match.params.lang === "eng") return true;
    return false;
  };

  return (
    <>
      {isEnglish() ? (
        <div className="cover-container d-flex flex-column p-3 mx-auto w-100 h-100">
          <header className="masthead mb-auto text-center">
            <div>
              <h1 className="masthead-brand text-light">
                <a href="/eng">Aldo Solano</a>
              </h1>
            </div>
          </header>
          <div className="cover text-center">
            <h1 className="welcoming text-light">
              Welcome to my online portfolio
            </h1>
            <p className="text-muted">
              Transforming your projects from good to great!
            </p>
            <div className="button" id="button-index">
              <div id="circle"></div>
              <a href="/about/eng">Enter</a>
            </div>
          </div>
          <footer className="mastfoot mt-auto mb-3">
            <div className="d-flex flex-row justify-content-center">
              <a href="/spa" className="lang mr-4">
                Español
              </a>
              <a href="/eng" className="lang activelang ml-4">
                English
              </a>
            </div>
          </footer>
        </div>
      ) : (
        <div className="cover-container d-flex flex-column p-3 mx-auto w-100 h-100">
          <header className="masthead mb-auto text-center">
            <div>
              <h1 className="masthead-brand text-light">
                <a href="/spa">Aldo Solano</a>
              </h1>
            </div>
          </header>
          <div className="cover text-center">
            <h1 className="welcoming text-light">
              Bienvenido a mi portafolio en línea
            </h1>
            <p className="text-muted">
              ¡Transformando tus proyectos de buenos a excelentes!
            </p>
            <div className="button" id="button-index">
              <div id="circle"></div>
              <a href="/about/spa">Entrar</a>
            </div>
          </div>
          <footer className="mastfoot mt-auto mb-3">
            <div className="d-flex flex-row justify-content-center">
              <a href="/spa" className="lang activelang mr-4">
                Español
              </a>
              <a href="/eng" className="lang ml-4">
                English
              </a>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Home;
