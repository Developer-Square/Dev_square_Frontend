import React, {useState} from 'react'
import styled from 'styled-components'

//Own Components
import AddButton from "../../Dashboard_Components/AddButton";
import Clients from "./Clients";
import ClientModal from './ClientModal'

import depositData from "../../../DepositData.json";

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;
`

function ClientsPage() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container className="clients">
            <AddButton onClick={() => setModalShow(true)}  />
            <ClientModal show={modalShow} onHide={() => setModalShow(false)}/>
			<Clients title="Active Clients" count={6} data={depositData.active} />
			<Clients title="Closed Clients" count={3} data={depositData.closed} />
        </Container>
    )
}

export default ClientsPage;