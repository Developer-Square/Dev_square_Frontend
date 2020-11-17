import React from 'react'
import styled from 'styled-components';

//Own Components
import MenuItem from './MenuItem'

const Container = styled.div`
     margin-top: 2rem;
     width: 100%;
`

function Menu() {
    return (
        <Container>
            <MenuItem title="Dashboard" icon="clarity:dashboard-outline-badged"/>
            <MenuItem title="Users" icon="teenyicons:users-outline" active/>
            <MenuItem title="Tasks" icon="clarity:tasks-line"/>
            <MenuItem title="Portfolio" icon="bytesize:portfolio"/>
            <MenuItem title="Clients" icon="fa-solid:users"/>
        </Container>
    )
}

export default Menu;