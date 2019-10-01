import React, { Component } from 'react'
import './Loding.css'
import LodingPlanet from '../../img/12.jpg'

export default class ItemList extends Component {


    render() {
        return (
            <React.Fragment>

                <div></div>
                <div className="img">
                    <img className="pic" src={LodingPlanet} alt="planet"></img>
                </div>
                <div>

                </div>
                <div></div>
            </React.Fragment>
        )
    }
}
