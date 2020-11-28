import React from 'react'
import styled from 'styled-components'

const Container = styled.div`   
    margin-bottom: 50px;

    .card-body {
        padding: 0;
        align-items: center;
    }
`

const CardContainer = styled.div`
    width: auto;
    height: auto;
    box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    border-width: 0;
    transition: all .2s;

    .widget-content-wrapper {
        display: flex;
    }

    .badge {
        font-weight: bold;
        text-transform: uppercase;
        padding: 5px 10px;
        min-width: 19px;
    }

    .widget-heading {
        opacity: .8;
        font-weight: bold;
    }

    .widget-subheading {
        opacity: .7;
    }
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

    .btn-actions-pane-right {
        white-space: nowrap;
    }

    .btn {
        color: #fff;
        background-color: #444054;
        border-color: #444054;
    }

    .active {
        background-color: #2d2a37;
        border-color: #272430;
    }
`

export default function ActiveUsers() {
    let today = new Date()
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    return (
        <Container className="col-12 p-0">
            <CardContainer className="main-card mb-3 card">
                    <CardTitle className="card-title">
                        Active Users
                        <div class="btn-actions-pane-right ml-auto">
                            <div role="group" class="btn-group-sm btn-group">
                                <button class="active btn btn-focus">Last Week</button>
                                <button class="btn btn-focus">All Month</button>
                            </div>
                        </div>
                    </CardTitle>
                    <div class="table-responsive">
                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th>Name</th>
                                <th class="text-center">Last Seen</th>
                                <th class="text-center">Status</th>
                                <th class="text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-center text-muted">#1</td>
                                <td>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left">
                                                    <img width="40" class="rounded-circle" src="/images/avatars/4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Linus</div>
                                                <div class="widget-subheading opacity-7">BackEnd Developer</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">{time}</td>
                                <td class="text-center">
                                    <div class="badge badge-success">Active</div>
                                </td>
                                <td class="text-center">
                                    <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center text-muted">#2</td>
                                <td>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left">
                                                    <img width="40" class="rounded-circle" src="/images/avatars/5.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Sophie</div>
                                                <div class="widget-subheading opacity-7">Data Analyst</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">{time}</td>
                                <td class="text-center">
                                    <div class="badge badge-warning">Inactive</div>
                                </td>
                                <td class="text-center">
                                    <button type="button" id="PopoverCustomT-2" class="btn btn-primary btn-sm">Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center text-muted">#3</td>
                                <td>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left">
                                                    <img width="40" class="rounded-circle" src="/images/avatars/2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Ryan Njoroge</div>
                                                <div class="widget-subheading opacity-7">FrontEnd Developer</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">{time}</td>
                                <td class="text-center">
                                    <div class="badge badge-success">Active</div>
                                </td>
                                <td class="text-center">
                                    <button type="button" id="PopoverCustomT-3" class="btn btn-primary btn-sm">Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center text-muted">#4</td>
                                <td>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left">
                                                    <img width="40" class="rounded-circle" src="/images/avatars/11.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Clinton</div>
                                                <div class="widget-subheading opacity-7">Full Stack Ruby Developer</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">{time}</td>
                                <td class="text-center">
                                    <div class="badge badge-warning">Inactive</div>
                                </td>
                                <td class="text-center">
                                    <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center text-muted">#5</td>
                                <td>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left">
                                                    <img width="40" class="rounded-circle" src="/images/avatars/8.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Franklin</div>
                                                <div class="widget-subheading opacity-7">BankEnd Python Developer</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">{time}</td>
                                <td class="text-center">
                                    <div class="badge badge-success">Active</div>
                                </td>
                                <td class="text-center">
                                    <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center text-muted">#6</td>
                                <td>
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left mr-3">
                                                <div class="widget-content-left">
                                                    <img width="40" class="rounded-circle" src="/images/avatars/9.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">Timo</div>
                                                <div class="widget-subheading opacity-7">Full Stack PHP Developer</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">{time}</td>
                                <td class="text-center">
                                    <div class="badge badge-info">On Hold</div>
                                </td>
                                <td class="text-center">
                                    <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-block text-center card-footer">
                        <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                            Cancel
                        </button>
                        <button class="btn-wide btn btn-info">Visit Profiles</button>
                    </div>
            </CardContainer>
        </Container>
    )
}
