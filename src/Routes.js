import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Own Components
import Homepage from './Homepage'
import LoginAndSignUp from './components/LoginAndSignUp'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/login" exact component={LoginAndSignUp}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;