import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Form, Tooltip, OverlayTrigger} from 'react-bootstrap'
import {Progress} from 'react-sweet-progress'
import { calculateProjectTasks } from '../../../helpers/ApiFunctions'

//Own Components

const Container = styled.div`
    .card-body {
        padding: 0;
        align-items: center;
    }

    .form-control {
        margin-right: 15px;
        width: 40%;
        margin-left: auto;
        margin-bottom: 15px;
    }
`

const CardContainer = styled.div`
    width: 500px;
    height: 377px;
    box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    border-width: 0;
    transition: all .2s;
`

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    padding: .75rem 1.25rem;
    height: 3.5rem;
    color: ${({theme}) => theme.darkColor};
    font-weight: 600;
    border-bottom: 1px solid rgba(0,0,0,.125);
    font-size: 1.2rem;
`

export default function PieChart({projects, tasks}) {
    const [projectName, setProjectName] = useState('')
    const [tasksNumber, setTaskNumber] = useState(0)


    useEffect(() => {
        if (projects.length && tasks.results) {
            calculateProjectTasks(projects[0], setTaskNumber, tasks.results)
            setProjectName(projects[0].name)
        }
       // eslint-disable-next-line 
    }, [projects])
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Select your project to see the progress
        </Tooltip>
      );

    function handleChange(e) {
        setProjectName(e.target.value)
        let project_name = e.target.value.slice(8)
        console.log(project_name)
        projects.map(project => {
            if (project.name ===  project_name) {
                calculateProjectTasks(project, setTaskNumber, tasks.results)
            }
            return null
        })
    }

    return (
        <Container>
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Project Stats</CardTitle>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >   
                        <Form.Control as="select" value={projectName} onChange={handleChange}>
                            {projects !== '' ? projects.map(project => (
                                 <option key={project.id}>Project {project.name}</option>
                            )): 'Loading'}
                        </Form.Control>
                    </OverlayTrigger>

                    <div className="chart d-flex justify-content-center align-items-center">
                        <Progress
                        theme={{
                              active: {
                                trailColor: '#9d05f5',
                                color: '#f5af5b'
                              }
                            }}
                        width={230}
                        percent={tasksNumber}
                        type="circle" />
                    </div>
                </div>
            </CardContainer>
        </Container>
    )
}
