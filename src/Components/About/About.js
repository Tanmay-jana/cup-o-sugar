import React, { Component } from 'react'
import { connect } from "react-redux";
import { topNavOption } from "../../action/actions";
import Header from '../LandingPage/Header/Header';
import MainBody from './MainBody/MainBody';
import Footer from '../LandingPage/Footer/Footer'

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
                <Footer/>
            </div>
        )
    }
}

export default connect(null, { topNavOption })(About);