import React, { Component } from 'react'
import {connect} from 'react-redux'
import { topNavOption } from "../../action/actions";
import Header from '../LandingPage/Header/Header';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2'

class Contact extends Component {
    componentDidMount = () => {
        window.scrollTo(0,0)
      this.props.topNavOption("Contact");
    };
    render() {
        return (
            <div>
                <Header/>
                <Section1/>
                <Section2/>
            </div>
        )
    }
}

export default connect(null, {topNavOption})(Contact)