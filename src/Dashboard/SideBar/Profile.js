import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import {ToastContainer} from 'react-toastify'

//Own Components
import Api from '../../services/network'
import {addUser, updateAuth} from '../../redux/action-creator/index'
import notify from '../../helpers/Notify'

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
                dispatch(addUser(res.data))
                dispatch(updateAuth())
            }
        })
        .catch(err => {
            if (err.response) {
                const {message} = err.response.data
                notify('error', message)
            } else {
                notify('error', 'Something went wrong, Please refresh the page.')
            }
        })
    }

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