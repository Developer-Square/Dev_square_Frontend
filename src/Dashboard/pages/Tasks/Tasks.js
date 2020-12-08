import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//Own Components
import './Tasks.scss'
import AddButton from '../../Dashboard_Components/AddButton'
import TaskModal from './TaskModal'
import Pagination from '../../Dashboard_Components/Pagination'
import Api from '../../../services/network'
import notify from '../../../helpers/Notify'

const Container = styled.div`   
    margin-top: 80px;
    margin-bottom: 30px;
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
    const [tasks, setTasks] = useState('');
    const [user, setUser] = useState('');
    const api = new Api()

    useEffect(() => {
        getTasks()
        // eslint-disable-next-line
    }, [])

    function getTasks() {
        api.Tasks().getAllTasks()
        .then(res => {
            if (res.status === 200) {
                setTasks(res.data)
                notify('success', 'Tasks fetched successfully')
            }
        })
        .catch(err => {
            // const {data} = err.response
            notify('error', err.message)
        })

    }

    
    const getUser = async (id) => {
        const api  = new Api()
        try {
            const res = await api.User().getUser(id)
            if (res.status === 200) {
                setUser(res.data.name)
            }  
        } catch (error) {
            const {message} = error.response.data
            setUser(message)
        }
    }

    const toggleModal = () => {
        setModalShow(true)
    }

    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();

    today = day + '/' + month + '/' + year;

    return (
        <>
        <AddButton onClick={() => toggleModal()} />
        <TaskModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Container className="col-12 container">
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Tasks</CardTitle>
                    <div className="ReactTable -striped -highlight -fixed">
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
                                    {tasks !== '' ? tasks.results.map((task, index) => ( 
                                        <div className="rt-tr" key={index}>
                                            <div className="rt-td odd" role="gridcell">{task.id.slice(0,4)}</div>
                                            <div className="rt-td odd" role="gridcell">{task.description}</div>
                                            <div className="rt-td odd" role="gridcell"></div>
                                            <div className="rt-td odd" role="gridcell">
                                            <span><span className="dot-in-progress">●</span> {task.status}</span>
                                            </div>
                                            <div className="rt-td odd" role="gridcell">{task.dueDate.slice(0, 10).split('').reverse().join('')}</div>
                                            <div className="rt-td odd" role="gridcell">{task.stack}</div>
                                        </div>
                                    )): null}
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
