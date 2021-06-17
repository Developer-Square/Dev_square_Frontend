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
	font-size: 0.9rem;
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

function Project({data, index}) {
	$(document).ready(function() {
		$('.-container').each(function() {
			let delay = $(this).index();
			$(this).css('animation-delay', delay - 5 + 's')
		})
	})
	const status = 'inProgress'
	const {name, dueDate, stack, description} = data

	return ( 
		<Container className="-container">
		<ProjectContainer className="pl-2">
			<ProjectImg src={require(`../../../../public/images/avatars/${index}.jpg`)} className="rounded-circle"/>
			<ProjectText>
				<ProjectStreet>{name}</ProjectStreet>
				<Subtitle>{}</Subtitle>
			</ProjectText>
		</ProjectContainer>
		<Email>{description !== undefined ? `${description.slice(0, 50)}...`: 'Loading'}</Email>
		<DueDate>{dueDate}</DueDate>
		<DepositWrapper>
			<Text>{stack}</Text>
			<Subtitle>{}</Subtitle>
		</DepositWrapper>
		<Status>
			<Text>{status === 'notStarted' ? 'NotStarted' : status === 'inProgress' ? 'InProgress' : 'Deactivated'}</Text>
			{(() => {
				switch (status) {
					case 'deactivated': return <StatusIndicator color="#F17E7E"/>;
					case 'inProgress': return <StatusIndicator color="#FFD056"/>;
					case 'notStarted': return <StatusIndicator color="#75C282"/>;
					default: return <StatusIndicator color="#AAA5A5"/>;
				}
			})()}
		</Status>
	</Container>
	)}

export default Project;
