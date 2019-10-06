import React from 'react'
import {StarshipList} from '../SWComponents'
import {withRouter} from 'react-router-dom'

const StarshipsPage = ({history}) => {
    
        return (
            
            <StarshipList onItemSelected={(itemid)=>{
                return(
                    history.push(`/starships/${itemid}`)
                )
                
            }} />
            
        )
}

export default withRouter(StarshipsPage)