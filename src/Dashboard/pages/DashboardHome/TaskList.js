import React from 'react'
import styled from 'styled-components'

//Own Components
import './TaskList.scss'
import ViewAllButton from '../../Dashboard_Components/ViewAllButton'
import BouncingBall from '../../Dashboard_Components/BouncingBall'

const Container = styled.div`    
   .scrollbar-container {
        min-width: 500px;
   } 
`

const CardContainer = styled.div`
    width: max-content;
    height: auto;
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

const Indicator = styled.div`
    position: absolute;
    width: 4px;
    height: 60%;
    border-radius: .3rem;
    left: .625rem;
    top: 20%;
    opacity: .6;
    transition: opacity .2s;
    background: ${({theme}) => theme.newTasks};
`

export default function TaskList({tasks, creators}) {

    let today = new Date()
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    return (
        <>
        <Container className="-container--">
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">New Tasks</CardTitle>
                    <div className="scroll-area-md">
                        <div className="scrollbar-container">
                            <ul className="list-group list-group-flush">
                                {tasks.length !== 0 ? 
                                    tasks.map((task, index) => ( 
                                        <li key={index} className="list-group-item">
                                            <Indicator className={`dot-${task.status}`}></Indicator>
                                            <div className="content-wrapper">
                                                <div className="content-left mr-2">
                                                    <div className="custom-control">
                                                        <input type="checkbox" id="exampleCustomCheckbox1" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="exampleCustomCheckbox1">&nbsp;</label>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        {task.description}
                                                        <div className="badge badge-info ml-2">Approved</div>
                                                    </div>
                                                    <div className="widget-subheading">
                                                        <i>Written by {creators[index]} at {time}</i>
                                                    </div>
                                                </div>
                                                <div className="widget-content-right widget-content-actions">
                                                    <button className="border-0 btn-transition btn tick btn-outline-success">
                                                        <span className="iconify" data-icon="teenyicons:tick-small-solid" data-inline="false"></span>
                                                    </button>
                                                    <button className="border-0 btn-transition btn btn-outline-danger">
                                                        <span className="iconify" data-icon="carbon:delete" data-inline="false"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                )): <BouncingBall loading={true} />}
                            </ul>
                        </div>
                    </div>
                </div>
                <ViewAllButton func={false} title="Tasks" marginTop="10px" marginBottom="10px"/>
            </CardContainer>
        </Container>
        </>
    )
}
