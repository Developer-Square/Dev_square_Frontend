import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'

//Own Components
import Api from '../../services/network'
import {addUser, updateAuth} from '../../redux/action-creator/index'

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
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const api = new Api()

    useEffect(() => {
        //Get a user's credentials
        getUser()
        // eslint-disable-next-line
    }, [])

    function getUser() {
        api.User().getUser(`${localStorage.getItem('userID')}`)
        .then(res => {
            if (res.status === 200) {
                setName(res.data.name)
                dispatch(addUser(res.data))
                dispatch(updateAuth())
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Container>
            <ProfileImg src="/images/assets/dashboard_images/profilelg.png"/>
            <ProfileName>{name}</ProfileName>
        </Container>
    )
}

export default Profile;