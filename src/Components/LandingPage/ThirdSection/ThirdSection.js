import React, { Component } from "react";
import "./ThirdSection.css";
import phone2 from "../../../assets/phone2.png";
import friend from "../../../assets/friend.png";
import time from "../../../assets/time.png";
import impact from "../../../assets/impact.png";

export default class ThirdSection extends Component {
  render() {
    return (
      <div className="third-container">
        <div className="third-image-container">
          <img src={phone2} alt="phone" />
        </div>
        <div className="third-text-container">
          <div className="text-sub-container">
            <img src={time} alt="time" />
            <div className="">
              <h4>Save Time</h4>
              <p>
                By asking a neighbor instead of returning to the grocery store
              </p>
            </div>
          </div>
          <div className="text-sub-container">
            <img src={friend} alt="friend" />
            <div className="">
              <h4>Make Friends</h4>
              <p>With your neighbors and build a stronger community</p>
            </div>
          </div>
          <div className="text-sub-container">
            <img src={impact} alt="impact" />
            <div className="">
              <h4>Create Impact</h4>
              <p>Through these small but powerful connections</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
