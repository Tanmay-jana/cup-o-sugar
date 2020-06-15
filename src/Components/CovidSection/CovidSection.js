/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./CovidSection.css";
import { connect } from "react-redux";
import { topNavOption } from "../../action/actions";
import Header from "../LandingPage/Header/Header";

class CovidSection extends Component {
  componentDidMount = () => {
      window.scrollTo(0,0)
    this.props.topNavOption("COVID");
  };

  render() {
    return (
      <div className="covidSection-container">
        <Header />
        <div className="covid-text-content">
          <h1>COVID 19</h1>
          <p>
            With COVID-19 creating a widespread public health crisis, we
            recognize the importance of social distancing. Food delivery drivers
            have started leaving orders on doorsteps, and we recommend that our
            users do this as well. Instead of ringing your neighbor’s doorbell,
            use the 1-on-1 chat feature on the app to let them know their
            requested food has arrived. Avoiding face-to-face interactions is
            vital when it comes to “flattening the curve,” and it keeps
            community giving accessible to those affected by social distancing
            mandates. Even in states where gatherings are banned completely, you
            can still make someone’s day, so long as you adhere to your state’s
            guidelines. The importance of connecting with others doesn’t
            diminish during these hard times, and when we help our neighbors, we
            can strengthen our communities.
          </p>
          <a className = "white-button" href = {this.props.link} target = "_blank">Get the app</a>
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

export default connect(mapStateToProps, { topNavOption })(CovidSection);
