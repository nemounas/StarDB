import React, { Component } from 'react'
import './ItemList.css'
import Loding from '../Loding';
import SwapiService from '../../services/SwapiService'

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null
  }


  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({ peopleList })
      })

  }

  renderList(arr) {
    return arr.map(({id, name})=>{
      return (
        <li className="list-group-item"
                key={id}
                onclick={()=>{this.props.onItemSelected(id)}}
                >
              {name}
        </li>
     );
    });
  }


  render() {


      const { peopleList } = this.state

      if (!peopleList) {
        return <Loding />
      }

      const item = this.renderList(peopleList)

      return (
            <ul className="item-list list-group ItemList">
              {item}
            </ul>
      )
      
    
  }
}