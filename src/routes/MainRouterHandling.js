import Login from '../package/login/Login'
import React from 'react'
import { Route } from "react-router-dom";

const handling = () => (
    <div>
        <Route exact path="/" component={Login} />
    </div>
)

export default handling;