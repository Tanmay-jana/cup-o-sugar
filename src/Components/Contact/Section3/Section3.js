import React, { Component } from "react";
import "./Section3.css";
import iphone from "../../../assets/iPhoneXDarkCopy.png";

export default class Section3 extends Component {
  render() {
    return (
      <div className="contact-section3-container">
        <img src={iphone} alt="iphone" />
        <div className="contact-section3-text-block">
          <h1>
            Driven By
            <br />
            Community Needs
          </h1>
          <h4>
            1 to 1 chat feature to connect with neighbors from a distance.
          </h4>
          <h4>Built-in UPC scanner for quick upload of food items to share.</h4>
          <h4>
            Extensive search features to find exactly what you are looking for.
          </h4>
          <h4>
            Personalize your experience with a large selection of dietary food
            types.
          </h4>
          <h4>Trust seals and user rate-ability for safety and protection.</h4>
          <p>
            Connections shared between residents adds value to your company in
            ways such as better-quality leads, referrals, and an overall sense
            of belonging. When you foster a greater sense of community this
            gives way to reduced tenant turnover rates and better upkeep of the
            property.
          </p>
        </div>
      </div>
    );
  }
}
