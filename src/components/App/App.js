import React, { Component } from 'react'
import Header from '../Header'
import './App.css'
import SwapiService from '../../services/SwapiService'
import RandomPlanet from '../RandomPlanet/'
import { SwapiServiceProvider } from '../SwapiServiceContext'
import DummySwapiService from '../../services/DummySwapiService'
import { PeoplePage, StarshipsPage, PlanetsPage } from '../Pages'
import { BrowserRouter, Route } from 'react-router-dom'
import {StarshipDetails} from '../SWComponents'

export default class App extends Component {

  swapiService = new DummySwapiService();



  render() {

    return (

      <SwapiServiceProvider value={this.swapiService}>
        <BrowserRouter>
          <div className="App">
            <Header />
           {/*  <RandomPlanet /> */}
            
            <Route path="/" exact
             render={()=><h2>Welcome to StarDB</h2>} />
            <Route path="/people" exact component={PeoplePage} />
            <Route path="/planets" exact component={PlanetsPage} />
            <Route path="/starships" exact component={StarshipsPage} />
            <Route path="/starships/:id"
                        render={({match,location,history})=>{
                          const { id } = match.params
                          return <StarshipDetails itemid={id} /> 
                          }} />
            

          </div>
        </BrowserRouter>
      </SwapiServiceProvider >


    )
  }
}

