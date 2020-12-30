import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

//Own Components
import MenuItem from './MenuItem'

const Container = styled.div`
     margin-top: 2rem;
     width: 100%;
`

function Menu() {
    const [homeActive, setHomeActive] = useState('false')
    const [usersActive, setUsersActive] = useState('false')
    const [tasksActive, setTasksActive] = useState('false')
    const [portfolioActive, setPortfolioActive] = useState('false')
    const [projectsActive, setProjectsActive] = useState('false')

    const setToFalse = (param) => {
        if (param === 'home') {
            setUsersActive('false')
            setTasksActive('false')
            setPortfolioActive('false')
            setProjectsActive('false')
        } else if (param === 'users') {
            setHomeActive('false')
            setTasksActive('false')
            setPortfolioActive('false')
            setProjectsActive('false')
        } else if (param === 'tasks') {
            setUsersActive('false')
            setHomeActive('false')
            setPortfolioActive('false')
            setProjectsActive('false')
        } else if (param === 'portfolio') {
            setUsersActive('false')
            setTasksActive('false')
            setHomeActive('false')
            setProjectsActive('false')
        } else {
            setUsersActive('false')
            setTasksActive('false')
            setHomeActive('false')
            setHomeActive('false')
        }
    }

    useEffect(() => {
        let location = String(window.location.href)
        if (location.search('home') !== -1) {
            setHomeActive('true')
            setToFalse('home')
        } else if (location.search('users') !== -1) {
            setUsersActive('true')
            setToFalse('users')
        } else if (location.search('tasks') !== -1) {
            setTasksActive('true')
            setToFalse('tasks')
        } else if (location.search('portfolio') !== -1) {
            setPortfolioActive('true')
            setToFalse('portfolio')
        } else if (location.search('projects') !== -1) {
            setProjectsActive('true')
            setToFalse('projects')
        }
    }, [])
    return (
        <Container>
            <MenuItem title="Dashboard" icon="clarity:dashboard-outline-badged" active={homeActive}/>
            <MenuItem title="Users" icon="teenyicons:users-outline" active={usersActive}/>
            <MenuItem title="Tasks" icon="clarity:tasks-line" active={tasksActive}/>
            <MenuItem title="Portfolio" icon="bytesize:portfolio" active={portfolioActive}/>
            <MenuItem title="Projects" icon="fa-solid:users" active={projectsActive}/>
        </Container>
    )
}

export default Menu;