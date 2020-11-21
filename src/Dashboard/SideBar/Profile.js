import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 5rem;
`
const ProfileImg = styled.img`
    height: 5rem;
`
const ProfileName = styled.h1`
    margin: 10px 0;
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.textColor};
`

function Profile() {
    return (
        <Container>
            <ProfileImg src="/images/assets/dashboard_images/profilelg.png"/>
            <ProfileName>Scott Grant</ProfileName>
        </Container>
    )
}

export default Profile;