import React, {useState} from 'react'
import styled from 'styled-components'
import {Progress} from 'react-sweet-progress'


//Own Components
import './PortfolioCard.scss'
import PortfolioModal from './PortfolioModal'

const Container = styled.div`   
    margin-top: 40px;
    margin-bottom: 30px;
`

const CardContainer = styled.div`
    width: auto;
    height: auto;
    box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    border-width: 0;
    transition: all .2s;
`

export default function PortfolioCard({profileImg, bgImg, name, role, user}) {
    const [btnText, setBtnText] = useState('')
    const [modalShow, setModalShow] = useState(false)

    const handleReport = (e) => {
        const btn = e.target
        setBtnText(btn.innerHTML)
        if (btn.innerHTML.search('Full') !== -1) {
            btn.innerHTML = 'Close Report'
        } else {
            btn.innerHTML = btnText
        }
        const btnParent = btn.parentElement
        const widgetWrapper = btnParent.parentElement
        const container = widgetWrapper.parentElement
        const containerSibling1 = container.nextElementSibling
        containerSibling1.classList.toggle('show-full-report')
        btn.classList.toggle('btn-outline-danger')
    }
    return (
        <>
        <PortfolioModal user={user} show={modalShow} onHide={() => setModalShow(false)}/>
        <Container className="--container col-4">
            <CardContainer className="main-card mb-3 card">
                <div className="dropdown-menu-header">
                    <div className="dropdown-menu-header-inner bg-dark">
                        <div className="menu-header-image">
                            <img src={`/images/profile/${bgImg}.webp`} className="img-fluid" alt="profile"/>
                        </div>
                        <div className="menu-header-content btn-pane-right">
                            <div className="avatar-icon-wrapper">
                                <div className="avatar-icon">
                                    <img src={`/images/avatars/${profileImg}`} alt="profile"/>
                                </div>
                            </div>
                            <div>
                                <h5 className="menu-header-title">{name}</h5>
                                <h6 className="menu-header-subtitle">{role}</h6>
                            </div>
                            <div className="menu-header-btn-pane">
                                <button className="btn btn-info ml-2" onClick={() => setModalShow(true)}>Edit Portfolio</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" id="container">
                        <div className="widget-content pt-1 pl-0 pr-0" id="widget">
                            <div className="text-center" id="widget-wrapper">
                                <h5 className="widget-heading mb-0">Month Totals</h5>
                                <h6 className="mt-3 mb-3">
                                    <span className="pr-2">
                                        <b className="text-danger">12</b> tasks created,
                                    </span>
                                    <span>
                                        <b className="text-success">24</b> tasks done
                                    </span>
                                </h6>
                                <button className="btn-wide btn-pill btn btn-outline-primary" onClick={handleReport} id="button">Full Report</button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item report" id="report">
                        <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-3">
                                    <div className="icon-container m-0">
                                        <div className="progress-circle-wrapper">
                                            <Progress
                                                theme={{
                                                    active: {
                                                    color: '#06c22b',
                                                    trailColor: '#ccc'
                                                    }
                                                }}
                                                type="circle" width={54} percent={80} />
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">Task Completion</div>
                                    <div className="widget-subheading">Out of all the tasks assigned</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers widget-numbers-sm text-success">
                                        <span>{user.tasks.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </CardContainer>
        </Container>
        </>
    )
}
