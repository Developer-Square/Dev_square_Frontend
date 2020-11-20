import React from 'react'
import {ThemeProvider} from 'styled-components'

//Own Components
import {GlobalStyles} from './styles/global'
import {lightTheme, darkTheme} from './styles/theme'
import Main from './Dashboard_Components/Main/Main'
import SideBar from './Dashboard_Components/SideBar/SideBar'
import {useThemeContext} from '../context/themeContext'

function Dashboard() {

    const {theme} = useThemeContext()
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <SideBar />
            <Main />
        </ThemeProvider>
    )
}

export default Dashboard;