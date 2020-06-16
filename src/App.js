import React, { Component } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import CovidSection from "./Components/CovidSection/CovidSection";
import About from './Components/About/About'
import Terms from './Components/Terms/Terms'
import Privacy from './Components/Privacy/Privacy'
import { BrowserRouter, Route } from "react-router-dom";
import Contact from './Components/Contact/Contact'
import { connect } from "react-redux";
import {changeLink} from './action/actions';
import {isAndroid, isIOS} from 'react-device-detect'

class App extends Component {
  componentDidMount = () => {
    if(isAndroid) {
      this.props.changeLink("https://mailchi.mp/ff50577cbf39/androidusers")
    } else if(isIOS) {
      this.props.changeLink("https://apps.apple.com/us/app/cup-o-sugar-share-request/id1366127652")
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={LandingPage} exact />
          <Route path="/covid" component={CovidSection} exact />
          <Route path = "/about" component = {About} exact/>
          <Route path = "/partner" component = {Contact} exist/>
          <Route path = "/terms-and-conditions" component = {Terms} exist />
          <Route path = "/privacy" component = {Privacy} exist />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {changeLink})(App);
