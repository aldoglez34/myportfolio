import React from "react";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import resume from "../../images/resume.png";
import "./about.css";

const About = props => {
  const isEnglish = () => {
    if (props.props.match.params.lang === "eng") return true;
    return false;
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
                <a className="nav-link active" href="/about/eng">
                  About
                </a>
                <a className="nav-link" href="/contact/eng">
                  Contact
                </a>
                <a className="nav-link" href="/portfolio/eng">
                  Portfolio
                </a>
              </nav>
            </div>
          </header>
          <main className="cover">
            <hr className="divider" />
            <h2>
              <b className="text-light">Hello,</b>
            </h2>
            <p className="text-justify">
              My name is Aldo Solano and I'm an experienced Full Stack Web
              Developer and Data Analyst from Mexico City. Educated at
              Tecnológico de Monterrey Full Stack Flex Program, I also have a
              Bachelor's Degree in Computer Science at Universidad Veracruzana.
              Creativity, organization, patience and curiosity are my strongest
              instrinsic skills. My technical skills include the development and
              design of MERN web apps, C#, Java and SQL Server; that combined
              with my experience in collaborative, deadline-driven environments
              make me a strong addition to any Full Stack Web Development team.
              I'm also a senior DBA with 8+ years of solid experience working with Data Analysis, Data Mining and Business Intelligence Technologies.
            </p>
            <p className="text-justify">
              Creativity, organization, patience and curiosity are my strongest
              instrinsic skills. My technical skills include the development and
              design of MERN web apps, C#, Java and SQL Server; that combined
              with my experience in collaborative, deadline-driven environments
              make me a strong addition to any Full Stack Web Development team.
              I'm also a senior DBA with 8+ years of solid experience working with Data Analysis, Data Mining and Business Intelligence Technologies.
            </p>
            <p className="text-justify">
              I'm also a senior DBA with 8+ years of solid experience working with Data Analysis, Data Mining and Business Intelligence Technologies.
            </p>
            {/* quote */}
            <div className="blockquote text-center">
              <p className="mb-0" id="quote">
                "The devil is in the detail"
              </p>
              <footer className="blockquote-footer">
                Ludwig Mies Van Der Rohe
              </footer>
            </div>
            <p className="text-justify">
              Taking care of the smallest detail is my biggest strength. My
              passion lies in making responsive web apps using React and
              overall UX Design.
            </p>
            {/* socials */}
            <div className="d-flex justify-content-center mt-4">
              {/* github */}
              <div className="d-flex flex-column text-center">
                <a
                  href="https://github.com/aldoglez34"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    className="about-img img-fluid mb-2"
                    alt="Github"
                  />
                </a>
                <p className="text-muted">Github</p>
              </div>
              {/* linkedin */}
              <div className="d-flex flex-column text-center">
                <a
                  href="https://www.linkedin.com/in/aldo-solano-41875198/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    className="about-img img-fluid mb-2"
                    alt="LinkedIn"
                  />
                </a>
                <p className="text-muted">LinkedIn</p>
              </div>
              {/* resume */}
              <div className="d-flex flex-column text-center">
                <a
                  href="/cv_aldosolano_eng.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={resume}
                    className="about-img img-fluid mb-2"
                    alt="Resume"
                  />
                </a>
                <p className="text-muted">CV</p>
              </div>
            </div>
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
                  <a className="nav-link active" href="/about/spa">
                    Acerca
                </a>
                  <a className="nav-link" href="/contact/spa">
                    Contacto
                </a>
                  <a className="nav-link" href="/portfolio/spa">
                    Portafolio
                </a>
                </nav>
              </div>
            </header>
            <main className="cover">
              <hr className="divider" />
              <h2>
                <b className="text-light">Hola,</b>
              </h2>
              <p className="text-justify">
                Me llamo Aldo Solano y soy un experimentado Analista de Datos,
                Desarrollador y Diseñador Web de la Ciudad de México. Recibí mi
                educación en el programa Full Stack Flex del Tecnológico de
                Monterrey, también cuento con una Licenciatura en Informática por
                la Universidad Veracruzana.
            </p>
              <p className="text-justify">
                Creatividad, organización, paciencia y
                    curiosidad son mis principales habilidades intrínsecas. Mis
                    habilidades técnicas incluyen el desarrollo y diseño de
                    aplicaciones MERN, C#, Java y SQL Server; eso combinado con mi
                    experiencia en entornos colaborativos y con altos niveles de
                    presión me convierten en una sólida incorporación a cualquier
                    equipo de Desarrollo Web Full Stack. También soy un DBA senior con
    más de 8 años de experiencia trabajando en Análisis de Datos, Minería de Datos e Inteligencia de Negocios.
            </p>
              <p className="text-justify">
                También soy un DBA senior con
    más de 8 años de experiencia trabajando en Análisis de Datos, Minería de Datos e Inteligencia de Negocios.
            </p>
              {/* quote */}
              <div className="blockquote text-center">
                <p className="mb-0" id="quote">
                  "El diablo está en los detalles"
              </p>
                <footer className="blockquote-footer">
                  Ludwig Mies Van Der Rohe
              </footer>
              </div>
              <p className="text-justify">
                Cuidar el más mínimo detalle es mi mayor fortaleza. Mi pasión
                radica en crear aplicaciones web responsivas utilizando React y
                la UX en general.
            </p>
              {/* socials */}
              <div className="d-flex justify-content-center mt-4">
                {/* github */}
                <div className="d-flex flex-column text-center">
                  <a
                    href="https://github.com/aldoglez34"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      className="about-img img-fluid mb-2"
                      alt="Github"
                    />
                  </a>
                  <p className="text-muted">Github</p>
                </div>
                {/* linkedin */}
                <div className="d-flex flex-column text-center">
                  <a
                    href="https://www.linkedin.com/in/aldo-solano-41875198/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      className="about-img img-fluid mb-2"
                      alt="LinkedIn"
                    />
                  </a>
                  <p className="text-muted">LinkedIn</p>
                </div>
                {/* resume */}
                <div className="d-flex flex-column text-center">
                  <a
                    href="/cv_aldosolano_spa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={resume}
                      className="about-img img-fluid mb-2"
                      alt="Resume"
                    />
                  </a>
                  <p className="text-muted">CV</p>
                </div>
              </div>
            </main>
          </div>
        )}
    </>
  );
};

export default About;
