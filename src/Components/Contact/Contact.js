import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Contact.css'
import { topNavOption } from "../../action/actions";
import Header from '../LandingPage/Header/Header';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Footer from '../LandingPage/Footer/Footer'


class Contact extends Component {
    componentDidMount = () => {
        window.scrollTo(0,0)
      this.props.topNavOption("Partner");
    };
    render() {
        return (
            <div style = {{background: "#FBFBFD"}}>
                <Header/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <div className = "white-space">
                    <p>Interested in partnering with us and bringing the benefits of Cup O’ Sugar to your property, email us <a href = "mailto:admin@cuposugarapp.com">here</a>.</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default connect(null, {topNavOption})(Contact)