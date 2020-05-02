/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import Header from "../Header/Header";
import phone from '../../../assets/iPhone.png';
import "./FirstSection.css";

export default class FirstSection extends Component {
  render() {
    return (
      <div className="first-section-container">
        {/* <Header /> */}
        <div className = "text-container">
          <h1>Convenience through Community</h1>
          <p>
            Cup O’ Sugar app is uniquely designed to connect hyper-local
            communities together with the intention of creating a place where
            neighbors can share excess food items and request items needed in a
            pinch.
          </p>
          <div className = "button-container">
              <a className = "link-button solid" href = "#">Get the app</a>
              <a className = "link-button stripe" href = "#">Learn more</a>
          </div>
        </div>
        <div className = "img-container">
        <img className = "phone" src = {phone} alt = "phone"/>
        </div>
        
      </div>
    );
  }
}
