import React, {Component} from 'react'
import Row from '../Row'
import {StarshipsList} from '../SWComponents'
import {StarshipsDetails} from '../SWComponents'


export default class StarshipsPage extends Component {
    
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
             left={<StarshipsList onItemSelected = {this.onItemSelected} />}
             right={<StarshipsDetails itemid={selectItem} />} 
             />
        )
    }
}