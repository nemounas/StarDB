import React, { Component } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


export default class Header extends Component {


    render() {
        return (

            <div className="Header">
                <Link to="/"><div className="Logo">StarDB</div></Link>
                <div className="d-flex">
                <Link to="/people/"><button className="menuhover">People</button></Link>
                <Link to="/planets/"><button className="menuhover">Planets</button></Link>
                <Link to="/starships/"><button className="menuhover">Starships</button></Link>
                <Link to="/secretpage"><button className="menuhover">SecretPage</button></Link>
                <Link to="/login"><button className="menuhover">Login</button></Link>
                </div>
            </div>

        )
    }
}