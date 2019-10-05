import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import './ItemDetails.css'




const Record = ({ item, field, label}) =>{
    return (
      <div>{label}: {item[field]} </div>
    )
}

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService()

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
      if (this.props.itemid !== prevProps.itemid) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemid, getData, getImageUrl } = this.props;
    
    
    if (!itemid) {
      return 
    }
    
    getData(itemid)
      .then((item) => {
        this.setState({
           item,
           image: getImageUrl(item)
           })
      })
  }

  render() {
     
     const {item, image} = this.state
     
     if (!item) {
       
      return (
        <div className="PeopleDetails">
          <div className="DefautWraper">
          <div>Please, select item</div>
          </div>
        </div>

      )
    }
    
    /* const { name, id, gender, birthYear, eyeColor } = this.state.item */

    return (

      <div className="PeopleDetails">
        <div className="DefautWraper">
        <div className="info-wraper">
          <div className="img-wraper">
            <img className="pic" src={image} alt="planet"></img>
          </div>
          {          
             React.Children.map(this.props.children, (child) => {
               return React.cloneElement(child,{item});
             })
          }
          </div>
        </div>
      </div>

    )
  }
}