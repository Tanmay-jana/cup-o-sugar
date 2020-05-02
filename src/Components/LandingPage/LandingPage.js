import React, { Component } from 'react'
import Header from './Header/Header';
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';
import FifthSection from './FifthSection/FifthSection';
import SixthSection from './SixthSection/SixthSection';
import SeventhSection from './SeventhSection/SeventhSection';
import Footer from './Footer/Footer';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>
                <FifthSection/>
                <SixthSection/>
                <SeventhSection/>
                <Footer/>
            </div>
        )
    }
}
