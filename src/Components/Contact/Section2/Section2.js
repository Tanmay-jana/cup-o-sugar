import React, { Component } from "react";
import "./Section2.css";
import Bitmap2 from "../../../assets/Bitmap2.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class Section2 extends Component {
  render() {
    return (
      <div className="contact-section2-container">
        <ScrollAnimation animateIn="fadeIn" animateOnce = {true} className="contact-section2-text-block">
          <h1>How it works</h1>
          <h3>
            Users can connect to their local communities in 4 different ways
          </h3>
          <h4>Sharing Excess Food Items </h4>
          <h4>Requesting Needed Food Items</h4>
          <h4>Picking up Items that Others have Shared</h4>
          <h4>Assisting Other Neighbors with their Requested</h4>
          <p className = "">
            The built in the technology of Cup O’ Sugar makes it easy and
            convenient to perform any of the 4 steps above in less than 30
            seconds. Simply make a request if you’re in need. Hit SUBMIT & watch
            your community assist. If you have food items to share, simply SCAN
            the barcode (or enter the item) and have your listing up in a matter
            of seconds. Bringing back an old concept with some modern
            technological flair.
          </p>
        </ScrollAnimation>
        <img src={Bitmap2} alt="bit-img" />
      </div>
    );
  }
}
