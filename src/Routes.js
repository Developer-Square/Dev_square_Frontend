import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Own Components
import Homepage from './Homepage'
import LoginAndSignUp from './components/LoginAndSignUp'
import Dashboard from './Dashboard/Dashboard'
import {ThemeContextProvider} from './context/themeContext'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/login" exact component={LoginAndSignUp}/>
                <ThemeContextProvider>
                    <Route path="/dashboard" exact component={Dashboard}/>
                </ThemeContextProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;