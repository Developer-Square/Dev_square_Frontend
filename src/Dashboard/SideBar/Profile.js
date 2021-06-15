import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import {ToastContainer} from 'react-toastify'

//Own Components
import notify from '../../helpers/Notify'
import { getUser } from '../../helpers/ApiFunctions'

const Container = styled.div`
    margin-top: 5rem;
`
const ProfileImg = styled.img`
    height: 5rem;
`
const ProfileName = styled.h1`
    margin: 10px 0;
    text-align: center;
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.textColor};
`

function Profile() {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
            //Get a user's credentials
            getUser(`${localStorage.getItem('userID')}`, dispatch, 'profile')
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
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
            <ProfileImg src="/images/assets/dashboard_images/profilelg.png"/>
            <ProfileName>{user.name === '' ? <Spinner animation="border" variant="primary" size="sm"/>: user.name}</ProfileName>
        </Container>
    )
}

export default Profile;