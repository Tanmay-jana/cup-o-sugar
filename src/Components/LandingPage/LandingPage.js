import React, { Component } from 'react'
// import Header from './Header/Header';
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <FirstSection/>
                <SecondSection/>
            </div>
        )
    }
}
