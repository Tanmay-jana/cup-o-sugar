import React, { Component } from 'react'
import './Header.css'
import Logo from '../../../assets/Logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className = "header-container">
                <img className = "logo" src = {Logo} alt = "logo"/>
                <div className = "link-container">
                    <a href = "#">Home</a>
                    <a href = "#">About</a>
                    <a href = "#">Contact</a>
                </div>
                <div className = "social-container">

                </div>
            </div>
        )
    }
}
