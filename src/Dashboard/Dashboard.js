import React from 'react'
import {ThemeProvider} from 'styled-components'

//Own Components
import {GlobalStyles} from './styles/global'
import {lightTheme, darkTheme} from './styles/theme'
import Nav from './NavBar/Nav'
import SideBar from './SideBar/SideBar'
import {useThemeContext} from '../context/themeContext'

function Dashboard({history, children}) {

    const {theme} = useThemeContext()
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <SideBar/>
            <Nav />
            {children}
        </ThemeProvider>
    )
}

export default Dashboard;