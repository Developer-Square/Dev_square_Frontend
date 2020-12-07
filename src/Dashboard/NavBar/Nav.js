import React from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

//Own Components
import Api from '../../services/network'

const Container = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 3rem;

	.card-header {
		border-radius: 0;
		border: none;
		padding: 0;
		background: none;
	}

	.accordion {
		position: relative;
	}

	.btn-container {
		position: absolute;
		top: 40px;
	}

	.btn {
		padding: .3rem .6rem;
    	font-size: 15px;
	}

	.btn-primary {
		background-color: transparent;
	}
`;

const ProfileImg = styled.img`
	height: 2rem;
	margin: 0 1rem;
	cursor: pointer;
`;

const MessageIcon = styled.span`
	color: ${({ theme }) => theme.colorGray};
	font-size: 41px;
	cursor: pointer;
	padding: .5rem;
	transition: all .4s ease-in-out;
	border-radius: 50%;

	&:hover {
		background: rgba(0,0,0,0.1);
	}
`;

function Nav() {
	let history = useHistory()

	const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Click to Logout
        </Tooltip>
	  );

	  function handleLogout() {
		const api = new Api()
		const data = {
			refreshToken: `${localStorage.getItem('refreshToken')}`
		}
		api.auth().logout(data)
		localStorage.clear()
		//Moving back to the homepage
		history.push('/')
	  }
	  
	return (
		<Container>
			<MessageIcon
				className="iconify"
				data-icon="carbon:email"
				data-inline="false"
			></MessageIcon>
			<OverlayTrigger
			placement="left"
			delay={{ show: 250, hide: 400 }}
			overlay={renderTooltip}
			>  
				<Accordion>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						<ProfileImg src="/images/assets/dashboard_images/profilelg.png" />
					</Accordion.Toggle>
					<Accordion.Collapse className="btn-container" eventKey="0">
					<Button className="btn-outline-warning" onClick={handleLogout}>Logout</Button>
					</Accordion.Collapse>
				</Accordion>
			</OverlayTrigger>
		</Container>
	);
}

export default Nav;
