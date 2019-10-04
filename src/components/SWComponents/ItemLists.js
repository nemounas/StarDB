import React from 'react'
import WithData from '../HocHelper/withData'
import SwapiService from '../../services/SwapiService'
import ItemList from '../ItemList'

const swapiService = new SwapiService()
 
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService

const withChildrenFunction = (Wraped, fn) => {
    return (props) => {
    return(
        <Wraped {...props} >
            {fn}
        </Wraped>
    )
}}

const renderName = ({name}) => <span>{name}</span>
const renderNameAndDiametr = ({name, Diameter}) => <span>{name} &nbsp;  ({Diameter})</span>

const PlanetsList = WithData(withChildrenFunction(ItemList,
                    renderNameAndDiametr), getAllPlanets)

const PersonsList = WithData(withChildrenFunction(ItemList,
                    renderName), getAllPeople)

const StarshipsList = WithData(withChildrenFunction(ItemList,
                      renderName), getAllStarships)

    
export {
    PlanetsList,
    StarshipsList,
    PersonsList
}