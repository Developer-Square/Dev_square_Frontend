import React, {useState, useEffect, useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import Form from 'react-bootstrap/Form'


//Own Components
import './Tasks.scss'
import AddButton from '../../Dashboard_Components/AddButton'
import TaskModal from './TaskModal'
import Pagination from '../../Dashboard_Components/Pagination'
import Api from '../../../services/network'
import notify from '../../../helpers/Notify'
import BouncingBall from './BouncingBall'
import StairsLoader from './StairsLoader'
import ConfirmDelete from '../../Dashboard_Components/ConfirmDelete'
import {addSpecificTasks, setLoading, addTaskIds} from '../../../redux/action-creator/index'

const Container = styled.div`   
    margin-top: 80px;
    margin-bottom: 30px;

    .rt-tr {
        position: relative;
        cursor: pointer;
    }

    .form-control {
        width: auto;
        margin-top: 10px;
    }

    .names {
        text-transform: capitalize;
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
    const [rowIndex, setRowIndex] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [tasktobeupdated, settasktobeupdated] = useState('');

    const {Tasks, GetTasks, Loading, TaskCreators, TaskIds, Admins} = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    //Using the ref attribute to run a function 
    //in the Task Modal child component
    const childRef = useRef()
    const api = new Api()

    useEffect(() => {
        // eslint-disable-next-line
    }, [GetTasks])

    //Assign a task to a user
    function handleAssign() {

    }

    //Get the tasks of the specified user
    function handleUserTasks(e) {
        if (e.target.value.includes('Get')) {
            childRef.current.getAllTasks()
        }
        let name = e.target.value
        let userTasksArr = []
        // eslint-disable-next-line
        Admins.map(admin => {
            //Compare the name chosen on the form to the ones in
            //the store to get the user.id n send it
            if (name.toLowerCase() === admin.name.toLowerCase()) {
                dispatch(setLoading())
                api.Tasks().getUsersTasks(admin.id)
                .then(res => {
                    if (res.status === 200) {
                        //If successful take the array of taskIds that is returned and get the
                        //actual tasks
                        const {tasks} = res.data
                        if (tasks.length !== 0) {
                            //Convert to an object so that it can be sent to the
                            //store to replace the taskIds so that the right task can be updated
                            const taskObject = Object.assign({}, tasks)
                            dispatch(addTaskIds(taskObject))
                            let len = tasks.length
                            // eslint-disable-next-line
                            tasks.map(task => {
                                api.Tasks().getTask(task)
                                .then(res => {
                                    if (res.status === 200) {
                                        //Wait till the mapping is done n then send the final result
                                        let result = join(res.data, len, userTasksArr)
                                        if(result !== undefined) {
                                            dispatch(addSpecificTasks(result))
                                            dispatch(setLoading())
                                        }
                                    }
                                })
                                .catch(err => {
                                    dispatch(setLoading())
                                    console.log(err)
                                    const {message} = err.response.data
                                    notify('error', message)
                                })
                            })
                        } else {
                            dispatch(setLoading())
                            //Send an empty array if the users has no tasks
                            userTasksArr = []
                            dispatch(addSpecificTasks(userTasksArr))
                        }
                    } 
                })
                .catch(err => {
                    dispatch(setLoading())
                    const {message} = err.response.data
                    notify('error', message)
                })
            }
        })
    }

    function handleTaskUpdate(e) {
        //Getting the index of the clicked row
        let rowIndex = parseInt(e.currentTarget.className.slice(4,6))
        //Map the indexes stored in state to see which one matches the one that was clicked
        // eslint-disable-next-line
        Object.keys(TaskIds).map((key) => {
            if (parseInt(key) === rowIndex) {
                api.Tasks().getTask(TaskIds[key])
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
        childRef.current.clearFormFields()
        setModalShow(!modalShow)
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Check tasks assigned to a user
        </Tooltip>
      );

    const join = (data, len, arr) => {
        arr.push(data)
        //Once userTasks has the same number of items as the
        //one in tasks return the array
        if (arr.length === len) {
            return arr
        }
    } 

    return (
        <>
        <AddButton onClick={() => toggleModal()} />
        <TaskModal
        ref={childRef}
        task={tasktobeupdated}
        show={modalShow}
        onHide={() => toggleModal()}
        />
        <ConfirmDelete taskIds={TaskIds} rowIndex={rowIndex} show={deleteModal} onHide={() => setDeleteModal(false)}/>
        <Container className="col-12 container">
            <CardContainer className="main-card mb-3 card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <CardTitle className="card-title">Tasks</CardTitle>
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >   
                    {Admins.length !== 0 ? 
                        <Form.Control as="select" onChange={(e) => handleUserTasks(e)}>
                            <option>Choose user</option>
                            <option>Get All Tasks</option>
                            {Admins.length !== 0 ? Admins.map((admin, index) => (
                                <option key={index} className="names">{admin.name}</option>
                            )): 'Loading'}
                        </Form.Control>
                        :
                        <StairsLoader />
                        }
                        </OverlayTrigger>
                    </div>
                    <div className="ReactTable -striped -highlight -fixed">
                        <div className="rt-table" role="grid">
                            <BouncingBall loading={Loading} />
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
                                    {Object.keys(Tasks).length !== 0 && Tasks.results.length !== 0 ? Tasks.results.map((task, index) => (
                                        <OverlayTrigger
                                        trigger="click"
                                        key={index}
                                        placement="bottom-end"
                                        rootClose={true}
                                        overlay={
                                            <Popover id={`popover-positioned-bottom`}>
                                            <Popover.Title as="h3">Actions</Popover.Title>
                                            <Popover.Content>
                                                <Button className={`mr-2 mb-2 col-12 ${index}`} variant="outline-success" onClick={handleAssign}>Assign</Button>
                                                <div className="d-flex justify-content-between">
                                                    <Button className={`mr-2 ${index}`} variant="outline-primary" onClick={handleTaskUpdate}>Update</Button>
                                                    <Button variant="danger" className={`${index}`} onClick={handleDelete}>Delete</Button>
                                                </div>
                                            </Popover.Content>
                                            </Popover>
                                        }
                                    >  
                                        <div className={`rt-tr ${index}`} key={index}>
                                            {/* Checks the index of the grid cell if its odd it gives an odd class name
                                            which turns it grey */}
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.id.slice(20)}</div>
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.description}</div>
                                                {/* While the user's name is still unavailable we give the field a spinner/loader */}
                                                <div className={`rt-td ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">
                                                    {TaskCreators.length === 0 ? <Spinner animation="border" variant="primary" size="sm" /> : TaskCreators[index]}
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
                        <Pagination ref={childRef} limit={Tasks.limit} page={Tasks.page} totalResults={Tasks.totalResults} totalPages={Tasks.totalPages} />
                    </div>
                </div>
            </CardContainer>
        </Container>
        </>
    )
}
