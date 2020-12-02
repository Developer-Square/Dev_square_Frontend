import React from 'react'
import styled from 'styled-components'

//Own Components
import './TaskList.scss'
import ViewAllButton from '../../Dashboard_Components/ViewAllButton'

const Container = styled.div`    
    
`

const CardContainer = styled.div`
    width: auto;
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

export default function TaskList() {

    let today = new Date()
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    return (
        <Container className="-container">
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Task List</CardTitle>
                    <div className="scroll-area">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item first">
                            <Indicator className="bg-danger"></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox1" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="exampleCustomCheckbox1">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Create a logo
                                        <div className="badge badge-danger ml-2">Rejected</div>
                                    </div>
                                    <div className="widget-subheading">
                                        <i>Written by Linus at {time}</i>
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
                        <li className="list-group-item">
                            <Indicator className=""></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox2" className="custom-control-input" />
                                        <label className="custom-control-label" htmlhtmlFor="exampleCustomCheckbox2">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Users should be able to login
                                        <div className="badge badge-info ml-2">Approved</div>
                                    </div>
                                    <div className="widget-subheading">
                                        <i>Written by Frank at {time}</i>
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
                        <li className="list-group-item">
                            <Indicator className=""></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox3" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="exampleCustomCheckbox3">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Add a new Table to the dashboard
                                        <div className="badge badge-info ml-2">Approved</div>
                                    </div>
                                    <div className="widget-subheading">
                                        <i>Written by Ryan {time}</i>
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
                        <li className="list-group-item">
                            <Indicator className="bg-success"></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox4" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="exampleCustomCheckbox4">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Create new queries in the backend
                                        <div className="badge badge-success ml-2">Completed</div>
                                    </div>
                                    <div className="widget-subheading">
                                        <i>Written by Timo at {time}</i>
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
                        <li className="list-group-item">
                            <Indicator className="bg-success"></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox5" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="exampleCustomCheckbox5">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Add new loading component
                                        <div className="badge badge-success ml-2">Completed</div>
                                    </div>
                                    <div className="widget-subheading">
                                        <i>Written by Clinton at {time}</i>
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
                        <li className="list-group-item">
                            <Indicator className="bg-success"></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox6" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="exampleCustomCheckbox6">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Update the users database
                                        <div className="badge badge-success ml-2">Completed</div>
                                    </div>
                                    <div className="widget-subheading">
                                        <i>Written by Sophie at {time}</i>
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
                    </ul>
                    </div>
                </div>
                <ViewAllButton title="Tasks" marginTop="10px" marginBottom="10px"/>
            </CardContainer>
        </Container>
    )
}
