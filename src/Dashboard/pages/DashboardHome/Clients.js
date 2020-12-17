import React from 'react'
import styled from 'styled-components'
import {Progress} from 'react-sweet-progress'

//Own Components
import '../Tasks/Tasks.scss'

const Container = styled.div`   
    margin-top: 40px;
    margin-bottom: 30px;

    .rt-tr-group {
        flex: 1 0 auto;  
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

export default function Clients() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();

    today = day + '/' + month + '/' + year;

    return (
        <>
        <Container className="col-12 container">
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Clients</CardTitle>
                    <div className="ReactTable -striped -highlight -fixed">
                        <div className="rt-table" role="grid">
                            <div className="rt-thead bg-white">
                                <div className="rt-tr" role="row">
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Client ID</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Name</div>
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
                                    <div className="rt-tr">
                                        <div className="rt-td odd" role="gridcell">345</div>
                                        <div className="rt-td odd" role="gridcell">Donatello</div>
                                        <div className="rt-td odd" role="gridcell">Project Takamora</div>
                                        <div className="rt-td odd" role="gridcell">
                                            <Progress
                                                theme={{
                                                    active: {
                                                      color: '#007bff'
                                                    }
                                                  }}
                                                percent={25}/>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">
                                        <span><span className="dot-in-progress">●</span> In Progress</span>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">{today}</div>
                                        <div className="rt-td odd" role="gridcell">PHP</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td" role="gridcell">67</div>
                                        <div className="rt-td" role="gridcell">Michelangelo</div>
                                        <div className="rt-td" role="gridcell">Project Eren</div>
                                        <div className="rt-td" role="gridcell">
                                            <Progress
                                                theme={{
                                                    active: {
                                                      color: '#007bff'
                                                    }
                                                  }}
                                                percent={34}/>
                                        </div>
                                        <div className="rt-td" role="gridcell">
                                        <span><span className="dot-in-progress">●</span> In Progress</span>
                                        </div>
                                        <div className="rt-td" role="gridcell">{today}</div>
                                        <div className="rt-td" role="gridcell">Reactjs</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td odd" role="gridcell">90</div>
                                        <div className="rt-td odd" role="gridcell">Leonardo </div>
                                        <div className="rt-td odd" role="gridcell">Project Ippo</div>
                                        <div className="rt-td odd" role="gridcell">
                                            <Progress
                                                theme={{
                                                    active: {
                                                      color: '#fbc630'
                                                    }
                                                  }}
                                                percent={50}/>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">
                                        <span><span className="dot-in-progress">●</span> In Progress</span>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">{today}</div>
                                        <div className="rt-td odd" role="gridcell">HTML, CSS, JS</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td" role="gridcell">99</div>
                                        <div className="rt-td" role="gridcell">Rafael</div>
                                        <div className="rt-td" role="gridcell">Project Issei</div>
                                        <div className="rt-td" role="gridcell">
                                            <Progress
                                                theme={{
                                                    active: {
                                                      color: '#fbc630'
                                                    }
                                                  }}
                                                percent={59}/>
                                        </div>
                                        <div className="rt-td" role="gridcell">
                                        <span><span className="dot-on-hold">●</span> On Hold</span>
                                        </div>
                                        <div className="rt-td" role="gridcell">{today}</div>
                                        <div className="rt-td" role="gridcell">JavaScript</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td odd" role="gridcell">23</div>
                                        <div className="rt-td odd" role="gridcell">Shredder </div>
                                        <div className="rt-td odd" role="gridcell">Project Aoki</div>
                                        <div className="rt-td odd" role="gridcell">
                                            <Progress
                                                theme={{
                                                    active: {
                                                      color: '#28a745'
                                                    }
                                                  }}
                                                percent={75}/>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">
                                        <span><span className="dot-not-started">●</span> Not Started</span>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">{today}</div>
                                        <div className="rt-td odd" role="gridcell">Android</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td" role="gridcell">223</div>
                                        <div className="rt-td" role="gridcell">April O'Neil </div>
                                        <div className="rt-td" role="gridcell">Project Miyata</div>
                                        <div className="rt-td" role="gridcell">
                                            <Progress
                                                theme={{
                                                    active: {
                                                      color: '#007bff'
                                                    }
                                                  }}
                                                percent={23}/>
                                        </div>
                                        <div className="rt-td" role="gridcell">
                                        <span><span className="dot-cancelled">●</span> Cancelled</span>
                                        </div>
                                        <div className="rt-td" role="gridcell">{today}</div>
                                        <div className="rt-td" role="gridcell">Java</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td odd" role="gridcell">26</div>
                                        <div className="rt-td odd" role="gridcell">Karai </div>
                                        <div className="rt-td odd" role="gridcell">Project Sendo</div>
                                        <div className="rt-td odd" role="gridcell">
                                            <Progress
                                                theme={{
                                                    active: {
                                                      color: 'rgb(40, 167, 69)'
                                                    }
                                                  }}
                                                percent={100}/>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">
                                        <span><span className="dot-completed">●</span> Completed</span>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">{today}</div>
                                        <div className="rt-td odd" role="gridcell">Nodejs</div>
                                    </div>
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
