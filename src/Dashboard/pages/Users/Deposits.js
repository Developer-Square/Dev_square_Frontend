import React from "react";
import styled from "styled-components";

//Own Components
import SortingBar from "./SortingBar";
import Deposit from './Deposit'
import ViewAllButton from '../../Dashboard_Components/ViewAllButton'

const Container = styled.div``;

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

function Deposits({ title, data, count }) {
	return (
		<Container>
			<Title>{title}<DepositCount>{count}</DepositCount></Title>
			<SortingBar />
			{data.map((deposit) => (
				<Deposit data={deposit} key={deposit.property.address.street}/>
			))}
			<ViewAllButton title={title}/>
		</Container>
	);
}

export default Deposits;
