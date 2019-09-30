import React, { Component } from 'react'
import './Header.css'


export default class Header extends Component {


    render() {
        return (

            <div className="Header">
                <div className="Logo">Stardb</div>
                <div><a href="#">People</a></div>
                <div><a href="#">Planets</a></div>
                <div><a href="#">Starships</a></div>
            </div>

        )
    }
}