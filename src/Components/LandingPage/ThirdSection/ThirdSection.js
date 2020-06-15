import React, { Component } from "react";
import "./ThirdSection.css";
import iPhoneXDarkCopy from '../../../assets/iPhoneXDarkCopy.png'
import ScrollAnimation from "react-animate-on-scroll";
import icon1 from '../../../assets/icon1.png'
import icon2 from '../../../assets/icon2.png'
import icon3 from '../../../assets/icon3.png'
import icon4 from '../../../assets/icon4.png'
import icon5 from '../../../assets/icon5.png'

export default class ThirdSection extends Component {
  render() {
    return (
      <div className="third-container">
        <img src = {iPhoneXDarkCopy} alt = "iPhone_img"/>
        <ScrollAnimation animateIn="fadeIn" animateOnce = {true} className = "third-left-subcontainer">
            <h1>Building Culinary Connections</h1>
            <div><img src = {icon1} alt = "icon-1"/><p>1 to 1 chat feature to connect with neighbors from a distance.</p></div>
            <div><img src = {icon2} alt = "icon-2"/><p>Built-in UPC scanner for quick upload of food items to share. </p></div>
            <div><img src = {icon3} alt = "icon-3"/><p>Extensive search features to find exactly what you are looking for.</p></div>
            <div><img src = {icon4} alt = "icon-4"/><p>Personalize your experience with a large selection of dietary food types.</p></div>
            <div><img src = {icon5} alt = "icon-5"/><p>Trust seals and user rate-ability for safety and protection.</p></div>
            <a href = "/" className = "green-button">Get the app</a>
        </ScrollAnimation>
      </div>
    );
  }
}
