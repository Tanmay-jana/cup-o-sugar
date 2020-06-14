import React, { Component } from "react";
import "./ThirdSection.css";
import iPhoneXDarkCopy from '../../../assets/iPhoneXDarkCopy.png'
import ScrollAnimation from "react-animate-on-scroll";

export default class ThirdSection extends Component {
  render() {
    return (
      <div className="third-container">
        <img src = {iPhoneXDarkCopy} alt = "iPhone_img"/>
        <ScrollAnimation animateIn="fadeIn" animateOnce = {true} className = "third-left-subcontainer">
            <h1>Driven By Community Needs</h1>
            <p>1 to 1 chat feature to connect with neighbors from a distance.</p>
            <p>Built-in UPC scanner for quick upload of food items to share. </p>
            <p>Extensive search features to find exactly what you are looking for. </p>
            <p>Personalize your experience with a large selection of dietary food types.</p>
            <p>Trust seals and user rate-ability for safety and protection. </p>
            <a href = "/" className = "green-button">Get the app</a>
        </ScrollAnimation>
      </div>
    );
  }
}
