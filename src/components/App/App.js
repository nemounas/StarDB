import React, {Component} from 'react'
import Header from '../Header'
import ItemList from '../ItemList'
import PeopleDetails from '../PeopleDetails'
import RandomPlanet from '../RandomPlanet'
import './App.css'

export default class App extends Component {
  

  state = {
    selectedPerson: 5
  }

   onPersonSelected = (id) => {
     
          this.setState({
            selectedPerson: id
          })
   }



    render(){
      
        return (

          <div className="App">
             <Header />
             <RandomPlanet />
             <ItemList onItemSelected={this.onPersonSelected}/>
             <PeopleDetails personid={this.state.selectedPerson}/>
          </div>

        )
    }
}