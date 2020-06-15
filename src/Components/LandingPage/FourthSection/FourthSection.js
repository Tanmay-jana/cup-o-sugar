import React, { Component } from "react";
import "./FourthSection.css";
import gala from "../../../assets/gala.png";
import brook from "../../../assets/brook.png";
import rema from "../../../assets/rema.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class FourthSection extends Component {
  render() {
    return (
      <div className="fourth-container">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          className="fourth-text-container"
        >
          <h1>Meet Our Awesome Team</h1>
          <p>
            <i>
              "Individually, we are one drop. Together, we are an ocean." –
              Ryunosuke Satoro
            </i>
          </p>
        </ScrollAnimation>
        <div className="personality-section">
          <div>
            <img src={gala} alt="gala" onClick={() => window.open("https://www.linkedin.com/in/dr-thaddeus-gala-97499313/", "_blank")}/>
            <h4>Dr. Thaddeus Gala</h4>
            <p>Advisor, Investor</p>
          </div>
          <div>
            <img src={brook} alt="brook" onClick={() => window.open("https://www.linkedin.com/in/brooksbee422/", "_blank")}/>
            <h4>Brook Sheehan</h4>
            <p>Co-Founder & Head of Business</p>
          </div>
          <div>
            <img src={rema} alt="rema" onClick={() => window.open("https://www.linkedin.com/in/rema-abedkader-16b629123/", "_blank")}/>
            <h4>Rema Ambedkader</h4>
            <p>Co-Founder & CEO</p>
          </div>
        </div>
      </div>
    );
  }
}
