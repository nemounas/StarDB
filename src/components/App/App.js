import React, { Component } from 'react'
import Header from '../Header'
import './App.css'
import SwapiService from '../../services/SwapiService'
import RandomPlanet from '../RandomPlanet/'
import {SwapiServiceProvider} from '../SwapiServiceContext'
import DummySwapiService from '../../services/DummySwapiService'
import {PeoplePage, StarshipsPage, PlanetsPage} from '../Pages'


export default class App extends Component {

  swapiService = new SwapiService();



  render() {

  return (
      
      <SwapiServiceProvider value={this.swapiService}>
      
      <div className="App">
       <Header />
       <RandomPlanet />
       <PeoplePage />
       <PlanetsPage />
       <StarshipsPage />
      
       </div> 

      </SwapiServiceProvider >


    )
  }
}

