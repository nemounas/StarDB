import React, { Component } from 'react'
import './RandomPlanet.css'
import SwapiService from '../../services/SwapiService'
import Loding from '../Loding'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loding: true
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loding: false
        })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {

        const { planet, loding } = this.state


        const spiner = loding ? <Loding /> : null
        const planetview = !loding ? <PlanetView planet={planet} /> : null


        return (

            <div className="RandomPlanet">
                {spiner}
                {planetview}
            </div>

        )
    }
}

const PlanetView = ({ planet }) => {

    const { PlanetName, Population,
        RotationPeriod, Diameter, id } = planet;

    return (
        <React.Fragment>
            <div className="img">
                <img className="pic" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"></img>
            </div>

            <div className="text">
                <div className="title">

                    <span> {PlanetName}</span>
                </div>

                <div>
                    <span> Population </span>
                    <span> {Population} </span>
                </div>

                <div>
                    <span>  RotationPeriod </span>
                    <span>  {RotationPeriod} </span>
                </div>

                <div>
                    <span>  Diameter </span>
                    <span>  {Diameter} </span>
                </div>
            </div>
        </React.Fragment>
    )
}