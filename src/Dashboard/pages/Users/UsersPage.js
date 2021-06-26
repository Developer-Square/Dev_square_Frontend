import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {ToastContainer} from 'react-toastify'

//Own Components
import AddButton from "../../Reusable Components/AddButton";
import Users from "./Users";
import UsersModal from './UsersModal'
import {setModalShow, userToBeUpdated} from '../../../redux/action-creator/index'
import depositData from "../../../DepositData.json";
import { getUsers } from '../../../helpers/ApiFunctions';
import { IsNotEmpty, toggleModal } from '../../../helpers/Reusable Functions';

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
        } else if (IsNotEmpty(users) || updatedCount > 0) {
            getUsers(undefined, dispatch) 
        }
        // eslint-disable-next-line
    }, [Object.values(users).length, updatedCount])


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
            <UsersModal usertobeupdated={usertobeupdated} show={modalShow} onHide={() => toggleModal(dispatch, userToBeUpdated, setModalShow)}/>
			<Users title="Active Accounts" count={users.results !== undefined ? users.results.length :  null} page={users.totalPages} pageNumber={users.page} data={users.results} />
			<Users title="Closed Accounts" count={5} data={depositData.closed} />
        </Container>
    )
}

export default UsersPage;