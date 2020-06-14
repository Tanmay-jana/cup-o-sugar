import React, { Component } from 'react'
import './Section4.css';
import ava from '../../../assets/ava.png'
import Equity from '../../../assets/Equity.png'
import seq from '../../../assets/seq.png'
import amc from '../../../assets/amc.png'
import conam from '../../../assets/conam.png'

export default class Section4 extends Component {
    render() {
        return (
            <div className = "contact-section4-container">
                <h1>Trusted By</h1>
                <div className = "trusted-logo">
                    <img src = {ava} alt = "ava"/>
                    <img src = {Equity} alt = "Equity"/>
                    <img src = {seq} alt = "seq"/>
                    <img src = {amc} alt = "amc"/>
                    <img src = {conam} alt = "conam"/>
                </div>
            </div>
        )
    }
}
