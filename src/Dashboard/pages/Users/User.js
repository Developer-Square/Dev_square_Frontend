import React, {useState, useRef} from "react";
import styled from 'styled-components';
import $ from 'jquery';
import {useSelector, useDispatch} from 'react-redux'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'

//Own Components
import {userToBeUpdated, setModalShow} from '../../../redux/action-creator/index'
import ConfirmDelete from '../../Reusable Components/ConfirmDelete'
import ModalComponent from '../../../components/Reusable Components/ModalComponent'
import {handleUpdate} from '../../../helpers/Reusable Functions'

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

	.pop-over svg {
        font-size: 22px;
        float: right;
        cursor: pointer;
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
	const {users} = useSelector(state => state.users)
	const [userId, setUserId] = useState('')
	const [deleteModal, setDeleteModal] = useState(false)
	const [userTasks, setUserTasks] = useState([])
	const [username, setUsername] = useState('')
	const [userTasksModal, setUserTasksModal] = useState(false)
	const [popoverShow, setPopoverShow] = useState(false);
    const [target, setTarget] = useState('');
	const dispatch = useDispatch()

	//To open the popover responsible for updating, deleting or assigning tasks
    const popoverRef = useRef()

	$(document).ready(function() {
		$('.-container').each(function() {
			let delay = $(this).index();
			$(this).css('animation-delay', delay - 9 + 's')
		})
	})

	function handleDelete(e) {
		//Getting the id of the clicked row
		let user= e.currentTarget.className.slice(0,24)
		setUserId(user)
		setDeleteModal(true)
	}

	function handleView(tasks, name) {
		setUserTasks(tasks)
		setUsername(name)
		setUserTasksModal(true)
	}

	const handlePopover = (e) => {
        setPopoverShow(!popoverShow)
        //To allow the user to use the svg close icon to close the popover
        if (typeof(e.target.className) !== 'object') {
            if (e.target.className.indexOf('button') === -1) {
                setTarget(e.target)
            }
        }
    }
	const {name, email, tasks, status, skills, id} = data

	return (
			<>
				<ModalComponent type={`${username}'s Tasks`} show={userTasksModal} usertasks={userTasks} onHide={() => setUserTasksModal(false)}/>
				<ConfirmDelete deletetype="users" id={userId} show={deleteModal} onHide={() => setDeleteModal(false)}/>
				<Container popoverRef={popoverRef} onClick={handlePopover} className={`-container`}>
					<Overlay
						show={popoverShow}
						target={target}
						container={popoverRef.current}
						containerPadding={20}
						placement="bottom-end"
						rootClose={true}
						onHide={() => {}}
					>
						<Popover id={`popover-positioned-bottom`} onClick={handlePopover}>
							<Popover.Title as="h3" className="pop-over">
								Actions
								<span className="iconify" data-icon="carbon:close" data-inline="false"></span>
							</Popover.Title>
							<Popover.Content>
								{tasks !== undefined && tasks.length >= 1 ? (
									<Button className={`mr-2 mb-2 assign col-12 ${id} button`} variant="outline-success" onClick={() => handleView(tasks, name)}>View User Tasks</Button>
								): null}
								<div className="d-flex justify-content-between">
									<Button className={`mr-2 ${id} button`} variant="outline-primary" onClick={(e) => handleUpdate(e, users, dispatch, userToBeUpdated, setModalShow)}>Update</Button>
									<Button variant="danger" className={`${id} button`} onClick={handleDelete}>Delete</Button>
								</div>
							</Popover.Content>
						</Popover>
					</Overlay>
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
			</>
	)}

export default User;
