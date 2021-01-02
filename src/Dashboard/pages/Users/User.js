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

const Property = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
`

const PropertyText = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
`

const PropertyImg = styled.img`
	height: 35px;
	width: 35px;
`

const PropertyStreet = styled(Text)`
	font-size: 1rem;
`

const MoveInDate = styled(Text)`
	width: 15%;
`

const Rent = styled(Text)`
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

function User({data, index}) {
	$(document).ready(function() {
		$('.-container').each(function() {
			let delay = $(this).index();
			$(this).css('animation-delay', delay - 5 + 's')
		})
	})

	const {name, email, tasks, status, skills} = data

	return ( 
		<Container className="-container">
			<Property className="pl-2">
				<PropertyImg src={require(`../../../../public/images/avatars/${index}.jpg`)} className="rounded-circle"/>
				<PropertyText>
					<PropertyStreet>{name}</PropertyStreet>
					<Subtitle>{skills !== undefined ? `${skills[0]} developer` : null}</Subtitle>
				</PropertyText>
			</Property>
			<MoveInDate>{email}</MoveInDate>
			<Rent></Rent>
			<DepositWrapper>
				<Text>{tasks !== undefined ? tasks.length : null}</Text>
				<Subtitle>{}</Subtitle>
			</DepositWrapper>
			<Status>
				<Text>{status === 'available' ? 'Available' : status === 'busy' ? 'Busy' : 'Deactivated'}</Text>
				{(() => {
					switch (status) {
						case 'deactivated': return <StatusIndicator color="#F17E7E"/>;
						case 'busy': return <StatusIndicator color="#FFD056"/>;
						case 'available': return <StatusIndicator color="#75C282"/>;
						default: return <StatusIndicator color="#AAA5A5"/>;
					}
				})()}
			</Status>
		</Container>
	)}

export default User;
