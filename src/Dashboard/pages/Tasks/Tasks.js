import React, {useState, useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import Form from 'react-bootstrap/Form'


//Own Components
import './Tasks.scss'
import AddButton from '../../Reusable Components/AddButton'
import TaskModal from './TaskModal'
import Pagination from './Pagination'
import Api from '../../../services/network'
import notify from '../../../helpers/Notify'
import BouncingBall from '../../Reusable Components/BouncingBall'
import StairsLoader from '../../Reusable Components/StairsLoader'
import ConfirmDelete from '../../Reusable Components/ConfirmDelete'
import AssignModal from '../../Reusable Components/AssignModal'
import {addSpecificTasks, setLoading, taskToBeUpdated, setModalShow, userToBeUpdated} from '../../../redux/action-creator/index'
import { displayErrorMsg } from '../../../helpers/ErrorMessage'
import { toggleModal } from '../../../helpers/Reusable Functions';


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

    .pop-over svg {
        font-size: 22px;
        float: right;
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

//Fetching of the tasks happens in the pagination component
export default function Tasks() {
    const [popoverShow, setPopoverShow] = useState(false);
    const [target, setTarget] = useState('');
    const [rowId, setRowId] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [assignModal, setAssignModal] = useState(false);
    const [tasktobeassigned, settasktobeassigned] = useState('');

    const {Tasks, Loading, TaskCreators, Admins} = useSelector(state => state.tasks)
    const {modalShow} = useSelector(state => state.users)

    const dispatch = useDispatch()
    //Using the ref attribute to run a function 
    //in the child component
    const paginationRef = useRef()
    const api = new Api()
    //To open the popover responsible for updating, deleting or assigning tasks
    const popoverRef = useRef()

    //Assign a task to a user
    function handleAssign(e) {
        //Getting the index of the clicked row
        let rowId = e.currentTarget.className.slice(30,54)
        if (Tasks.results.length !== 0) {
            const {results} = Tasks
            // eslint-disable-next-line
            results.map((task) => {
                if (task.id === rowId) {
                    if (task.status === 'inProgress') {
                        notify('error', 'Can\'t assign a task that is already in progress')
                    } else {
                        settasktobeassigned(task)
                        setAssignModal(true)
                    }
                }
            })
        } 
    }

    //Get the tasks of the specified user
    function handleUserTasks(e, params) {
        let userDetails;
        if (e === null) {
            userDetails = params
        } else if (e.target.value.includes('Get')) {
            paginationRef.current.getAllTasks()
            userDetails = 'none'
        } else {
            // Get the id of the selected option using the e.target.value and store it
            // in the browser so that it can be used to fetch that user's tasks
            const selectedElement = document.getElementsByClassName(`${e.target.value}`)
            userDetails = selectedElement[0].id   
        }

        localStorage.setItem('userdetails', userDetails)
        let userTasksArr = []
        
        if (userDetails !== 'none') {
            dispatch(setLoading())
            // Get the specific user's tasks
            api.Tasks().getUsersTasks(userDetails)
            .then(res => {
                if (res.status === 200) {
                    //If successful take the array of taskIds that is returned and get the
                    //actual tasks
                    const {tasks} = res.data
                    if (tasks.length !== 0) {
                        //Convert to an object so that it can be sent to the
                        //store to replace the taskIds so that the right task can be updated
                        let len = tasks.length
                        // eslint-disable-next-line
                        tasks.map(task => {
                            api.Tasks().getTask(task)
                            .then(res => {
                                if (res.status === 200) {
                                    //Wait till the mapping is done n then send the final result
                                    let result = join(res.data, len, userTasksArr)
                                    if(result) {
                                        dispatch(addSpecificTasks(result))
                                        dispatch(setLoading())
                                    }
                                }
                            })
                            .catch(err => {
                                displayErrorMsg(err, dispatch)
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
                displayErrorMsg(err, dispatch)
            })
        }
    }

    function handleTaskUpdate(e) {
        //Getting the id of the clicked row
        let rowId = e.currentTarget.className.slice(11, 35)
        //Map the indexes stored in state to see which one matches the one that was clicked
        const {results} = Tasks
        // eslint-disable-next-line
        results.map((value) => {
            if (value.id === rowId) {
                dispatch(taskToBeUpdated(value))
                dispatch(setModalShow())
            }
        }) 
    }

    function handleDelete(e) {
        //Getting the id of the clicked row
        let rowId= e.currentTarget.className.slice(6, 30)
        setRowId(rowId)
        setDeleteModal(true)
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

    const handlePopover = (e) => {
        setPopoverShow(!popoverShow)
        //To allow the user to use the svg close icon to close the popover
        if (typeof(e.target.className) !== 'object') {
            if (e.target.className.indexOf('button') === -1) {
                setTarget(e.target)
            }
        }
    }
    return (
        <>
        <AddButton onClick={() => dispatch(setModalShow())} />
        <TaskModal
        show={modalShow}
        onHide={() => toggleModal(dispatch, userToBeUpdated, setModalShow)}
        />
        <ConfirmDelete deleteType="tasks" id={rowId} show={deleteModal} onHide={() => setDeleteModal(false)}/>
        <AssignModal admins={Admins} task={tasktobeassigned} show={assignModal} onHide={() => setAssignModal(false)}/>
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
                                <option key={index} id={admin.id} className={`names ${admin.name}`}>{admin.name}</option>
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
                                    <div className="rt-resizable-header-content">Created By</div>
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
                                          
                                        <div popoverref={popoverRef} onClick={handlePopover} className={`rt-tr ${task.id}`} key={index}>
                                            <Overlay
                                                show={popoverShow}
                                                target={target}
                                                container={popoverRef.current}
                                                containerPadding={20}
                                                key={index}
                                                placement="bottom-end"
                                                rootClose={true}
                                                onHide={() => {}}
                                            >
                                                <Popover id={`popover-positioned-bottom`} onClick={handlePopover}>
                                                    <Popover.Title as="h3" className="pop-over">
                                                        Actions
                                                        <span className="iconify" data-icon="carbon:close" data-inline="false"></span>
                                                    </Popover.Title>
                                                    <Popover.Content>
                                                        {/* The assign button should be hidden if the task has an attribute of 'assigned: true' */}
                                                        <Button className={`mr-2 mb-2 assign col-12 ${target.className} button`} variant="outline-success" onClick={handleAssign}>Assign</Button>
                                                        <div className="d-flex justify-content-between">
                                                            <Button className={`mr-2 ${target.className} button`} variant="outline-primary" onClick={handleTaskUpdate}>Update</Button>
                                                            <Button variant="danger" className={`${target.className} button`} onClick={handleDelete}>Delete</Button>
                                                        </div>
                                                    </Popover.Content>
                                                    </Popover>
                                            </Overlay>
                                            {/* Checks the index of the grid cell if its odd it gives an odd class name
                                            which turns it grey */}
                                                <div className={`rt-td ${task.id} ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.id.slice(20)}</div>
                                                <div className={`rt-td ${task.id} ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.description}</div>
                                                {/* While the user's name is still unavailable we give the field a spinner/loader */}
                                                <div className={`rt-td ${task.id} ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">
                                                    {TaskCreators.length === 0 ? <Spinner animation="border" variant="primary" size="sm" /> : TaskCreators[index]}
                                                </div>
                                                <div className={`rt-td ${task.id} ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">
                                                {/* The color of the dot changes according to the task status */}
                                                <span><span className={`dot-${task.status}`}>●</span> {task.status}</span>
                                                </div>
                                                <div className={`rt-td ${task.id} ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.dueDate.slice(0, 10)}</div>
                                                <div className={`rt-td ${task.id} ${index % 2 !== 0 ? '' : 'odd'}`} role="gridcell">{task.stack}</div>
                                        </div>
                                    )): null}
                                </div>
                            </div>
                        </div>
                        <Pagination handleUserTasks={handleUserTasks} ref={paginationRef} limit={Tasks.limit} page={Tasks.page} totalResults={Tasks.totalResults} totalPages={Tasks.totalPages} />
                    </div>
                </div>
            </CardContainer>
        </Container>
        </>
    )
}
