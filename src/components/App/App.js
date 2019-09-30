import React, {Component} from 'react'
import Header from '../Header'
import ItemList from '../ItemList'
import PeopleDetails from '../PeopleDetails'
import RandomPlanet from '../RandomPlanet'
import './App.css'

export default class App extends Component {


    render(){
        return (

          <div className="App">
             <Header />
             <RandomPlanet />
             <ItemList />
             <PeopleDetails />
          </div>

        )
    }
}