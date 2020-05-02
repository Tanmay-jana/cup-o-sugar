import React, { Component } from 'react'
// import Header from './Header/Header';
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
            </div>
        )
    }
}
