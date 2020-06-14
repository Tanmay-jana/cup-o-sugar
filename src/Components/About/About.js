import React, { Component } from 'react'
import { connect } from "react-redux";
import { topNavOption } from "../../action/actions";
import Header from '../LandingPage/Header/Header';
import MainBody from './MainBody/MainBody';

class About extends Component {
    componentDidMount = () => {
        window.scrollTo(0,0)
      this.props.topNavOption("About");
    };
    render() {
        return (
            <div>
                <Header/>
                <MainBody/>
            </div>
        )
    }
}

export default connect(null, { topNavOption })(About);