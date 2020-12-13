import React, {useState} from 'react'
import styled from 'styled-components'

//Own Components
import AddButton from "../../Dashboard_Components/AddButton";
import Projects from "./Projects";
import ProjectsModal from './ProjectsModal'

import depositData from "../../../DepositData.json";

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;
`

function ProjectsPage() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <AddButton onClick={() => setModalShow(true)}  />
        <Container className="projects">
            <ProjectsModal show={modalShow} onHide={() => setModalShow(false)}/>
			<Projects title="Active Projects" count={6} data={depositData.active} />
			<Projects title="Closed Projects" count={3} data={depositData.closed} />
        </Container>
        </>
    )
}

export default ProjectsPage;