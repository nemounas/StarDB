import React, { Component } from 'react'
import Header from '../Header'
import './App.css'
import SwapiService from '../../services/SwapiService'
import RandomPlanet from '../RandomPlanet/'
import { SwapiServiceProvider } from '../SwapiServiceContext'
import DummySwapiService from '../../services/DummySwapiService'
import { PeoplePage, StarshipsPage, PlanetsPage } from '../Pages'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {StarshipDetails} from '../SWComponents'
import {LoginPage, SecretPage} from '../Pages'

export default class App extends Component {

  swapiService = new DummySwapiService();

  state = {
    isLogin: false
  }

  onLogin = () => {
    this.setState({
      isLogin: true
    })
  }

  render() {

    const {isLogin} = this.state

    return (

      <SwapiServiceProvider value={this.swapiService}>
        <BrowserRouter>
          <div className="App">
            <Header />
           {/*  <RandomPlanet /> */}
            
            <Switch>
            <Route path="/" exact
             render={()=><h2>Welcome to StarDB</h2>} />
            <Route path="/people/:id?"  component={PeoplePage} />
            <Route path="/planets"  component={PlanetsPage} />
            <Route path="/starships" exact component={StarshipsPage} />
            <Route path="/starships/:id"
                        render={({match,location,history})=>{
                          const { id } = match.params
                          return <StarshipDetails itemid={id} /> 
                          }} />
            <Route path="/secretpage"
            render={()=>(<SecretPage isLogin={isLogin} />)}
            />
            <Route path="/login"
            render={()=>(<LoginPage
              isLogin={isLogin}
              onLogin={this.onLogin}
              />)}
            />
            <Redirect to="/" />
            </Switch>

          </div>
        </BrowserRouter>
      </SwapiServiceProvider >


    )
  }
}

