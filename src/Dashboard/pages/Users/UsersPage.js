import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {ToastContainer} from 'react-toastify'

//Own Components
import AddButton from "../../Dashboard_Components/AddButton";
import Users from "./Users";
import UsersModal from './UsersModal'
import {setModalShow} from '../../../redux/action-creator/index'

import depositData from "../../../DepositData.json";

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;
`

function UsersPage() {
    const dispatch = useDispatch()
    const {users, modalShow, userToBeUpdated} = useSelector(state => state.users)
    const [count, setCount] = useState('');

    useEffect(() => {
        //Counting the number of active users
        if (users.results !== undefined) {
            setCount(users.results.length)
        } 
    }, [users, modalShow])

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
            <UsersModal usertobeupdated={userToBeUpdated} show={modalShow} onHide={() => dispatch(setModalShow())}/>
			<Users title="Active Accounts" count={count} page={users.totalPages} pageNumber={users.page} data={users.results} />
			<Users title="Closed Accounts" count={3} data={depositData.closed} />
        </Container>
    )
}

export default UsersPage;