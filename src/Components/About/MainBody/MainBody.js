import React, { Component } from "react";
import "./MainBody.css";
import ScrollAnimation from "react-animate-on-scroll";

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
        <h1>We Can Help!</h1>
        <ScrollAnimation animateIn="fadeIn" className="quentions-container">
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
              <div>
                Cup O' Sugar works to build community and reduce food waste by
                connecting food surpluses with nearby neighbors and removes the
                "awkwardness" out of the equation if you find yourself without a
                necessary item and fret asking a neighbor. With it’s dual-sided
                platform, it allows you to SHARE and/or REQUEST food ingredients
                in under 30 seconds.
                <br />
                Simply make your request. Hit SUBMIT and watch your community
                assist. If you have food items to share, simply SCAN the barcode
                (or enter the item) and have your listing up in a matter of
                seconds.
                <br />
                We’re bringing back an old concept with some modern
                technological flair.
              </div>
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
              <div>
                Earn Sugar Cubes in 1 of 5 ways! Let them accumulate and earn a
                badge. <br />
                <br />
                User shares item that is grabbed – 5 sugar cube
                <br />
                User grabs an item that is available - 3 sugar cube
                <br />
                User makes a request for item and is helped - 3 sugar cube
                <br />
                User helps neighbor in need – 5 sugar cube
                <br />
                Leaving a user review – 2 sugar cube
                <br />
                <br />
                Badge Levels:
                <br />
                100-249 Cubes - Sweet and Low
                <br />
                250-499 Cubes - Agave
                <br />
                500-749 Cubes - Stevia <br />
                750- 999 Cubes - Maple Syrup
                <br />
                1000+ Cubes - Pure Honey
                <br />
              </div>
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
              <div>
                <ul>
                  <li>
                    Built-in UPC scanner for quick upload of food items to
                    share.
                  </li>
                  <li>
                    Extensive search features to find exactly what you are
                    looking for.
                  </li>
                  <li>
                    Large selection of dietary types to choose from and only see
                    see push notifications of listed items that fit your food
                    preferences.
                  </li>
                  <li>1 to 1 chat feature</li>
                  <li>
                    Multiple address inputs to list items that may not be at
                    home but in other places (say work, school, co-working
                    space).
                  </li>
                  <li>
                    Trust seals and user rate-ability for safety and protection.
                  </li>
                </ul>
              </div>
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
              <div>
                Currently the interface of the app will default to AUTO, which
                will show all listings whether 0 miles or 1000+ miles away. To
                make a change to this, simply navigate to the top left on the
                home screen where you see the street name you are currently at
                and click on that. It will open up a new screen that will allow
                you to select the mileage distance of your choice. No need to
                save. Once selected, it will update automatically.
              </div>
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
              <div>
                This can be found by clicking on the profile button (bottom
                right) on the home screen.
                <br />
                <br />
                Your user profile is the place where you’ll find:
                <ul>
                  <li>
                    Reviews - all reviews left by community members that you’ve
                    interacted with (public)
                  </li>
                  <li>
                    Fun Facts and Favorite Recipe - will reflect what you input
                    either at the time of account setup or on a later date.
                    You’re encouraged to fill this out as a way of getting to
                    know the neighbors (public){" "}
                  </li>
                  <li>
                    Cupboard - the place where all of your listings (previous or
                    present) can be found
                  </li>
                  <ul>
                    <li>
                      Items Shared - all the items you’ve posted to share that
                      have been picked up
                    </li>
                    <li>
                      Items Requested - all the items you’ve requested that have
                      been received
                    </li>
                    <li>
                      Current Excess - items that you are currently sharing
                    </li>
                    <li>
                      Current Needs - items that you are currently requesting
                    </li>
                  </ul>
                  <li>
                    Bookmarks - any listings that you’ve bookmarked or saved can
                    be viewed here
                  </li>
                  <li>
                    Saved Addresses - all addresses that you have in your
                    account can be viewed here. You can also make any necessary
                    changes here too. (this IS and WILL ALWAYS remain private;
                    unless you share with your neighbor in the chat module){" "}
                  </li>
                  <li>
                    Sweet Rewards Shoppe - the place to go to redeem your earned
                    Sugar Cubes
                  </li>
                </ul>
              </div>
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
              <div>
                In the top right corner, click on the pencil icon. From here you
                can make modifications to your account, i.e. updating your
                Dietary Preferences, adding in your favorite recipe and fun
                fact, etc.
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
