import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 3rem;
`;

const ProfileImg = styled.img`
	height: 2rem;
	margin: 0 1rem;
	cursor: pointer;
`;

const MessageIcon = styled.span`
	color: ${({ theme }) => theme.colorGray};
	font-size: 26px;
	cursor: pointer;
`;

function Nav() {
	return (
		<Container>
			<MessageIcon
				className="iconify"
				data-icon="carbon:email"
				data-inline="false"
			></MessageIcon>
			<ProfileImg src="images/assets/dashboard_images/profilesm.png" />
		</Container>
	);
}

export default Nav;
