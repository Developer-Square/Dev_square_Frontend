import React from 'react'
import {ThemeProvider} from 'styled-components'

//Own Components
import {GlobalStyles} from './styles/global'
import {lightTheme} from './styles/theme'
import Main from './Dashboard_Components/Main/Main'
import SideBar from './Dashboard_Components/SideBar/SideBar'

function Dashboard() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <SideBar />
            <Main />
        </ThemeProvider>
    )
}

export default Dashboard;