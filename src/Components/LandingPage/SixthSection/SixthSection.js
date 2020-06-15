import React, { Component } from 'react'
import './SixthSection.css'
import badge from '../../../assets/badge.png';
import batchery from '../../../assets/Batchery.png';
import aws from '../../../assets/aws.png';
import segment from '../../../assets/Segment.png';
import tff from '../../../assets/tff.png';
import webSummt from '../../../assets/WebSummt.png';
import SU from '../../../assets/SU.png';
import ScrollAnimation from "react-animate-on-scroll";

export default class SixthSection extends Component {
    render() {
        return (
            <div className = "sixth-container">
                <h1>Recognition</h1>
                <ScrollAnimation animateIn="fadeIn" animateOnce = {true} className = "recognition-logo">
                    <img src = {tff} alt = "tff"/>
                    <img src = {aws} alt = "aws"/>
                    <img src = {batchery} alt = "batch"/>
                    <img src = {segment} alt = "segment"/>
                    <img src = {badge} alt = "badge"/>
                    <img src = {webSummt} alt = "webSummt"/>
                    <img src = {SU} alt = "SU"/>
                </ScrollAnimation>
            </div>
        )
    }
}
