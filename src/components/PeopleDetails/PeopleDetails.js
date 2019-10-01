import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import './PeopleDetails.css'
import Loding from '../Loding'


export default class PeopleDetails extends Component {

  swapiService = new SwapiService()

  state = {
    person: null,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
      if (this.props.personid !== prevProps.personid) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personid } = this.props;
    if (!personid) {
      return
    }
    this.swapiService
      .getPerson(personid)
      .then((person) => {
        this.setState({ person })
      })
  }

  render() {

    if (!this.state.person) {
      return (
        <div className="PeopleDetails">
          <div className="PeopleDetailsWraper">
            <Loding />
          </div>
        </div>

      )
    }

    const { name, id, gender, birthYear, eyeColor } = this.state.person

    return (

      <div className="PeopleDetails">
        <div className="PeopleDetailsWraper">
          <div className="img-wraper">
            <img className="pic" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="planet"></img>
          </div>
          <div>Name: {name}</div>
          <div>Gender: {gender}</div>
          <div>Birth Year: {birthYear}</div>
          <div>Eye Color: {eyeColor}</div>
        </div>
      </div>

    )
  }
}