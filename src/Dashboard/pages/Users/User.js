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

function User({data}) {
	$(document).ready(function() {
		$('.-container').each(function() {
			let delay = $(this).index();
			$(this).css('animation-delay', delay - 5 + 's')
		})
	})
	const {property, moveInDate, rent, deposit, status} = data;

	return ( 
		<Container className="-container">
		<Property className="pl-2">
			<PropertyImg src={require(`../../../../public/images/avatars/${property.imageUrl}`)} className="rounded-circle"/>
			<PropertyText>
				<PropertyStreet>{property.address.street}</PropertyStreet>
				<Subtitle>{property.address.city}</Subtitle>
			</PropertyText>
		</Property>
		<MoveInDate>{moveInDate}</MoveInDate>
		<Rent>{rent}</Rent>
		<DepositWrapper>
			<Text>{deposit.amount}</Text>
			<Subtitle>{deposit.type}</Subtitle>
		</DepositWrapper>
		<Status>
			<Text>{status.message}</Text>
			{(() => {
				switch (status.level) {
					case 1: return <StatusIndicator color="#F17E7E"/>;
					case 2: return <StatusIndicator color="#FFD056"/>;
					case 3: return <StatusIndicator color="#75C282"/>;
					default: return <StatusIndicator color="#AAA5A5"/>;
				}
			})()}
		</Status>
	</Container>
	)}

export default User;
