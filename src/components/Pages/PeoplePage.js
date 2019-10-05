import React, {Component} from 'react'
import Row from '../Row'
import {PersonsList} from '../SWComponents'
import {PersonsDetails} from '../SWComponents'


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
             left={<PersonsList onItemSelected = {this.onItemSelected} />}
             right={<PersonsDetails itemid={selectItem} />} 
             />
        )
    }
}