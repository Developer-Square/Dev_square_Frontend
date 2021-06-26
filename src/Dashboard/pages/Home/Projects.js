import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Progress} from 'react-sweet-progress'

//Own Components
import '../Tasks/Tasks.scss'
import Api from '../../../services/network'
import Domino from '../../Reusable Components/Domino'

const Container = styled.div`   
    margin-top: 40px;
    margin-bottom: 30px;

    .rt-tr-group {
        flex: 1 0 auto;  
    }

    .rt-tr {
        cursor: pointer;
    }

    .dot-inProgress {
        color: rgb(253, 126, 20);
    }

    .dot-completed {
        color: rgb(58, 196, 125);
    }

    .dot-onhold {
        color: #007fff;
        
    }
    .dot-notStarted {
        color: #8b16f2;
        
    }
    .dot-cancelled {
        color: #dc3545;
        
    }
`

const CardContainer = styled.div`
    width: auto;
    height: auto;
    box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    border-width: 0;
    transition: all .2s;
`

const CardTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: .75rem 1.25rem;
    height: 3.5rem;
    color: ${({theme}) => theme.darkColor};
    font-weight: 600;
    border-bottom: 1px solid rgba(0,0,0,.125);
    font-size: 1.2rem;
    margin-bottom: 0;
`

export default function Projects({projects}) {
    const [tasksNumber, setTaskNumber] = useState([])
    const api = new Api()

    useEffect(() => {
        if (projects.length !== 0) {
            let projectResults = []
            // eslint-disable-next-line
            projects.map(project => {
                getSpecificTasks(project.id, projectResults)
            })
        }
        // eslint-disable-next-line
    }, [projects])

    function getSpecificTasks(params, projectResults) {
        api.Projects().getProjectTasks(params)
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
                        projectResults.push(result)
                        setTaskNumber(projectResults)
                    }
                    return null;
                })
            }
        })
    }

    return (
        <>
        <Container className="col-12 container">
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Projects</CardTitle>
                    <div className="ReactTable -striped -highlight -fixed">
                        <div className="rt-table" role="grid">
                            <div className="rt-thead bg-white">
                                <div className="rt-tr" role="row">
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Project ID</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Description</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Project Name</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Progress</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Status</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Due Date</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Stack</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                </div>
                            </div>
                            <div className="rt-body">
                                <div className="rt-tr-group">
                                        {projects !== '' ? projects.map((project, index) => (
                                            <div className="rt-tr" key={index}>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{project.id.slice(0,
                                                    6)}</div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{`${project.description.slice(0, 55)}...`}</div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{`Project ${project.name}`}</div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">
                                                    <Progress
                                                        theme={{
                                                            active: {
                                                            color: '#007bff'
                                                            }
                                                        }}
                                                        percent={tasksNumber[index]}/>
                                                </div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">
                                                <span><span className="dot-inProgress">●</span> In Progress</span>
                                                </div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{project.dueDate.slice(0, 10)}</div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{project.stack}</div>
                                            </div>
                                        )) : <Domino loading={true}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContainer>
        </Container>
        </>
    )
}
