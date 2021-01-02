import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {ToastContainer} from 'react-toastify'

//Own Components
import AddButton from "../../Dashboard_Components/AddButton";
import Users from "./Users";
import UsersModal from './UsersModal'

import depositData from "../../../DepositData.json";

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;
`

function UsersPage() {
    const {users} = useSelector(state => state.users)
    const [modalShow, setModalShow] = useState(false);
    const [count, setCount] = useState('');

    useEffect(() => {
        //Counting the number of active users
        if (users.results !== undefined) {
            setCount(users.results.length)
        } 

    }, [users])

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
            <AddButton onClick={() => setModalShow(true)}  />
            <UsersModal show={modalShow} onHide={() => setModalShow(false)}/>
			<Users title="Active Accounts" count={count} page={users.totalPages} pageNumber={users.page} data={users.results} />
			<Users title="Closed Accounts" count={3} data={depositData.closed} />
        </Container>
    )
}

export default UsersPage;