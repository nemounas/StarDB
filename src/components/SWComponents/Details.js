import React from 'react'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import SwapiService from '../../services/SwapiService'

const swapiService = new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPesonImage,
    getPlanetImage,
    getStarshipImage,
} = swapiService


const PersonsDetails = ({ itemid }) => {

    return (

        <ItemDetails
            itemid={itemid}
            
            getData={getPerson}
            getImageUrl={getPesonImage}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>

    )


}
const StarshipsDeteils = ({ itemid }) => {

    return (

        <ItemDetails
            itemid={itemid}
            
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="name" label="name" />
          

        </ItemDetails>
    )
}
const PlanetsDeteils = ({ itemid }) => {
     
    return (

        <ItemDetails
            itemid={itemid}
            
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="name" label="name" />
            <Record field="Population" label="Population" />

        </ItemDetails>

    )
}

export {
    PersonsDetails,
    StarshipsDeteils,
    PlanetsDeteils
}