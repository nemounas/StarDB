import React, {Component} from 'react'
import Row from '../Row'
import {PersonList} from '../SWComponents'
import {PersonDetails} from '../SWComponents'


export default class PeoplePage extends Component {
    
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
             left={<PersonList  onItemSelected = {this.onItemSelected} />}
             right={<PersonDetails itemid={selectItem} />} 
             />
        )
    }
}