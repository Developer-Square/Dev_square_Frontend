import React from 'react'
import styled from 'styled-components'

//Own Components
import AddButton from "../../Dashboard_Components/AddButton";
import Deposits from "./Deposits";

import depositData from "../../../DepositData.json";

const Container = styled.div`

`

function UsersPage() {
    return (
        <Container>
            <AddButton />
			<Deposits title="Active Deposits" count={2} data={depositData.active} />
			<Deposits title="Closed Deposits" count={8} data={depositData.closed} />
        </Container>
    )
}

export default UsersPage;