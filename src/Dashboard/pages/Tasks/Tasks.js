import React, {useState, useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'


//Own Components
import './Tasks.scss'
import AddButton from '../../Dashboard_Components/AddButton'
import TaskModal from './TaskModal'
import Pagination from '../../Dashboard_Components/Pagination'
import Api from '../../../services/network'
import notify from '../../../helpers/Notify'
import TaskLoader from './TaskLoader'
import { addTasks } from '../../../redux/action-creator'
import ConfirmDelete from '../../Dashboard_Components/ConfirmDelete'

const Container = styled.div`   
    margin-top: 80px;
    margin-bottom: 30px;

    .rt-tr {
        position: relative;
        cursor: pointer;
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
    const [tasks, setTasks] = useState('');
    const [taskIds, setTasksIds] = useState('');
    const [rowIndex, setRowIndex] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [tasktobeupdated, settasktobeupdated] = useState('');
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const {UpdatedTask} = useSelector(state => state.tasks)
    //Using the ref attribute to run a function 
    //in the Task Modal child component
    const childRef = useRef()
    const api = new Api()

    useEffect(() => {
        setLoading(true)
        getTasks()
        // eslint-disable-next-line
    }, [UpdatedTask])

    //Get all tasks when the page loads
    function getTasks() {
        api.Tasks().getAllTasks()
        .then(res => {
            if (res.status === 200) {
                let taskObject = {}
                setLoading(false)
                setTasks(res.data)
                //Dispatching an action to add tasks to the redux store
                dispatch(addTasks(res.data.results))
                notify('success', 'Tasks fetched successfully')
                //eslint-disable-next-line
                res.data.results.map((task, index) => {
                    taskObject[`${index}`] = task.id
                    getUser(task.creator)
                })
                setTasksIds(taskObject)
            }
        })
        .catch(err => {
            setLoading(false)
            // const {data} = err.response
            notify('error', err.message)
        })

    }

    //Get the Developer name    
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

    function handleTaskUpdate(e) {
        //Getting the index of the clicked row
        let rowIndex = parseInt(e.currentTarget.className.slice(4,6))
        //Map the indexes stored in state to see which one matches the one that was clicked
        // eslint-disable-next-line
        Object.keys(taskIds).map((key) => {
            if (parseInt(key) === rowIndex) {
                api.Tasks().getTask(taskIds[key])
                .then(res => {
                    if (res.status === 200) {
                        settasktobeupdated(res.data)
                        setModalShow(true)
                        //Run the updateFormfields function in the child component
                        childRef.current.updateFormfields()
                    }
                })
                .catch(err => {
                    const {message} = err.response.data
                    notify('error', message)
                })
            }
        }) 
    }

    function handleDelete(e) {
        //Getting the index of the clicked row
        let rowIndex = parseInt(e.currentTarget.className.slice(0))
        setRowIndex(rowIndex)
        setDeleteModal(true)
    }

    const toggleModal = () => {
        setModalShow(true)
    }

    return (
        <>
        <AddButton onClick={() => toggleModal()} />
        <TaskModal
        ref={childRef}
        task={tasktobeupdated}
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        <ConfirmDelete taskIds={taskIds} rowIndex={rowIndex} show={deleteModal} onHide={() => setDeleteModal(false)}/>
        <Container className="col-12 container">
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <CardTitle className="card-title">Tasks</CardTitle>
                    <div className="ReactTable -striped -highlight -fixed">
                        <div className="rt-table" role="grid">
                            <TaskLoader loading={loading} />
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
                                        <OverlayTrigger
                                        trigger="click"
                                        key={index}
                                        placement="bottom-end"
                                        rootClose={true}
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Title as="h3">Actions</Popover.Title>
                                            <Popover.Content>
                                                <Button className={`mr-2 ${index}`} variant="outline-primary" onClick={handleTaskUpdate}>Update</Button>
                                                <Button variant="danger" className={`${index}`} onClick={handleDelete}>Delete</Button>
                                            </Popover.Content>
                                            </Popover>
                                        }
                                    >  
                                        <div className={`rt-tr ${index}`} key={index}>
                                            {/* Checks the index of the grid cell if its odd it gives an odd class name
                                            which turns it grey */}
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.id.slice(0,4)}</div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.description}</div>
                                                {/* While the user's name is still unavailable we give the field a spinner/loader */}
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">
                                                    {user === '' ? <Spinner animation="border" variant="primary" size="sm"/> : user}
                                                </div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">
                                                {/* The color of the dot changes according to the task status */}
                                                <span><span className={`dot-${task.status}`}>●</span> {task.status}</span>
                                                </div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.dueDate.slice(0, 10)}</div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.stack}</div>
                                        </div>
                                    </OverlayTrigger>
                                    )): null}
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
