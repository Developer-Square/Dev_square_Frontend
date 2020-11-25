import React from 'react'
import styled from 'styled-components'

//Own Components
import ViewAllButton from '../../Dashboard_Components/ViewAllButton'

const Container = styled.div`
    .card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
        border-width: 0;
        transition: all .2s;
    }

    .main-card {
        width: 685px;
        height: auto;
    }

    
    .card-body {
        padding: 0;
        align-items: center;
    }

    .card-title {
        display: flex;
        align-items: center;
        padding: .75rem 1.25rem;
        height: 3.5rem;
        color: ${({theme}) => theme.darkColor};
        font-weight: 600;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    .list-group {
        padding: .5rem;
        /* height: 250px; */
        overflow-x: hidden;
    }

    .content-wrapper {
        display: flex;
        flex: 1 1;
        position: relative;
        align-items: center;
        flex-direction: row;
    }

    .custom-control {
        margin-left: .625rem;
        position: relative;
        display: block;
        min-height: 1.32rem;
        padding-left: 1.5rem;
    }

    .custom-control-input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom-control-label {
        position: relative;
        margin-bottom: 0;
        vertical-align: top;
    }

    .custom-control-label:before {
        border-radius: .25rem;
        transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        position: absolute;
        top: .16rem;
        left: -1.5rem;
        display: block;
        width: 1rem;
        height: 1rem;
        content: "";
        pointer-events: none;
        background-color: #fff;
        border: 1px solid #adb5bd;
    }

    .custom-control-label:after {
        background: no-repeat 50%/50% 50%;
        position: absolute;
        top: .16rem;
        left: -1.5rem;
        display: block;
        width: 1rem;
        height: 1rem;
        content: "";
    }

    .badge {
        font-weight: 700;
        text-transform: uppercase;
        padding: 5px 10px;
        min-width: 19px;
    }

    .widget-subheading {
        text-transform: capitalize;
        opacity: .5;
    }

    .widget-content-right.widget-content-actions {
        transition: opacity .2s;
        margin-left: auto;
        visibility: hidden;
        opacity: 0;
    }

    .content-wrapper:hover .widget-content-right.widget-content-actions {
        visibility: visible;
        opacity: 1;
    }

    .tick svg {
        width: 0.7em;
        height: 0.7em;
        font-size: 35px;
    }
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

export default function Card({number, name, backgroundIcon, icon, color}) {

    let today = new Date()
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    return (
        <Container backgroundIcon={backgroundIcon} color={color}>
            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">TASKS LIST</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <Indicator className="bg-danger"></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input" />
                                        <label class="custom-control-label" for="exampleCustomCheckbox1">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Create a logo
                                        <div class="badge badge-danger ml-2">Rejected</div>
                                    </div>
                                    <div class="widget-subheading">
                                        <i>Written by Linus at {time}</i>
                                    </div>
                                </div>
                                <div class="widget-content-right widget-content-actions">
                                    <button class="border-0 btn-transition btn tick btn-outline-success">
                                        <span class="iconify" data-icon="teenyicons:tick-small-solid" data-inline="false"></span>
                                    </button>
                                    <button class="border-0 btn-transition btn btn-outline-danger">
                                        <span class="iconify" data-icon="carbon:delete" data-inline="false"></span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <Indicator className=""></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox2" class="custom-control-input" />
                                        <label class="custom-control-label" for="exampleCustomCheckbox2">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Users should be able to login
                                        <div class="badge badge-info ml-2">Approved</div>
                                    </div>
                                    <div class="widget-subheading">
                                        <i>Written by Frank</i>
                                    </div>
                                </div>
                                <div class="widget-content-right widget-content-actions">
                                    <button class="border-0 btn-transition btn tick btn-outline-success">
                                        <span class="iconify" data-icon="teenyicons:tick-small-solid" data-inline="false"></span>
                                    </button>
                                    <button class="border-0 btn-transition btn btn-outline-danger">
                                        <span class="iconify" data-icon="carbon:delete" data-inline="false"></span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <Indicator className=""></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox3" class="custom-control-input" />
                                        <label class="custom-control-label" for="exampleCustomCheckbox3">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Add a new Table to the dashboard
                                        <div class="badge badge-info ml-2">Approved</div>
                                    </div>
                                    <div class="widget-subheading">
                                        <i>Written by Ryan</i>
                                    </div>
                                </div>
                                <div class="widget-content-right widget-content-actions">
                                    <button class="border-0 btn-transition btn tick btn-outline-success">
                                        <span class="iconify" data-icon="teenyicons:tick-small-solid" data-inline="false"></span>
                                    </button>
                                    <button class="border-0 btn-transition btn btn-outline-danger">
                                        <span class="iconify" data-icon="carbon:delete" data-inline="false"></span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <Indicator className="bg-success"></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox4" class="custom-control-input" />
                                        <label class="custom-control-label" for="exampleCustomCheckbox4">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Create new queries in the backend
                                        <div class="badge badge-success ml-2">Completed</div>
                                    </div>
                                    <div class="widget-subheading">
                                        <i>Written by Timo</i>
                                    </div>
                                </div>
                                <div class="widget-content-right widget-content-actions">
                                    <button class="border-0 btn-transition btn tick btn-outline-success">
                                        <span class="iconify" data-icon="teenyicons:tick-small-solid" data-inline="false"></span>
                                    </button>
                                    <button class="border-0 btn-transition btn btn-outline-danger">
                                        <span class="iconify" data-icon="carbon:delete" data-inline="false"></span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <Indicator className="bg-success"></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox5" class="custom-control-input" />
                                        <label class="custom-control-label" for="exampleCustomCheckbox5">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Add new loading component
                                        <div class="badge badge-success ml-2">Completed</div>
                                    </div>
                                    <div class="widget-subheading">
                                        <i>Written by Clinton</i>
                                    </div>
                                </div>
                                <div class="widget-content-right widget-content-actions">
                                    <button class="border-0 btn-transition btn tick btn-outline-success">
                                        <span class="iconify" data-icon="teenyicons:tick-small-solid" data-inline="false"></span>
                                    </button>
                                    <button class="border-0 btn-transition btn btn-outline-danger">
                                        <span class="iconify" data-icon="carbon:delete" data-inline="false"></span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <Indicator className="bg-success"></Indicator>
                            <div className="content-wrapper">
                                <div className="content-left mr-2">
                                    <div className="custom-control">
                                        <input type="checkbox" id="exampleCustomCheckbox6" class="custom-control-input" />
                                        <label class="custom-control-label" for="exampleCustomCheckbox6">&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        Update the users database
                                        <div class="badge badge-success ml-2">Completed</div>
                                    </div>
                                    <div class="widget-subheading">
                                        <i>Written by Sophie</i>
                                    </div>
                                </div>
                                <div class="widget-content-right widget-content-actions">
                                    <button class="border-0 btn-transition btn tick btn-outline-success">
                                        <span class="iconify" data-icon="teenyicons:tick-small-solid" data-inline="false"></span>
                                    </button>
                                    <button class="border-0 btn-transition btn btn-outline-danger">
                                        <span class="iconify" data-icon="carbon:delete" data-inline="false"></span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <ViewAllButton title="Tasks"/>
            </div>
        </Container>
    )
}
