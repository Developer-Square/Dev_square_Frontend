import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
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

export default function PieChart({projects, taskIds}) {
    const {AllTasks} = useSelector(state => state.tasks)
    const [projectName, setProjectName] = useState('')
    const api = new Api()

    useEffect(() => {
        //calculate()
        if (projects !== '') {
            getSpecificTasks()
            console.log(projects[0].id, 'here')
        }
    }, [])
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Select your project to see the progress
        </Tooltip>
      );

    function getSpecificTasks() {
        api.Projects().getProjectTasks(projects[0].id)
        .then(res => {
            if (res.status === 200) {
                //
            }
        })
    }

    function calculate() {
        if (AllTasks.length !== 0 && taskIds !== '') {
            AllTasks.map(task => {
                taskIds.map(taskId => {
                    let len = taskId.length
                    taskId.map((Id, index) => {
                        if (task.id === Id) {
                            let project = []
                            project.push(task)

                            if (index === len-1) {
                                let notStarted = 0
                                project.map(pro => {
                                    //
                                })
                            }
                        }
                        return null
                    })
                    return null
                })
                return null
            })
        }
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
                        <Form.Control as="select" onChange={(e) => setProjectName(e.target.value)}>
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
                        percent={60}
                        type="circle" />
                    </div>
                </div>
            </CardContainer>
        </Container>
    )
}
