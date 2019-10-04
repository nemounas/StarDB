import React, { Component } from 'react'
import Header from '../Header'
import './App.css'
import SwapiService from '../../services/SwapiService'
import RandomPlanet from '../RandomPlanet/'

import {
  PersonsList,
  StarshipsList,
  PlanetsList,
  PersonsDetails,
  StarshipsDeteils,
  PlanetsDeteils

} from '../SWComponents'


const Row = ({ left, right }) => {
  return (
    <div className="Row">
      <div>
        {left}
      </div>
      <div>
        {right}
      </div>
    </div>
  )
}


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 5
  }

  onPersonSelected = (id) => {

    this.setState({
      selectedPerson: id
    })
  }

  renditems = (item) => {
    
    return item.name
  }


  render() {

    const PersonD = (<PersonsDetails itemid={1} />)
    const PersonL = (<PersonsList />)
    const PlanetD = (<PlanetsDeteils itemid={5} />)
    const PlanetL = (<PlanetsList />)
    const StarshipD = (<StarshipsDeteils itemid={9} />)
    const StarshipL = (<StarshipsList />)

    return (

      <div className="App">
        <Header />
        <RandomPlanet />
       <Row left={PersonL} right={PersonD} />
       <Row left={PlanetL} right={PlanetD} />
       <Row left={StarshipL} right={StarshipD} />
      </div>



    )
  }
}

