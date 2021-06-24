import React, {useState, useRef} from "react";
import styled from 'styled-components';
import $ from 'jquery';
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'

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
	width: 25%;
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
	width: 20%;
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
	const [popoverShow, setPopoverShow] = useState(false);
    const [target, setTarget] = useState('');

	//To open the popover responsible for updating, deleting or assigning tasks
    const popoverRef = useRef()

	$(document).ready(function() {
		$('.-container').each(function() {
			let delay = $(this).index();
			$(this).css('animation-delay', delay - 5 + 's')
		})
	})
	const status = 'inProgress'

	const handlePopover = (e) => {
        setPopoverShow(!popoverShow)
        //To allow the user to use the svg close icon to close the popover
        if (typeof(e.target.className) !== 'object') {
            if (e.target.className.indexOf('button') === -1) {
                setTarget(e.target)
            }
        }
    }

	function handleViewTasks() {}
	function handleUpdate() {}
	function handleDelete() {}

	const {name, dueDate, stack, description, clientId} = data

	return ( 
		<Container popoverRef={popoverRef} onClick={handlePopover} className="-container">
			<Overlay
				show={popoverShow}
				target={target}
				container={popoverRef.current}
				containerPadding={20}
				placement="bottom-end"
				rootClose={true}
			>
				<Popover id={`popover-positioned-bottom`} onClick={handlePopover}>
					<Popover.Title as="h3" className="pop-over">
						Actions
						<span className="iconify" data-icon="carbon:close" data-inline="false"></span>
					</Popover.Title>
					<Popover.Content>
						{/* // Should look at a project's tasks */}
						{/* {data !== undefined && data.length >= 1 ? (
							<Button className={`mr-2 mb-2 assign col-12 ${clientId} button`} variant="outline-success" onClick={handleViewTasks}>View Project Tasks</Button>
						): null} */}
						<div className="d-flex justify-content-between">
							<Button className={`mr-2 ${clientId} button`} variant="outline-primary" onClick={handleUpdate}>Update</Button>
							<Button variant="danger" className={`${clientId} button`} onClick={handleDelete}>Delete</Button>
						</div>
					</Popover.Content>
				</Popover>
			</Overlay>
			<ProjectContainer className="pl-2">
				<ProjectImg src={require(`../../../../public/images/avatars/${index}.jpg`)} className="rounded-circle"/>
				<ProjectText>
					<ProjectStreet>{name}</ProjectStreet>
					<Subtitle>{}</Subtitle>
				</ProjectText>
			</ProjectContainer>
			<Email>{description !== undefined ? `${description.slice(0, 50)}...`: 'Loading'}</Email>
			<DueDate>{dueDate ? dueDate.slice(0, 10) : 'Loading'}</DueDate>
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
