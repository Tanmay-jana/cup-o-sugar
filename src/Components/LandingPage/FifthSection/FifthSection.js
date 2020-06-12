import React, { Component } from "react";
import "./FifthSection.css";
import fruits from "../../../assets/sZ3D5YuA.png";

export default class FifthSection extends Component {
  render() {
    return (
      <div className="fifth-section">
        <img className="fruit-image" src={fruits} alt="fruits" />
        <div className="fifth-text-container">
          <h3>
            “You never change things by fighting the existing reality. To change
            something, build a new model that makes the existing model
            obsolete.”
          </h3>
          <h4>B. Fuller</h4>
          <a className = "green-button" href = "/">Partner with us</a>
        </div>
      </div>
    );
  }
}