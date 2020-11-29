import React, {useState} from 'react'
import styled from 'styled-components'

//Own Components
import AddButton from '../../Dashboard_Components/AddButton'
import AddModal from '../../Dashboard_Components/AddModal'
import Pagination from './Pagination'

const Container = styled.div`   
    margin-top: 80px;
    margin-bottom: 30px;
    .card-body {
        flex: 1 1 auto;
    }

    .ReactTable {
        position: relative;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(0,0,0,.1);
    }

    .rt-table {
        flex: auto 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
    }

    .rt-thead {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        user-select: none;
        background: rgba(0,0,0,.03);
        border-bottom: 1px solid #e9ecef;
        min-width: 500px;
    }

    .rt-tr {
        flex: 1 0 auto;
        display: inline-flex;
        text-align: center; 
    }

    .rt-th {
        padding: .3rem;
        color: #6c757d;
        flex: 200 0 auto;
        width: 200px;
        line-height: normal;
        position: relative;
        font-weight: 700;
        border-right: 1px solid #e9ecef;
        border-bottom: 1px solid #e9ecef;
        transition: box-shadow .3s cubic-bezier(.175,.885,.32,1.275);
        box-shadow: inset 0 0 0 0 transparent;
        text-overflow: ellipsis;
    }

    .rt-resizable-header {
        flex: 100 0 auto;
        width: 100px;
        overflow: visible;
        cursor: pointer;
        padding: .55rem;
        color: #545cd8;
    }

    .rt-resizable-header-content {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .rt-resizer {
        display: inline-block;
        position: absolute;
        width: 36px;
        top: 0;
        bottom: 0;
        right: -18px;
        cursor: col-resize;
        z-index: 10;
    }

    .rt-body {
        flex: 99999 1 auto;
        display: flex;
        flex-direction: column;
        overflow: auto;
        min-width: 500px;
    }

    .rt-tr-group {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        border-bottom: 1px solid #e9ecef;   
    }

    .rt-tr {
        flex: 1 0 auto;
        display: inline-flex;

        &:hover {
            background: #e0f3ff;
        }
    }

    .odd {
        background: rgba(0,0,0,.03);
    }

    .rt-td {
        flex: 100 0 auto;
        width: 100px;
        border-right: 1px solid #e9ecef;
        align-items: center;
        align-content: center;
        display: flex;
        text-overflow: ellipsis;
        padding: .55rem;
        transition: all .3s ease 0s;
        transition-property: width,min-width,padding,opacity;

        .dot-in-progress {
            color: rgb(253, 126, 20);
        }

        .dot-completed {
            color: rgb(58, 196, 125);
        }

        .dot-on-hold {
            color: #007fff;
        }
        .dot-not-started {
            color: #8b16f2;
        }
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

export default function Tasks() {
    const [modalShow, setModalShow] = useState(false);

    const toggleModal = () => {
        setModalShow(true)
        console.log('Here')
    }

    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();

    today = day + '/' + month + '/' + year;

    return (
        <>
        <AddButton onClick={() => toggleModal()} />
        <AddModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Container className="col-12">
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Tasks</CardTitle>
                    <div className="ReactTable -striped -highlight">
                        <div className="rt-table" role="grid">
                            <div className="rt-thead bg-white">
                                <div className="rt-tr" role="row">
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Task ID</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Name</div>
                                    <div className="rt-resizer"></div>
                                </div>
                                <div className="rt-th rt-resizable-header" role="columnheader" tabIndex='-1'>
                                    <div className="rt-resizable-header-content">Developer</div>
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
                                        <div className="rt-td odd" role="gridcell">Create a logo</div>
                                        <div className="rt-td odd" role="gridcell">Sophie</div>
                                        <div className="rt-td odd" role="gridcell">
                                        <span><span className="dot-in-progress">●</span> In Progress</span>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">{today}</div>
                                        <div className="rt-td odd" role="gridcell">UI/UX</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td" role="gridcell">54</div>
                                        <div className="rt-td" role="gridcell">Users should be able to login</div>
                                        <div className="rt-td" role="gridcell">Linus</div>
                                        <div className="rt-td" role="gridcell">
                                        <span><span className="dot-on-hold">●</span> On Hold</span>
                                        </div>
                                        <div className="rt-td" role="gridcell">{today}</div>
                                        <div className="rt-td" role="gridcell">Nodejs</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td odd" role="gridcell">234</div>
                                        <div className="rt-td odd" role="gridcell">Add a new Table to the dashboard</div>
                                        <div className="rt-td odd" role="gridcell">Ryan</div>
                                        <div className="rt-td odd" role="gridcell">
                                        <span><span className="dot-not-started">●</span> Not Started</span>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">{today}</div>
                                        <div className="rt-td odd" role="gridcell">Reactjs</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td" role="gridcell">34</div>
                                        <div className="rt-td" role="gridcell">Create new queries in the backend</div>
                                        <div className="rt-td" role="gridcell">Ryan</div>
                                        <div className="rt-td" role="gridcell">
                                        <span><span className="dot-completed">●</span> Completed</span>
                                        </div>
                                        <div className="rt-td" role="gridcell">{today}</div>
                                        <div className="rt-td" role="gridcell">Python</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td odd" role="gridcell">34</div>
                                        <div className="rt-td odd" role="gridcell">Create new queries in the backend</div>
                                        <div className="rt-td odd" role="gridcell">Ryan</div>
                                        <div className="rt-td odd" role="gridcell">
                                        <span><span className="dot-completed">●</span> Completed</span>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">{today}</div>
                                        <div className="rt-td odd" role="gridcell">Python</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td" role="gridcell">34</div>
                                        <div className="rt-td" role="gridcell">Create new queries in the backend</div>
                                        <div className="rt-td" role="gridcell">Franklin</div>
                                        <div className="rt-td" role="gridcell">
                                        <span><span className="dot-completed">●</span> Completed</span>
                                        </div>
                                        <div className="rt-td" role="gridcell">{today}</div>
                                        <div className="rt-td" role="gridcell">Python</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td odd" role="gridcell">34</div>
                                        <div className="rt-td odd" role="gridcell">Create new queries in the backend</div>
                                        <div className="rt-td odd" role="gridcell">Timo</div>
                                        <div className="rt-td odd" role="gridcell">
                                        <span><span className="dot-completed">●</span> Completed</span>
                                        </div>
                                        <div className="rt-td odd" role="gridcell">{today}</div>
                                        <div className="rt-td odd" role="gridcell">Python</div>
                                    </div>
                                    <div className="rt-tr">
                                        <div className="rt-td" role="gridcell">34</div>
                                        <div className="rt-td" role="gridcell">Create new queries in the backend</div>
                                        <div className="rt-td" role="gridcell">Ryan</div>
                                        <div className="rt-td" role="gridcell">
                                        <span><span className="dot-completed">●</span> Completed</span>
                                        </div>
                                        <div className="rt-td" role="gridcell">{today}</div>
                                        <div className="rt-td" role="gridcell">Python</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Pagination />
                    </div>
                </div>
            </CardContainer>
        </Container>
        </>
    )
}
