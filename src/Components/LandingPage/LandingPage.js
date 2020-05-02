import React, { Component } from 'react'
// import Header from './Header/Header';
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';
import FifthSection from './FifthSection/FifthSection';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>
                <FifthSection/>
            </div>
        )
    }
}
