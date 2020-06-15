import React, { Component } from "react";
import "./SecondSection.css";
import SEVC3adc from "../../../assets/SEVC3adc.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class SecondSection extends Component {
  render() {
    return (
      <div className="second-container">
        <img className="fruit" src={SEVC3adc} alt="SEVC3adc" />
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          className="second-left"
        >
          <h1>Save Time. Make Friends. Create Impact.</h1>
          <p>
            Food is our <i>master connector</i> and time is our{" "}
            <i>greatest asset</i>.{" "}
          </p>
          <p>
            Cup O’ Sugar app is uniquely designed to connect local communities
            together by creating a place where neighbors can share excess food
            ingredients and/or request needed ingredients in a pinch.
          </p>
          <p>
            With the use of simple technology, we’ve made it easy for you to
            save time by connecting with your community. In just 30 seconds, you
            can be well on your way to finding the missing ingredient for your
            recipe or sharing any excess - without feeling awkward. Each
            interaction fosters better connections between you and your
            neighbors cultivating <span>sustainability</span> and <span>friendships</span>.
          </p>
        </ScrollAnimation>
      </div>
    );
  }
}
