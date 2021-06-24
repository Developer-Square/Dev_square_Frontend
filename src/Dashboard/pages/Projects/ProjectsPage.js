import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//Own Components
import AddButton from "../../Reusable Components/AddButton";
import Projects from "./Projects";
import ProjectsModal from './ProjectsModal'
import depositData from "../../../DepositData.json";
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../../../helpers/ApiFunctions';
import { setModalShow } from '../../../redux/action-creator';
import { toggleModal } from '../../../helpers/Reusable Functions';
import { projectToBeUpdated } from '../../../redux/action-creator/projectActions';

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 30px;
`

function ProjectsPage() {
    const {projects, updateProjectCount, projecttobeupdated} = useSelector(state => state.projects)
    const {modalShow} = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        if (projects.length === 0 || updateProjectCount > 0) {
            getProjects(dispatch)
        }
        // eslint-disable-next-line
    }, [projects.length, updateProjectCount])

    return (
        <>
        <AddButton onClick={() => setModalShow(true)}  />
        <Container className="projects">
            <ProjectsModal show={modalShow} projecttobeupdated={projecttobeupdated} onHide={() => toggleModal(dispatch, projectToBeUpdated, setModalShow)}/>
			<Projects title="Active Projects" count={projects.length} data={projects} />
			<Projects title="Closed Projects" count={3} data={depositData.closed} />
        </Container>
        </>
    )
}

export default ProjectsPage;