import React, { Component } from 'react'
import './Loding.css'
import LodingPlanet from '../../img/12.jpg'

export default class ItemList extends Component {


    render() {
        return (

            <div className="Loding">
                <div className="img">
                    <img className="pic" src={LodingPlanet} alt="planet"></img>
                </div>
                <div>
                    ggg
                </div>



            </div>

        )
    }
}
