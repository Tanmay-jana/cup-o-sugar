import React, { Component } from "react";
import "./FourthSection.css";
import gala from "../../../assets/gala.png";
import brook from "../../../assets/brook.png";
import rema from "../../../assets/rema.png";

export default class FourthSection extends Component {
  render() {
    return (
      <div className="fourth-container">
        <div className="fourth-text-container">
          <h1>Meet Our Awesome Team</h1>
          <p>
            "Individually, we are one drop. Together, we are an ocean." –
            Ryunosuke Satoro
          </p>
          <p>
            A small but diverse team committed to making a big difference in the
            world.
          </p>
        </div>
        <div className="personality-section">
          <div>
            <img src={gala} alt="gala" />
            <h4>Dr. Thaddeus Gala</h4>
            <p>Advisor, Investor</p>
          </div>
          <div>
            <img src={brook} alt="brook" />
            <h4>Brook Sheehan</h4>
            <p>Co-Founder & Head of Business</p>
          </div>
          <div>
            <img src={rema} alt="rema" />
            <h4>Rema Ambedkader</h4>
            <p>Co-Founder & CEO</p>
          </div>
        </div>
      </div>
    );
  }
}
