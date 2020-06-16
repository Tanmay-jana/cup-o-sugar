/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import Header from "../Header/Header";
import phone from "../../../assets/iPhone.png";
import "./FirstSection.css";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import { topNavOption } from "../../../action/actions";

class FirstSection extends Component {
  render() {
    return (
      <div className="first-section-container">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          className="text-container"
        >
          <h1>Convenience Through Community</h1>
          <p>
            Cup O’ Sugar App is a convenient place for neighbors to connect over
            food ingredients. Allowing them to share and/or request items for
            FREE at their fingertips. Gone are the days where excess food is
            trashed and return trips to the grocery store are necessary.
          </p>
          <div className="button-container">
            <a className="link-button solid" href={this.props.link} target = "_blank">
              Get the app
            </a>
            <a className="link-button stripe" target = "_blank" href="https://youtu.be/-BvrLKweBc4">
              Learn more
            </a>
          </div>
        </ScrollAnimation>
        <div className="img-container">
          <img className="phone" src={phone} alt="phone" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    link: state.link
  }
}

export default connect(mapStateToProps, { topNavOption })(FirstSection);