import React from 'react'
import {Redirect} from 'react-router-dom'

const SecretPage = ({isLogin}) => {
    
    if (isLogin){
        return (
            <div>This is full secret Page</div>
        )
    }
    return (
        <Redirect to="/login" />
    )
}

export default SecretPage