import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import styled from 'styled-components'
import {ToastContainer} from 'react-toastify'

//Own Components
import {GlobalStyles} from './styles/global'
import {lightTheme, darkTheme} from './styles/theme'
import Nav from './NavBar/Nav'
import SideBar from './SideBar/SideBar'
import {useThemeContext} from '../context/themeContext'
import notify from '../helpers/Notify'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
    background: ${({theme}) => theme.dashboardbg};
`

function Dashboard({history, children}) {
    const {auth} = useSelector(state => state.auth)

    useEffect(() => {
        showMessage()
        // eslint-disable-next-line
    }, [auth])

    const showMessage = () => {
        if (auth === true) {
            notify('success', 'User fetched successfully')
        } else {
            notify('error', 'Failed to fetch user')
        }
    }

    const {theme} = useThemeContext()
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <SideBar/>
                <Container>
                    <Nav history={history} />
                    {children}
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Dashboard;