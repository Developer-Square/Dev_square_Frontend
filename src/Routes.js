import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Own Components
import Homepage from './Homepage'
import LoginAndSignUp from './components/LoginAndSignUp'
import Dashboard from './Dashboard/Dashboard'
import Home from './Dashboard/pages/Home/Home'
import UsersPage from './Dashboard/pages/Users/UsersPage'
import PortfolioPage from './Dashboard/pages/Portfolio/PorfolioPage'
import TasksPage from './Dashboard/pages/Tasks/TasksPage'
import ResetPassword from './components/ResetPassword'
import {ThemeContextProvider} from './context/themeContext'
import RouteWithLayout from './RouteWithLayout'
import ProjectsPage from './Dashboard/pages/Projects/ProjectsPage'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/login" exact component={LoginAndSignUp}/>
                <Route path="/reset/password" component={ResetPassword}/>
                <ThemeContextProvider>
                    <RouteWithLayout path="/dashboard/home" exact component={Home} layout={Dashboard}/>
                    <RouteWithLayout path="/dashboard/users" exact component={UsersPage} layout={Dashboard}/>
                    <RouteWithLayout path="/dashboard/projects" exact component={ProjectsPage} layout={Dashboard}/>
                    <RouteWithLayout path="/dashboard/portfolio" exact component={PortfolioPage} layout={Dashboard}/>
                    <RouteWithLayout path="/dashboard/tasks" exact component={TasksPage} layout={Dashboard}/>
                </ThemeContextProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;