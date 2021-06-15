import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {ToastContainer} from 'react-toastify'

//Own Components
import AddButton from "../../Dashboard_Components/AddButton";
import Users from "./Users";
import UsersModal from './UsersModal'
import {setModalShow, userToBeUpdated} from '../../../redux/action-creator/index'

import depositData from "../../../DepositData.json";
import { getUsers } from '../../../helpers/ApiFunctions';

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;
`

function UsersPage() {
    const dispatch = useDispatch()
    const {modalShow, usertobeupdated, updatedCount, users, pageNumber} = useSelector(state => state.users)

    useEffect(() => {
        //If the user was on a certain page, return them to the 
        //specific page
        if (pageNumber !== '') {
            // Get tasks when page loads
            getUsers(pageNumber, dispatch)
        } else if (users.length === 0) {
            getUsers(undefined, dispatch) 
        }
        // eslint-disable-next-line
    }, [updatedCount])
    
    const toggleModal = () => {
        dispatch(userToBeUpdated(''))
        dispatch(setModalShow())
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
            <AddButton onClick={() => dispatch(setModalShow())}  />
            <UsersModal usertobeupdated={usertobeupdated} show={modalShow} onHide={() => toggleModal()}/>
			<Users title="Active Accounts" count={users.results !== undefined ? users.results.length :  null} page={users.totalPages} pageNumber={users.page} data={users.results} />
			<Users title="Closed Accounts" count={5} data={depositData.closed} />
        </Container>
    )
}

export default UsersPage;