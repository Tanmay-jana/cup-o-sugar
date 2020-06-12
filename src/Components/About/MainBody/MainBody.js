import React, { Component } from "react";
import "./MainBody.css";

export default class MainBody extends Component {
  state = {
    number: 0
  };

  onQuestionClick(value) {
    if (this.state.number === value) {
      this.setState({ number: 0 });
    } else {
      this.setState({ number: value });
    }
  }

  render() {
    return (
      <div className="main-body-container">
        <p>Got questions?</p>
        <h1>We can help!</h1>
        <div className="quentions-container">
          <div className="question-block">
            <div
              onClick={() => this.onQuestionClick(1)}
              className="question-header"
            >
              <p>How It Works</p>{" "}
              <i
                className={
                  this.state.number === 1
                    ? "arrow fa fa-angle-up"
                    : "arrow fa fa-angle-down"
                }
              ></i>
            </div>
            <div className={this.state.number === 1 ? "ans-body" : "no-ans"}>
              <p>
                Innovator angel investor branding rockstar seed round growth
                hacking channels business-to-consumer user experience
                infographic. Business-to-consumer market gamification stock
                analytics MVP. Agile divelopment low hanging fruit beta
                influencer.
              </p>
            </div>
          </div>
          <div className="question-block">
            <div
              onClick={() => this.onQuestionClick(2)}
              className="question-header"
            >
              <p>How to Earn Sugar Cubes and Badges</p>
              <i
                className={
                  this.state.number === 2
                    ? "arrow fa fa-angle-up"
                    : "arrow fa fa-angle-down"
                }
              ></i>
            </div>
            <div className={this.state.number === 2 ? "ans-body" : "no-ans"}>
              <p>
                Innovator angel investor branding rockstar seed round growth
                hacking channels business-to-consumer user experience
                infographic. Business-to-consumer market gamification stock
                analytics MVP. Agile divelopment low hanging fruit beta
                influencer.
              </p>
            </div>
          </div>
          <div className="question-block">
            <div
              onClick={() => this.onQuestionClick(3)}
              className="question-header"
            >
              <p>Features</p>{" "}
              <i
                className={
                  this.state.number === 3
                    ? "arrow fa fa-angle-up"
                    : "arrow fa fa-angle-down"
                }
              ></i>
            </div>
            <div className={this.state.number === 3 ? "ans-body" : "no-ans"}>
              <p>
                Innovator angel investor branding rockstar seed round growth
                hacking channels business-to-consumer user experience
                infographic. Business-to-consumer market gamification stock
                analytics MVP. Agile divelopment low hanging fruit beta
                influencer.
              </p>
            </div>
          </div>
          <div className="question-block">
            <div
              onClick={() => this.onQuestionClick(4)}
              className="question-header"
            >
              <p>Updating Mileage</p>{" "}
              <i
                className={
                  this.state.number === 4
                    ? "arrow fa fa-angle-up"
                    : "arrow fa fa-angle-down"
                }
              ></i>
            </div>
            <div className={this.state.number === 4 ? "ans-body" : "no-ans"}>
              <p>
                Innovator angel investor branding rockstar seed round growth
                hacking channels business-to-consumer user experience
                infographic. Business-to-consumer market gamification stock
                analytics MVP. Agile divelopment low hanging fruit beta
                influencer.
              </p>
            </div>
          </div>
          <div className="question-block">
            <div
              onClick={() => this.onQuestionClick(5)}
              className="question-header"
            >
              <p>Account Settings</p>
              <i
                className={
                  this.state.number === 5
                    ? "arrow fa fa-angle-up"
                    : "arrow fa fa-angle-down"
                }
              ></i>
            </div>
            <div className={this.state.number === 5 ? "ans-body" : "no-ans"}>
              <p>
                Innovator angel investor branding rockstar seed round growth
                hacking channels business-to-consumer user experience
                infographic. Business-to-consumer market gamification stock
                analytics MVP. Agile divelopment low hanging fruit beta
                influencer.
              </p>
            </div>
          </div>
          <div className="question-block">
            <div
              onClick={() => this.onQuestionClick(6)}
              className="question-header"
            >
              <p>Editing Your Account Info</p>
              <i
                className={
                  this.state.number === 6
                    ? "arrow fa fa-angle-up"
                    : "arrow fa fa-angle-down"
                }
              ></i>
            </div>
            <div className={this.state.number === 6 ? "ans-body" : "no-ans"}>
              <p>
                Innovator angel investor branding rockstar seed round growth
                hacking channels business-to-consumer user experience
                infographic. Business-to-consumer market gamification stock
                analytics MVP. Agile divelopment low hanging fruit beta
                influencer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
