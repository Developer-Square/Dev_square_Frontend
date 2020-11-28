import React from 'react'
import {ThemeProvider} from 'styled-components'
import styled from 'styled-components'

//Own Components
import {GlobalStyles} from './styles/global'
import {lightTheme, darkTheme} from './styles/theme'
import Nav from './NavBar/Nav'
import SideBar from './SideBar/SideBar'
import {useThemeContext} from '../context/themeContext'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
    background: ${({theme}) => theme.secondary};
`

function Dashboard({history, children}) {

    const {theme} = useThemeContext()
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <SideBar/>
            <Container>
                <Nav />
                {children}
            </Container>
        </ThemeProvider>
    )
}

export default Dashboard;