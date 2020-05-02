import React, { Component } from "react";
import "./FifthSection.css";
import fruits from "../../../assets/fruits.png";

export default class FifthSection extends Component {
  render() {
    return (
      <div className="fifth-section">
        <img className="fruit-image" src={fruits} alt="fruits" />
        <div className = "fifth-text-container">
          <h3>
            “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.”
          </h3>
          <h4>Leona Powell</h4>
          <p>Co-Founder of YouEye Designs</p>
        </div>
      </div>
    );
  }
}
