import React, {useState} from 'react'
import styled from 'styled-components'
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
    const [modalShow, setModalShow] = useState(false);

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
			<Users title="Active Accounts" count={6} data={depositData.active} />
			<Users title="Closed Accounts" count={3} data={depositData.closed} />
        </Container>
    )
}

export default UsersPage;