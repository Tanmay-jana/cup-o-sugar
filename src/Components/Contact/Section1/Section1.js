import React, { Component } from "react";
import "./Section1.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class Section1 extends Component {
  render() {
    return (
      <div className="contact-section1-container">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          className="contact-section-text-block"
        >
          <h1>Partner with us</h1>
          <p>
            As community managers desiring to build rapport and trust between
            residents at your properties, putting on community functions can
            seem tedious and costly with little to no results. Turnover rates
            remain at an average of 54% with each tenant staying around 2 years.
          </p>
          <p>
            Cup O’ Sugar is on a mission to restore those community connections
            that have been lost despite the highly connected world that exists
            at our fingertips today. We are harnessing the power of the
            smartphone and pairing it with the master connector of them all -
            FOOD! By bridging the gap between neighbors, the frustration and
            inconvenience of having to leave the house and pick up a forgotten
            item can be minimized, and deeper connections built.
          </p>
          <p>
            Human beings love helping one another but we hate asking for help
            ourselves. This app satisfies the desire to assist while taking the
            awkwardness out of the ask. A place where inconvenience fosters
            meaningful connections.
          </p>
        </ScrollAnimation>
      </div>
    );
  }
}
