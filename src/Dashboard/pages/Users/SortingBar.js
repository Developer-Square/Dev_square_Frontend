import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	padding: 0.4rem 1rem;
	background-color: ${({ theme }) => theme.secondary};
	margin: 2rem 0;
	border-radius: 5px;
`;

const Text = styled.h1`
	font-size: 0.6rem;
	text-transform: uppercase;
	font-weight: 500;
	color: ${({ theme }) => theme.textColor};
	margin: 6.4px 0;
`;

const Property = styled(Text)`
	width: 30%;
`;
const MoveInDate = styled(Text)`
	width: 15%;
`;
const Rent = styled(Text)`
	width: 10%;
`;
const Deposit = styled(Text)`
	width: 15%;
`;
const Status = styled(Text)``;

function SortingBar() {
	return (
		<Container>
			<Property>Username</Property>
			<MoveInDate>Email</MoveInDate>
			<Rent>Latest Login</Rent>
			<Deposit>Tasks Completed</Deposit>
			<Status>Status</Status>
		</Container>
	);
}

export default SortingBar;
