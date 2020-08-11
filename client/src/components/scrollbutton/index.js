import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./scrollbutton.scss";
import Fade from "react-reveal/Fade";

class ScrollButton extends PureComponent {
  state = {
    intervalId: 0,
    is_visible: false,
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  render() {
    return this.state.is_visible ? (
      <Fade right>
        <span
          onClick={() => {
            this.scrollToTop();
          }}
          className="scroll d-flex align-items-center justify-content-center"
          title="Ir arriba"
        >
          <i className="fas fa-chevron-up" />
        </span>
      </Fade>
    ) : null;
  }
}

ScrollButton.propTypes = {
  scrollStepInPx: PropTypes.number.isRequired,
  delayInMs: PropTypes.number.isRequired,
};

export default ScrollButton;
