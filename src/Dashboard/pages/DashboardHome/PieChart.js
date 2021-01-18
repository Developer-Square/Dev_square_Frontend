import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Form, Tooltip, OverlayTrigger} from 'react-bootstrap'
import {Progress} from 'react-sweet-progress'

//Own Components
import Api from '../../../services/network'

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

export default function PieChart({projects}) {
    const [projectName, setProjectName] = useState('')
    const [tasksNumber, setTaskNumber] = useState(0)
    const api = new Api()

    useEffect(() => {
        if (projects !== '') {
            getSpecificTasks()
            setProjectName(projects[0].name)
        }
       // eslint-disable-next-line 
    }, [projects])
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Select your project to see the progress
        </Tooltip>
      );

    function getSpecificTasks(params) {
        let data
        if (params !== undefined) {
            data = params
        } else {
            data = projects[0].id
        }
        api.Projects().getProjectTasks(data)
        .then(res => {
            if (res.status === 200) {
                let inProgress = 0;
                let len = res.data.length
                res.data.map((task, index) => {
                    if (task.status === "inProgress") {
                        inProgress += 1
                    }

                    if (index === len - 1) {
                        let result = Math.round((inProgress / len) * 100)
                        setTaskNumber(result)
                    }
                    return null;
                })
            }
        })
    }

    function handleChange(e) {
        setProjectName(e.target.value)
        let project_name = e.target.value.slice(8)
        projects.map(project => {
            if (project.name ===  project_name) {
                getSpecificTasks(project.id)
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
