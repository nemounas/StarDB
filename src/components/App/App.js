import React, { Component } from 'react'
import Header from '../Header'
import './App.css'
import SwapiService from '../../services/SwapiService'
import RandomPlanet from '../RandomPlanet/'
import { SwapiServiceProvider } from '../SwapiServiceContext'
import DummySwapiService from '../../services/DummySwapiService'
import { PeoplePage, StarshipsPage, PlanetsPage } from '../Pages'
import { BrowserRouter, Route } from 'react-router-dom'

export default class App extends Component {

  swapiService = new SwapiService();



  render() {

    return (

      <SwapiServiceProvider value={this.swapiService}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <RandomPlanet />
            
            <Route path="/"
             render={()=><h2>Welcom to StarDB</h2>} exact/>
            <Route path="/people" render={() => <PeoplePage />} />
            <Route path="/planets" render={() => <PlanetsPage />} />
            <Route path="/starships" component={StarshipsPage} />
            

          </div>
        </BrowserRouter>
      </SwapiServiceProvider >


    )
  }
}

