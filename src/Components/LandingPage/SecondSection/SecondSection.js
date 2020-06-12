import React, { Component } from "react";
import "./SecondSection.css";
import SEVC3adc from "../../../assets/SEVC3adc.png";

export default class SecondSection extends Component {
  render() {
    return (
      <div className="second-container">
      <img className="fruit" src={SEVC3adc} alt="SEVC3adc" />
        <div className="second-left">
          <h1>Save Time. Make Friends. Create Impact.</h1>
          <p>Food is our master connector and time is our greatest asset. </p>
          <p>
            Cup O’ Sugar app is uniquely designed to connect local communities
            together by creating a place where neighbors can share excess food
            ingredients and/or request needed ingredients in a pinch. With the
            use of simple technology, we’ve made it easy for you to save time by
            connecting with your community. In just 30 seconds, you can be well
            on your way to finding the missing ingredient for your recipe or
            sharing any excess - without feeling awkward.
          </p>
          <p>
            Each interaction fosters better interactions between you and your
            neighbors cultivating sustainability and friendships.
          </p>
        </div>
      </div>
    );
  }
}
