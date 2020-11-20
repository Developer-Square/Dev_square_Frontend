import React from 'react'
import styled from 'styled-components'

//Own Components
import Profile from './Profile'
import Menu from './Menu'
import ToggleSwitch from './ToggleSwitch'

const Container = styled.div`
    background-color: ${({theme}) => theme.secondary};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function SideBar() {
    return (
        <Container>
            <Profile />
            <Menu />
            <ToggleSwitch />
        </Container>
    )
}

export default SideBar;