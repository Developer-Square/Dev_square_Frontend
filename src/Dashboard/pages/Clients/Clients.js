import React, {useState} from "react";
import styled from "styled-components";

//Own Components
import MenuBar from "../../Dashboard_Components/MenuBar";
import User from './Client'
import ViewAllButton from '../../Dashboard_Components/ViewAllButton'

const Container = styled.div`
	padding-bottom: 40px;
`;

const Title = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.textColor};
	font-size: 1.3rem;
	display: flex;
	align-items: center;
`;

const DepositCount = styled.div`
	margin-left: 1rem;
	font-size: 1rem;
	background-color: ${({ theme }) => theme.header};
	color: ${({ theme }) => theme.headerNumber};
	width: 28px;
	height: 28px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
`;

function Clients({ title, data, count }) {
	const [size, setSize] = useState(3)

	let userData = []

	const toggleSize = () => {
		if (size === 3) {
			setSize(userData.length)
		} else {
			setSize(3)
		}
	}

	data.map((deposit) => {
		return userData.push(deposit)
	})

	return (
		<Container>
			<Title>{title}<DepositCount>{count}</DepositCount></Title>
			<MenuBar username="Username" email="Email" login="Due Date" extra="Project Name" status="Status"/>
			{userData.slice(0, size).map((user) => (
				<User data={user} key={user.username.address.street}/>
			))}
			<ViewAllButton title={title} marginTop="15px" marginBottom="10px" onClick={() => toggleSize()}/>
		</Container>
	);
}

export default Clients;
