import React, {Component} from 'react'
import Row from '../Row'
import {PlanetList} from '../SWComponents'
import {PlanetDetails} from '../SWComponents'


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
             left={<PlanetList onItemSelected = {this.onItemSelected} />}
             right={<PlanetDetails itemid={selectItem} />} 
             />
        )
    }
}