import React from "react";
import "./socials.scss";
import Fade from "react-reveal/Fade";
import Subtitle from "../../../components/subtitle/Subtitle";

const MySocials = () => {
  return (
    <footer id="myfooterstyle" className="mt-auto text-center">
      <Fade>
        <Subtitle text="Sociales" />
        <p>A continuación están los vínculos a mis redes sociales.</p>
        <div className="d-flex flex-row justify-content-center text-white">
          {/* twitter */}
          <a
            href="https://twitter.com/heyitsaldo"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="socialLogo"
          >
            <i className="fab fa-twitter" />
          </a>
          {/* github */}
          <a
            href="https://github.com/aldoglez34"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            className="socialLogo"
          >
            <i className="fab fa-github" />
          </a>
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/aldo-solano-41875198/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="socialLogo"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          {/* cv */}
          <a
            href="/cv/cv_aldosolano_eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Curriculum Vitae"
            className="socialLogo"
          >
            <i className="fas fa-file-alt" />
          </a>
        </div>
      </Fade>
    </footer>
  );
};

export default MySocials;
