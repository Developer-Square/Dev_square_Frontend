import React, {useState, useEffect} from "react";
import {useSelector} from 'react-redux'
import styled from "styled-components";


//Own Components
import MenuBar from "../../Dashboard_Components/MenuBar";
import User from './User'
import ViewAllButton from '../../Dashboard_Components/ViewAllButton'
import Domino from '../../Dashboard_Components/Domino'


const Container = styled.div`
	padding-bottom: 40px;
`;

const Title = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.textColor};
	font-size: 1.3rem;
	display: flex;
	align-items: center;
`;

const UserCount = styled.div`
	margin-left: 1rem;
	font-size: 1rem;
	background-color: ${({ theme }) => theme.header};
	color: ${({ theme }) => theme.headerNumber};
	width: 28px;
	height: 28px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
`;

const Content = styled.div`
	position: relative;
`

function Users({ title, page, pageNumber, data, count }) {
	const [size, setSize] = useState(3)
	const {updatedCount} = useSelector(state => state.users)

	useEffect(() => {
		
		// eslint-disable-next-line 
	}, [updatedCount])

	

	const toggleSize = () => {
		if (size === 3) {
			setSize(data.length)
		} else {
			setSize(3)
		}
	}

	return (
		<Container>
			<Title>{title}<UserCount>{count}</UserCount></Title>
			<MenuBar username="Username" email="Email" extra="Tasks Assigned" status="Status"/>
			<Content>
				{data !== undefined ? data.slice(0, size).map((user, index) => (
					<User data={user} index={index + 1} key={index}/>
				)): <Domino loading={true} />}
			</Content>
			<ViewAllButton func={true} title={title} marginTop="15px" page={page} pageNumber={pageNumber} marginBottom="10px" onClick={() => toggleSize()}/>
		</Container>
	);
}

export default Users;
