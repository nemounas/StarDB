import React, {Component} from 'react'
import Row from '../Row'
import {PlanetsList} from '../SWComponents'
import {PlanetsDetails} from '../SWComponents'


export default class PlanetsPage extends Component {
    
    state = {
        selectItem: null
    }

    onItemSelected = (selectItem) => {
           this.setState({selectItem})
    }

    render(){

         const {selectItem} = this.state

        return (
            <Row
             left={<PlanetsList onItemSelected = {this.onItemSelected} />}
             right={<PlanetsDetails itemid={selectItem} />} 
             />
        )
    }
}