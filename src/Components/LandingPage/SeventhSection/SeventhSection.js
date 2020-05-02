/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./SeventhSection.css";
import fruits from "../../../assets/fruit2.png";

export default class SeventhSection extends Component {
  render() {
    return (
      <div className="seven-section">
        <img src={fruits} alt="fruit" />
        <div className="seventh-text-container">
          <h1>Your sustainablity act starts now</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <a href = "#">Download</a>
        </div>
      </div>
    );
  }
}
