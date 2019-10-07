import React from 'react'
import {Redirect} from 'react-router-dom'

const LoginPage = ({isLogin,onLogin}) => {
    
    if(isLogin) {
        return <Redirect to="/" />
    }
    
    return (
        <div>
            <p>Login on secret Page</p>
            <button onClick={onLogin} >
                Login
            </button>
        </div>
    )
}

export default LoginPage