import React from 'react'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'
import { SwapiServiceConsumer } from '../SwapiServiceContext'

const PersonsDetails = ({ itemid }) => {

    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPesonImage }) => {
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
            }

        </SwapiServiceConsumer>


    )


}
const StarshipsDetails = ({ itemid }) => {

    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
                    return (
                    <ItemDetails
                        itemid={itemid}

                        getData={getStarship}
                        getImageUrl={getStarshipImage}>

                        <Record field="name" label="name" />


                    </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>

    )
}
const PlanetsDetails = ({ itemid }) => {

    return (
        <SwapiServiceConsumer>
            {
                    ({getPlanet, getPlanetImage}) => {
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
            }
        </SwapiServiceConsumer>


    )
}

export {
    PersonsDetails,
    StarshipsDetails,
    PlanetsDetails
}