import React, {useState} from "react";
import styled from 'styled-components';
import $ from 'jquery';
import {useSelector, useDispatch} from 'react-redux'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'

//Own Components
import {updateUser, setModalShow} from '../../../redux/action-creator/index'
import ConfirmDelete from '../../Dashboard_Components/ConfirmDelete'
import Api from '../../../services/network'
import notify from '../../../helpers/Notify'
import ModalComponent from '../../../components/Reusable Components/ModalComponent'

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
	const {users} = useSelector(state => state.users)
	const [userId, setUserId] = useState('')
	const [deleteModal, setDeleteModal] = useState(false)
	const [userTasks, setUserTasks] = useState([])
	const [username, setUsername] = useState('')
	const [userTasksModal, setUserTasksModal] = useState(false)
	const dispatch = useDispatch()
	const api = new Api()

	$(document).ready(function() {
		$('.-container').each(function() {
			let delay = $(this).index();
			$(this).css('animation-delay', delay - 5 + 's')
		})
	})

	//User Update
	function handleUpdate(e) {
		//Getting the id of the clicked row
        let userId = e.currentTarget.className.slice(5,29)
		users.results.map(user => {
			if (user.id === userId) {
				dispatch(updateUser(user))
				dispatch(setModalShow())
			}
			return null
		})

	}

	function handleDelete(e) {
		//Getting the id of the clicked row
		let user= e.currentTarget.className.slice(0,24)
		setUserId(user)
		setDeleteModal(true)
	}

	function handleView(tasks, name) {
		tasks.map(task => {
			api.Tasks().getTask(task)
			.then(res => {
				if (res.status === 200) {
					let userArray = userTasks
					userArray.push(res.data)
					setUserTasks(userArray)
					setUsername(name)
					setUserTasksModal(true)
				}
			})
			.catch(err => {
				if (err.response) {
					const {message} = err.response.data
					notify('error', message)
				} else {
					notify('error', 'Something went wrong, Please refresh the page.')
				}
			})
			return null
		})
	}
	const {name, email, tasks, status, skills, id} = data

	return (
		<OverlayTrigger
			trigger="click"
			key={index}
			placement="bottom-end"
			rootClose={true}
			overlay={
					<Popover id={`popover-positioned-bottom`}>
						<Popover.Title as="h3">Actions</Popover.Title>
						<Popover.Content>
							{tasks !== undefined && tasks.length >= 1 ? (
								<Button className={`mr-2 mb-2 assign col-12 ${id}`} variant="outline-success" onClick={() => handleView(tasks, name)}>View User Tasks</Button>
							): null}
							<div className="d-flex justify-content-between">
								<Button className={`mr-2 ${id}`} variant="outline-primary" onClick={handleUpdate}>Update</Button>
								<Button variant="danger" className={`${id}`} onClick={handleDelete}>Delete</Button>
							</div>
						</Popover.Content>
					</Popover>
					}
		>
			<Container className={`-container`}>
            	<ModalComponent type={`${username}'s Tasks`} show={userTasksModal} usertasks={userTasks} onHide={() => setUserTasksModal(false)}/>
				<ConfirmDelete deleteType="users" packages={users} id={userId} show={deleteModal} onHide={() => setDeleteModal(false)}/>
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
		</OverlayTrigger> 
	)}

export default User;
