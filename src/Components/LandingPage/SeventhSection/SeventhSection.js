/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./SeventhSection.css";
import fruits from "../../../assets/dHHRrKZA.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class SeventhSection extends Component {
  render() {
    return (
      <div className="seven-section">
        <ScrollAnimation animateIn="fadeIn" animateOnce = {true} className="seventh-text-container">
          <h1>Be The CHANGE.</h1>
          <p>
            By sharing food, you can help a neighbor who just got laid off, a
            college student celebrating the holidays away from their family, or
            a busy mom who just can’t head to the store again.
          </p>
          <p>
            When you need a helping hand, Cup O’ Sugar – and your community –
            will be here for you.
          </p>
          <a href="#">Download</a>
        </ScrollAnimation>
        <img src={fruits} alt="fruit" />
      </div>
    );
  }
}
