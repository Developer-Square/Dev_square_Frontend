import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Own Components
import Homepage from './Homepage'
import LoginAndSignUp from './components/LoginAndSignUp'
import Dashboard from './Dashboard/Dashboard'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/login" exact component={LoginAndSignUp}/>
                <Route path="/dashboard" exact component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;