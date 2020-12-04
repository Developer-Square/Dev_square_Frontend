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

const Username = styled(Text)`
	width: 30%;
`;
const Email = styled(Text)`
	width: 15%;
`;
const Login = styled(Text)`
	width: 10%;
`;
const Task = styled(Text)`
	width: 15%;
`;
const Status = styled(Text)``;

function MenuBar({username, email, login, extra, status }) {
	return (
		<Container>
			<Username>{username}</Username>
			<Email>{email}</Email>
			<Login>{login}</Login>
			<Task>{extra}</Task>
			<Status>{status}</Status>
		</Container>
	);
}

export default MenuBar;
