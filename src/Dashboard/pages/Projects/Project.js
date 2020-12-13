import React from "react";
import styled from 'styled-components';
import $ from 'jquery';

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 0;
	border-bottom: 1px solid rgba(190,190,190,0.22);
	cursor: pointer;
	background-color: ${({theme}) => theme.primary};
	transition: all 400ms ease-in-out;
	animation: fadein 2s backwards;

	@keyframes fadein {
		  from {
			opacity: 0
		}
		to {
			opacity: 1
		}
	}

	&:hover {
		background-color: ${({theme}) => theme.secondary}
	}
`

const Text = styled.h1`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${({theme}) => theme.textColor};
	margin: 0;
`
const Subtitle = styled(Text)`
	font-size: 0.75rem;
	color: #B2BFE1;
	margin-top: 2px;
`

const ProjectContainer = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
`

const ProjectText = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
`

const ProjectImg = styled.img`
	height: 35px;
	width: 35px;
`

const ProjectStreet = styled(Text)`
	font-size: 1rem;
`

const Email = styled(Text)`
	width: 15%;
`

const DueDate = styled(Text)`
	width: 10%;
`

const DepositWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 15%;
`

const Status = styled.div`
	display: flex;
	align-items: center;
`

const StatusIndicator = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 10px;
	background-color: ${props => props.color};
	margin-left: 1rem;
	position: absolute;
	right: 7rem;
`

function Project({data}) {
	$(document).ready(function() {
		$('.-container').each(function() {
			let delay = $(this).index();
			$(this).css('animation-delay', delay - 5 + 's')
		})
	})
	const {username, email, rent, deposit, client} = data;

	return ( 
		<Container className="-container">
		<ProjectContainer className="pl-2">
			<ProjectImg src={require(`../../../../public/images/avatars/${username.imageUrl}`)} className="rounded-circle"/>
			<ProjectText>
				<ProjectStreet>{username.address.street}</ProjectStreet>
				<Subtitle>{username.address.city}</Subtitle>
			</ProjectText>
		</ProjectContainer>
		<Email>{email}</Email>
		<DueDate>{rent}</DueDate>
		<DepositWrapper>
			<Text>{deposit.amount}</Text>
			<Subtitle>{deposit.type}</Subtitle>
		</DepositWrapper>
		<Status>
			<Text>{client.client_message}</Text>
			{(() => {
				switch (client.level) {
					case 1: return <StatusIndicator color="#F17E7E"/>;
					case 2: return <StatusIndicator color="#FFD056"/>;
					case 3: return <StatusIndicator color="#75C282"/>;
					case 4: return <StatusIndicator color="#007bff"/>;
					default: return <StatusIndicator color="#AAA5A5"/>;
				}
			})()}
		</Status>
	</Container>
	)}

export default Project;
