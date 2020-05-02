import React, { Component } from "react";
import "./SecondSection.css";
import fruit from '../../../assets/685.jpg';

export default class SecondSection extends Component {
  render() {
    return (
      <div className="second-container">
        <div className="second-left">
          <h1>Be resourceful, save food wastage</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <img className = "fruit" src = {fruit} alt = "fruit"/>
      </div>
    );
  }
}
