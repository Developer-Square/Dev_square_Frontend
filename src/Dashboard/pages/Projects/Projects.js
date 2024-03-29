import React, {useState} from "react";
import styled from "styled-components";

//Own Components
import MenuBar from "../../Reusable Components/MenuBar";
import Project from './Project'
import ViewAllButton from '../../Reusable Components/ViewAllButton'
import Domino from "../../Reusable Components/Domino";

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

const DepositCount = styled.div`
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

function Projects({ title, data, count }) {
	const [size, setSize] = useState(3)

	const toggleSize = () => {
		if (size === 3) {
			setSize(data.length)
		} else {
			setSize(3)
		}
	}

	return (
		<Container>
			<Title>{title}<DepositCount>{count}</DepositCount></Title>
			<MenuBar username="Project Name" email="Description" login="Due Date" extra="Stack" status="Status" page="projects"/>
			<Content>
				{data.length ? data.slice(0, size).map((user, index) => (
					<Project data={user} index={index + 1} key={index}/>
				)):  <Domino loading={true}/>}
			</Content>
			<ViewAllButton func={true} title={title} marginTop="15px" marginBottom="10px" onClick={() => toggleSize()}/>
		</Container>
	);
}

export default Projects;
