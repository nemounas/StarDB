import React, {Component} from 'react'
import Row from '../Row'
import {PersonList} from '../SWComponents'
import {PersonDetails} from '../SWComponents'
import {withRouter} from 'react-router-dom'


const PeoplePage = ({history,match}) => {

        const {id} = match.params
        console.log(match.params)

        return (
            <Row
             left={<PersonList
                  onItemSelected = {(id)=>history.push(`/people/${id}`)} />}
             right={<PersonDetails itemid={id} />} 
             />
        )
   
}

export default withRouter(PeoplePage)