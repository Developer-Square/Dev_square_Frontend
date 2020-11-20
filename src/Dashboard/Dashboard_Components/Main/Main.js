import React from "react";
import styled from "styled-components";

//Own Components
import Nav from "./Nav";
import AddButton from "./AddButton";
import Deposits from "./Deposits";

import depositData from "../../../DepositData.json";

const Container = styled.div`
	width: auto;
	margin-left: 16rem;
	position: relative;
	padding: 0 4rem;
`;

function Main() {
	return (
		<Container>
			<Nav />
			<AddButton />
			<Deposits title="Active Deposits" count={2} data={depositData.active} />
			<Deposits title="Closed Deposits" count={8} data={depositData.closed} />
		</Container>
	);
}

export default Main;
