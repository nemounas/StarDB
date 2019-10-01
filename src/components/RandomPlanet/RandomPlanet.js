import React, { Component } from 'react'
import './RandomPlanet.css'
import SwapiService from '../../services/SwapiService'
import Loding from '../Loding'
import ErrorMessange from '../ErrorMessange'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loding: true,
        error: false
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

    onError = (err) => {
       this.setState({
           error: true,
           loding: false
       })
    }

    updatePlanet() {
        /* const id = Math.floor(Math.random() * 25) + 2; */
        const id = 21 
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {

        const { planet, loding, error } = this.state

        const hasData = !(error || loding)
        
        const errorMessange = error ? <ErrorMessange /> : null
        const spiner = loding ? <Loding /> : null
        const planetview = hasData ? <PlanetView planet={planet} /> : null


        return (

            <div className="RandomPlanet">
                {errorMessange}
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
            <div></div>
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
            <div></div>
        </React.Fragment>
    )
}